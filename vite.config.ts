import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteRails from "vite-plugin-rails";

export default defineConfig({
  plugins: [ ViteRails()],
});
