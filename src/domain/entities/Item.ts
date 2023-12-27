export default class Item {
    // Fields:
    private id?: string;
    private name?: string;
    private description?: string;
    private price?: number;
    private image?: string;

    // Constructor:
    public constructor(id?: string, name?: string, description?: string, price?: number, image?: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }

    // Getters / setters:
    public get Id(): string | undefined {
        return this.id;
    }

    public set Id(id: string | undefined) {
        this.id = id;
    }

    public get Name(): string | undefined {
        return this.name;
    }

    public set Name(name: string | undefined) {
        this.name = name;
    }

    public get Description(): string | undefined {
        return this.description;
    }

    public set Description(description: string | undefined) {
        this.description = description;
    }

    public get Price(): number | undefined {
        return this.price;
    }

    public set Price(price: number | undefined) {
        this.price = price;
    }

    public get Image(): string | undefined {
        return this.image;
    }

    public set Image(image: string | undefined) {
        this.image = image;
    }
}