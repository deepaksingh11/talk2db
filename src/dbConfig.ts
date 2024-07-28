import { DataSource } from "typeorm";

export interface DbConfig {
    type: "postgres" | "mysql";
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
}

export const createDataSource = (config: DbConfig): DataSource => {
    return new DataSource({
        type: config.type,
        host: config.host,
        port: config.port,
        username: config.username,
        password: config.password,
        database: config.database,
    });
};