import Database from "better-sqlite3";
import path from "path";

const DB_PATH = process.env.DATABASE_PATH || "atelier.db";

const db = new Database(path.resolve(DB_PATH));

db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS enquiries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    projectType TEXT,
    message TEXT NOT NULL,
    createdAt TEXT DEFAULT (datetime('now'))
  )
`);

export { db };
