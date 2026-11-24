import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PRESERVED_DOCS_ENTRIES = new Set(["tasks"]);

function cleanOutDirPreserving(outDir, preservedEntries) {
  return {
    name: "clean-out-dir-preserving",
    apply: "build",
    buildStart() {
      const resolvedOutDir = path.resolve(__dirname, outDir);
      if (!fs.existsSync(resolvedOutDir)) return;

      for (const entry of fs.readdirSync(resolvedOutDir)) {
        if (preservedEntries.has(entry)) continue;
        fs.rmSync(path.join(resolvedOutDir, entry), {
          recursive: true,
          force: true,
        });
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cleanOutDirPreserving("docs", PRESERVED_DOCS_ENTRIES)],
  build: {
    outDir: "docs",
    emptyOutDir: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
