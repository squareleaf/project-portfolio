import { defineConfig } from "vite"
import { resolve } from "path"
import tailwindcss from "@tailwindcss/vite"
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        resume: resolve(import.meta.dirname, "resume.html"),
        web: resolve(import.meta.dirname, "web.html"),
        writing: resolve(import.meta.dirname, "writing.html"),
      },
    },
  },
})