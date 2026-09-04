import { db } from "../db/sqlite";

export interface EnquiryData {
  name: string;
  email: string;
  projectType: string | null;
  message: string;
}

export async function submitEnquiry(data: EnquiryData): Promise<void> {
  const stmt = db.prepare(`
    INSERT INTO enquiries (name, email, projectType, message)
    VALUES (?, ?, ?, ?)
  `);

  stmt.run(data.name, data.email, data.projectType, data.message);
}
