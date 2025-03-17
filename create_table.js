import { sql } from "./db.js";

async function createTable() {
    try {
        await sql`
        CREATE TABLE IF NOT EXISTS videos (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            duration INTERVAL NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        `;
        console.log("Tabela 'videos' criada com sucesso!");
    } catch (error) {
        console.error("Erro ao criar a tabela:", error);
    }
}

createTable();
