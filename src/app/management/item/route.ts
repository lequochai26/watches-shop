import ItemModel from "@/app/interfaces/ItemModel";
import { itemManager } from "@/domain/EntityManagerCollection";
import Item from "@/domain/entities/Item";
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