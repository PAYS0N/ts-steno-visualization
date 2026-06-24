import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://pays0n.github.io/ts-steno-visualization/
  base: '/ts-steno-visualization/',
  plugins: [react()],
})
