import { Item } from "../dtos/Item";
import { IDBHandler } from "./IDBHandler";

export interface IItemDBHandler extends IDBHandler<Item> {
    get(id: string): Promise<Item | undefined>;
}