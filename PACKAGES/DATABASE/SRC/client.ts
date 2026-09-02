import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "./SCHEMA/index.js";

export interface DatabaseOptions {
    connectionString: string;
}

export function createDatabase(options: DatabaseOptions) {
    const pool = new Pool({
        connectionString: options.connectionString,
    });

    const db = drizzle(pool, {
        schema,
    });

    return {
        db,
        pool,

        async close(): Promise<void> {
            await pool.end();
        },
    };
}