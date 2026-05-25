import fs from "node:fs/promises";
import path from "node:path";
import { PDFParse } from "pdf-parse";

async function main() {
  const materialsDir = path.resolve(process.cwd(), "materials");
  const file = path.join(materialsDir, process.argv[2] ?? "1. 핵심단어카드 01(PDF).pdf");
  const pageNum = parseInt(process.argv[3] ?? "1", 10);
  const outDir = path.resolve(process.cwd(), "tmp");
  await fs.mkdir(outDir, { recursive: true });

  const buffer = await fs.readFile(file);
  const parser = new PDFParse({ data: new Uint8Array(buffer) });
  const result = await parser.getScreenshot({ first: pageNum, last: pageNum, scale: 2 });

  if (!result.pages || result.pages.length === 0) {
    console.error("No pages rendered.");
    process.exit(1);
  }

  const outPath = path.join(outDir, `page-${pageNum}.png`);
  await fs.writeFile(outPath, result.pages[0].data);
  console.log("Wrote", outPath, "size:", result.pages[0].data.length, "bytes");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
