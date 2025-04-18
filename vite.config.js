// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/mlimonesbernabe/',    // ← el nombre exacto de tu repo
  plugins: [react()],
})
