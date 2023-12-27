import { ItemData } from "../dtos/ItemData";
import { IDBHandler } from "./IDBHandler";

export interface IItemDBHandler extends IDBHandler<ItemData> {
    get(id: string): Promise<ItemData | undefined>;
}