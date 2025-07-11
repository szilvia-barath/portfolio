// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    outDir: 'docs'                  // optional: build into `docs/` so GH Pages can serve from main branch
  }
})
