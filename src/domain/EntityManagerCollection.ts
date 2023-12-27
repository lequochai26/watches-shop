import { itemDBHandler } from "@/persistent/DBHandlerCollection";
import ItemManager from "./ItemManager";
import IItemManager from "./interfaces/IItemManager";

export const itemManager: IItemManager = new ItemManager(itemDBHandler);