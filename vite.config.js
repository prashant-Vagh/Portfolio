import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio/',  // <-- add your repo name here
  plugins: [react()],
})
