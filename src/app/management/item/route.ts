import ItemModel from "@/app/interfaces/ItemModel";
import { itemManager } from "@/domain/EntityManagerCollection";
import Item from "@/domain/entities/Item";
import { rmSync, rmdir, writeFileSync } from "fs";
import { NextRequest, NextResponse } from "next/server";

// Request handlers:
export async function GET(request: NextRequest): Promise<NextResponse> {
    try {
        // Get get method from request's search param
        const method: string | null = request.nextUrl.searchParams.get("method");

        // Method not found
        if (!method) {
            return NextResponse.json(
                { success: false, message: "Không tìm thấy phương thức truy vấn!" }
            );
        }

        // Switch case with method
        switch (method) {
            // Get all case
            case 'GETALL': return NextResponse.json(
                {
                    success: true,
                    result: (await itemManager.getAll()).map(
                        function (item: Item): ItemModel {
                            return {
                                id: item.Id as string,
                                name: item.Name as string,
                                description: item.Description as string,
                                price: item.Price as number,
                                image: item.Image as string
                            };
                        }
                    )
                }
            )

            // Get by keyword case
            case 'GETBYKEYWORD': {
                // Get keyword parameter from request's search param
                const keyword: string | null = request.nextUrl.searchParams.get("keyword");

                // Keyword not found case
                if (!keyword) {
                    return NextResponse.json(
                        {
                            success: false,
                            message: "Không tìm thấy từ khóa tìm kiếm!"
                        }
                    );
                }

                // Responding
                return NextResponse.json(
                    {
                        success: true,
                        result: (await itemManager.getAll()).map(entityToModel).filter(
                            function (model: ItemModel) {
                                const { id, name, description, price, image }: ItemModel = model;
                                if (`${id} ${name} ${description} ${price} ${image}`.indexOf(keyword) !== -1) {
                                    return model;
                                }
                            }
                        )
                    }
                )
            }

            // Another case
            default: return NextResponse.json(
                { success: false, message: "Phương thức truy vấn không hợp lệ!" }
            );
        }
    }
    catch (error: any) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: "Đã có lỗi xảy ra trong quá trình xử lý!" }
        );
    }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        // Get request's form data
        const formData: FormData = await request.formData();

        // Get necessary informations from formData
        const id: string = formData.get("id") as string;
        const name: string = formData.get("name") as string;
        const description: string = formData.get("description") as string;
        const price: number = Number.parseInt(
            formData.get("price") as string
        );
        const image: File = formData.get("image") as File;

        // Entitiy with given id already exist case
        if (await itemManager.get(id)) {
            return NextResponse.json(
                {
                    success: false,
                    message: `Đã tồn tại sản phẩm với mã "${id}"`
                }
            );
        }

        // Create new entity
        const item: Item = new Item();

        // Entity fields assignment
        item.Id = id;
        item.Name = name;
        item.Description = description;
        item.Price = price;
        item.Image = await uploadItemImage(image);
        
        // Inserting entity into db
        await itemManager.insert(item);

        // Success responding
        return NextResponse.json(
            { success: true }
        );
    }
    catch (error: any) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: "Đã có lỗi xảy ra trong quá trình xử lý!" }
        );
    }
}

export async function PUT(request: NextRequest): Promise<NextResponse> {
    try {
        // Get request's body as form data
        const formData: FormData = await request.formData();

        // Get necessary informations from form data
        const id: string = formData.get("id") as string;
        const name: string = formData.get("name") as string;
        const description: string = formData.get("description") as string;
        const price: number = Number.parseInt(
            formData.get("price") as string
        );
        const image: File | null = formData.get("image") as File | null;

        // Get item target entity with given id
        const item: Item | undefined = await itemManager.get(id);

        // Entity with given id not exist case
        if (!item) {
            return NextResponse.json(
                { success: false, message: `Không tồn tại sản phẩm với mã "${id}" trong cơ sở dữ liệu hệ thống!` }
            );
        }

        // Update item's field base on given information from form data
        item.Id = id;
        item.Name = name;
        item.Description = description;
        item.Price = price;

        // Update image case
        if (image) {
            // Remove current image of item out of app's storage
            removeItemImage(item.Image as string);

            // Upload new image for this item
            item.Image = await uploadItemImage(image);
        }

        // Updating item
        itemManager.update(item);

        // Success responding
        return NextResponse.json(
            { success: true }
        );
    }
    catch (error: any) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: "Đã có lỗi trong quá trình xử lý!" }
        );
    }
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
    try {
        // Parsing request's body into json
        const { target, targets }: { target: ItemModel | undefined, targets: ItemModel[] | undefined } = await request.json();

        // Target and targets undefined case
        if (!target && !targets) {
            return NextResponse.json(
                { success: false, message: "Không tìm thấy sản phẩm cần xóa!" }
            );
        }

        // Target not undefined case
        if (target) {
            // Destruct target
            const { id }: ItemModel = target;

            // Get item entity with given id
            const item: Item | undefined = await itemManager.get(id);

            // Item not found case
            if (!item) {
                return NextResponse.json(
                    { success: false, message: `Không tồn tại sản phẩm với mã "${id}" trong cơ sở dữ liệu hệ thống!` }
                );
            }

            // Removing item from db
            await itemManager.remove(item);

            // Remove item's image after removing item
            removeItemImage(item.Image as string);
        }

        // Targets not undefined case
        if (targets) {
            // Loop through all targets
            for (const target of targets) {
                // Destruct target
                const { id }: ItemModel = target;

                // Get item entity with given id
                const item: Item | undefined = await itemManager.get(id);

                // Item not found case
                if (!item) {
                    return NextResponse.json(
                        { success: false, message: `Không tồn tại sản phẩm với mã ${id} trong cơ sở dữ liệu hệ thống!` }
                    );
                }

                // Removing item from db
                await itemManager.remove(item);

                // Remove item's image after removed item
                removeItemImage(item.Image as string);
            }
        }

        // Success responding
        return NextResponse.json(
            { success: true }
        );
    }
    catch (error: any) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: "Đã có lỗi xảy ra trong quá trình xử lý!" }
        );
    }
}

// Functions:
function entityToModel(entity: Item): ItemModel {
    return {
        id: entity.Id as string,
        name: entity.Name as string,
        description: entity.Description as string,
        price: entity.Price as number,
        image: entity.Image as string
    };
}

async function uploadItemImage(file: File): Promise<string> {
    // Get id
    const id: string = new Date().getTime().toString();

    // Get file name
    const name: string = `${id}.${file.type.split("/")[1]}`;

    // Get path
    writeFileSync(`${process.cwd()}/public/itemimages/${name}`, Buffer.from(await file.arrayBuffer()));
    
    // Return path
    return `/itemimages/${name}`;
}
function removeItemImage(path: string): void {
    // Path splitting by '/'
    const splittedPath: string[] = path.split('/');

    // Remove dir
    rmSync(`${process.cwd()}/public/itemimages/${splittedPath[splittedPath.length-1]}`)
}