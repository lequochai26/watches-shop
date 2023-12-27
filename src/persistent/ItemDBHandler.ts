import { get, getAll, insert, remove, update } from "./DBHandler";
import { ItemData, itemKeys } from "./dtos/ItemData";
import { IItemDBHandler } from "./interfaces/IItemDBHandler";

export default class ItemDBHandler implements IItemDBHandler {
    // Static fields:
    private static collectionName: string = "Item";

    // Constructor:
    public constructor() {

    }

    // Methods:
    public async getAll(): Promise<ItemData[]> {
        return getAll(ItemDBHandler.collectionName, itemKeys);
    }

    public async get(id: string): Promise<ItemData | undefined> {
        return get(ItemDBHandler.collectionName, { id: id }, itemKeys);
    }

    public async insert(target: ItemData): Promise<void> {
        return insert(ItemDBHandler.collectionName, target);
    }

    public async update(target: ItemData): Promise<void> {
        return update(ItemDBHandler.collectionName, target, { id: target.id });
    }

    public async remove(target: ItemData): Promise<void> {
        return remove(ItemDBHandler.collectionName, { id: target.id });
    }
}