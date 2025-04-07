import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'Daily-Games' with your actual repo name
export default defineConfig({
  plugins: [react()],
  base: '/Daily-Games/',
})
