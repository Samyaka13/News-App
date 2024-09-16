import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/acowale": "https://news-app-2-hxyu.onrender.com/api/v1/",
    },
  },
  plugins: [react()],
})
