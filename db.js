import postgres from "postgres";
import "dotenv/config";
import { createServer } from "http";  // Corrigindo a importação do HTTP
import { neon } from "@neondatabase/serverless";

export const sql = neon(process.env.DATABASE_URL);
