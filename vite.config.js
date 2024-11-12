// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
 // …
 base: "/white-store",
 permalink: "/white-storeUk",
 plugins: [ react(), svgr()],
});