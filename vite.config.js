import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
<<<<<<< HEAD
  base: process.env.VITE_BASE_PATH || "/Streamify",
=======
  base: "/",
>>>>>>> 3cc8a862d685ddd7c85e8aa2359c5a8d92faf3a0
})
