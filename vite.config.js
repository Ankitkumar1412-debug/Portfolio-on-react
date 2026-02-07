import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Portfolio-on-react/',   // 👈 IMPORTANT (repo name)
  server: {
    allowedHosts: ['c92215eb2af0.ngrok-free.app'],
  },
})
