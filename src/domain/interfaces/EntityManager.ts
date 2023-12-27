export default interface EntityManager<T> {
    getAll(): Promise<T[]>;
    insert(target: T): Promise<void>;
    update(target: T): Promise<void>;
    remove(target: T): Promise<void>;
}