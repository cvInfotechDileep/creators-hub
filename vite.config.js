import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: 'https://creators-hub-plum.vercel.app/',
  plugins: [react()],
  server: {
    historyApiFallback: true
  }
  // resolve: {
  //   alias: [{ find:"@", replacement: "/src"}],
  // }
})
