import { IItemDBHandler } from "@/persistent/interfaces/IItemDBHandler";
import IItemManager from "./interfaces/IItemManager";
import Item from "./entities/Item";
import { ItemData } from "@/persistent/dtos/ItemData";

export default class ItemManager implements IItemManager {
    // Fields:
    private itemDBHandler: IItemDBHandler;

    // Constructor:
    public constructor(itemDBHandler: IItemDBHandler) {
        this.itemDBHandler = itemDBHandler;
    }

    // Methods:
    public async getAll(): Promise<Item[]> {
        // Get all dtos
        const dtos: ItemData[] = await this.itemDBHandler.getAll();

        // Converting dtos to entities
        return this.dtosToEntities(dtos);
    }

    public async get(id: string): Promise<Item | undefined> {
        // Get dto
        const dto: ItemData | undefined = await this.itemDBHandler.get(id);

        // Exit if dto not found
        if (!dto) {
            return;
        }

        // Converting dto into entity and return
        return this.dtoToEntity(dto);
    }

    public async insert(target: Item): Promise<void> {
        return this.itemDBHandler.insert(
            this.entityToDto(target)
        );
    }

    public async update(target: Item): Promise<void> {
        return this.itemDBHandler.update(
            this.entityToDto(target)
        );
    }

    public async remove(target: Item): Promise<void> {
        return this.itemDBHandler.remove(
            this.entityToDto(target)
        );
    }

    // Private methods:
    private dtoToEntity(dto: ItemData): Item {
        return new Item(dto.id, dto.name, dto.description, dto.price, dto.image);
    }

    private dtosToEntities(dtos: ItemData[]): Item[] {
        const result: Item[] = [];

        for (const dto of dtos) {
            result.push(
                this.dtoToEntity(dto)
            );
        }

        return result;
    }

    private entityToDto(entity: Item): ItemData {
        return {
            id: entity.Id as string,
            name: entity.Name as string,
            description: entity.Description as string,
            price: entity.Price as number,
            image: entity.Image as string
        };
    }
}