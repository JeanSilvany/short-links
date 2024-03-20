import { sql } from "./lib/postgres";

async function setup() {
  await sql/*sql*/ `
  CREATE TABLE IF NOT EXISTS short_links (
    id SERIAL PRIMARY KEY,
    code TEXT UNIQUE, 
    original_URL TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`;

  await sql.end();
}

console.log("Setting up database...");

setup();
