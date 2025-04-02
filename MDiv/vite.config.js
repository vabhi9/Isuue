import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // "/api" : "http://localhost:7000",
      // "/api/v1/product/register": "http://localhost:7000",
    },

    // headers: {
    //   "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
    //   "Cross-Origin-Embedder-Policy": "require-corp",
    // },
  },
  plugins: [react(), tailwindcss()],
});

