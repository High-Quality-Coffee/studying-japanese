import fs from "node:fs/promises";
import path from "node:path";
import { PDFParse } from "pdf-parse";

async function main() {
  const materialsDir = path.resolve(process.cwd(), "materials");
  const target = process.argv[2] ?? "1. 핵심단어카드 01(PDF).pdf";
  const file = path.join(materialsDir, target);

  const buffer = await fs.readFile(file);
  const parser = new PDFParse({ data: new Uint8Array(buffer) });
  const result = await parser.getText();

  console.log("=== PDF INFO ===");
  console.log("pages:", result.pages?.length);
  console.log("total text length:", result.text.length);
  console.log();
  console.log("=== FIRST PAGE TEXT (3000 chars) ===");
  console.log(result.text.slice(0, 3000));
  console.log();
  console.log("=== LAST 1500 CHARS ===");
  console.log(result.text.slice(-1500));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
