import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: "gzip", ext: ".gz", deleteOriginFile: false }),
    visualizer({ filename: "dist/bundle-visualizer.html", open: false }),
    tailwindcss(),
  ],
  build: {
    target: "es2019",
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "vendor_react";
            if (id.includes("framer-motion")) return "vendor_framer";
            return "vendor";
          }
        },
      },
    },
  },
  server: {
    port: 3000,
  },
});
