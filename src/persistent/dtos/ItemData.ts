export interface ItemData {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
}

export type ItemKeys = (keyof ItemData)[];

export const itemKeys: ItemKeys = [
    "id", "name", "description", "price", "image"
];