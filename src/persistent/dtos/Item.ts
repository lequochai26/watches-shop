export interface Item {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
}

export type ItemKeys = (keyof Item)[];

export const itemKeys: ItemKeys = [
    "id", "name", "description", "price", "image"
];