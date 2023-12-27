import { config } from "dotenv";
import { Collection, Db, Document, MongoClient, WithId } from "mongodb";

// .env config
config();

// Get DB info from .env
const dbHost: string = process.env.DB_HOST as string;
const dbPort: string = process.env.DB_PORT as string;
const dbName: string = process.env.DB_NAME as string;

// Interfaces:
interface AccessToCollectionPath {
    connection: MongoClient;
    db: Db;
    collection: Collection<Document>;
}

// Functions:
export async function getAll<T>(collectionName: string, keys: (keyof T)[]): Promise<T[]> {
    // Access to collection
    const { connection, collection }: AccessToCollectionPath = await accessToCollection(collectionName);

    // Get all documents from collection
    try {
        var documents: WithId<Document>[] = await collection.find().toArray();
    }
    catch (error: any) {
        connection.close();
        throw error;
    }

    // Converting documenst into dtos
    const result: T[] = documentsToDtos(documents, keys);

    // Close connection
    connection.close();

    // Return result
    return result;
}

export async function get<T>(collectionName: string, filter: any, keys: (keyof T)[]): Promise<T | undefined> {
    // Connect to db and access to collection
    const { connection, collection }: AccessToCollectionPath = await accessToCollection(collectionName);

    // Get document
    try {
        var document: WithId<Document> | null = await collection.findOne(filter);
    }
    catch (error: any) {
        connection.close();
        throw error;
    }

    // Return undefined if document not found
    if (!document) {
        connection.close();
        return;
    }

    // Convert document into dto if document found
    const result: T = documentToDto(document, keys);

    // Close connection
    connection.close();

    // Return result
    return result;
}

export async function insert(collectionName: string, target: any): Promise<void> {
    // Connect to db and access to collection with given collection name
    const { connection, collection }: AccessToCollectionPath = await accessToCollection(collectionName);

    // Try inserting given target into db's collection
    try {
        await collection.insertOne(target);
    }
    catch (error: any) {
        connection.close();
        throw error;
    }

    // Close connection
    connection.close();
}

export async function update(collectionName: string, target: any, filter: any): Promise<void> {
    // Connect to DB and access to collection with given collection name
    const { connection, collection }: AccessToCollectionPath = await accessToCollection(collectionName);

    // Try updating document in db, set to target if matches filter
    try {
        await collection.updateOne(filter, { $set: target });
    }
    catch (error: any) {
        connection.close();
        throw error;
    }

    // Close connection
    connection.close();
}

export async function remove(collectionName: string, filter: any): Promise<void> {
    // Connect to db and access to collection with given collection name
    const { connection, collection }: AccessToCollectionPath = await accessToCollection(collectionName);

    // Try deleting document that matches the filter in db
    try {
        await collection.deleteOne(filter);
    }
    catch (error: any) {
        connection.close();
        throw error;
    }

    // Close connection
    connection.close();
}

async function accessToCollection(collectionName: string): Promise<AccessToCollectionPath> {
    // Connecting to DB
    const connection: MongoClient = await MongoClient.connect(collectionName);

    // Access to db through db name
    const db: Db = connection.db(dbName);

    // Access to collection with given collection name
    const collection: Collection<Document> = db.collection(collectionName);

    // Return path
    return { connection: connection, db: db, collection: collection };
}

function documentToDto<T>(document: WithId<Document>, keys: (keyof T)[]): T {
    // Target definition
    const target: any = {};

    // Copy fields from document into target
    for (const key of keys) {
        target[key] = document[key as any];
    }

    // Return target
    return target;
}

function documentsToDtos<T>(documents: WithId<Document>[], keys: (keyof T)[]): T[] {
    // Result definition
    const result: T[] = [];

    // Converting each documents into a dto and push into result
    documents.forEach(
        function (document: WithId<Document>) {
            result.push(
                documentToDto(document, keys)
            );
        }
    );

    // Return result
    return result;
}