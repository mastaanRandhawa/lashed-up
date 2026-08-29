import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Served from https://<user>.github.io/lashed-up/ in production,
  // but from root during local dev / preview.
  base: command === 'build' ? '/lashed-up/' : '/',
  plugins: [react(), tailwindcss()],
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
}))
