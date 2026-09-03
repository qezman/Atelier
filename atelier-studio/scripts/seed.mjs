import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const projectsPath = path.join(__dirname, '../seedData.json');
const membersPath = path.join(__dirname, '../seedMembers.json');

const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));
const members = JSON.parse(fs.readFileSync(membersPath, 'utf8'));

console.log(`\n--- Atelier Studio Seed Content Verification ---`);
console.log(`Found ${projects.length} curated architectural projects:`);
projects.forEach((p, idx) => {
  console.log(`  ${idx + 1}. [${p.category}] ${p.title} (${p.year}) - ${p.location}`);
  if (!p.coverImage?.alt) {
    throw new Error(`Project ${p.title} is missing required coverImage.alt!`);
  }
  p.gallery?.forEach((g, gIdx) => {
    if (!g.alt) throw new Error(`Project ${p.title} gallery item ${gIdx} is missing required alt!`);
  });
});

console.log(`\nFound ${members.length} studio team members:`);
members.forEach((m, idx) => {
  console.log(`  ${idx + 1}. ${m.name} — ${m.role}`);
  if (!m.photo?.alt) {
    throw new Error(`Member ${m.name} is missing required photo.alt!`);
  }
});

console.log(`\nAll required alt text fields verified against Sanity schemas successfully!`);
