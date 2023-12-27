import { get, getAll, insert, remove, update } from "./DBHandler";
import { Item, itemKeys } from "./dtos/Item";
import { IItemDBHandler } from "./interfaces/IItemDBHandler";

export default class ItemDBHandler implements IItemDBHandler {
    // Static fields:
    private static collectionName: string = "Item";

    // Constructor:
    public constructor() {

    }

    // Methods:
    public async getAll(): Promise<Item[]> {
        return getAll(ItemDBHandler.collectionName, itemKeys);
    }

    public async get(id: string): Promise<Item | undefined> {
        return get(ItemDBHandler.collectionName, { id: id }, itemKeys);
    }

    public async insert(target: Item): Promise<void> {
        return insert(ItemDBHandler.collectionName, target);
    }

    public async update(target: Item): Promise<void> {
        return update(ItemDBHandler.collectionName, target, { id: target.id });
    }

    public async remove(target: Item): Promise<void> {
        return remove(ItemDBHandler.collectionName, { id: target.id });
    }
}