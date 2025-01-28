// src/db.ts
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from './schema'


config({ path: ".env" }); // or .env.local

if (!process.env.POSTGRES_URL) {
    throw new Error("POSTGRES_URL environment variable is not set.");
}console.log(schema);

const sql = neon(process.env.POSTGRES_URL!);
export const db = drizzle(sql ,{schema});