import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      {
        find: '@types',
        replacement: fileURLToPath(new URL('./src/Types', import.meta.url)),
      },
      {
        find: '@axios',
        replacement: fileURLToPath(new URL('./src/Utils/axios.ts', import.meta.url)),
      },
      {
        find: '@hooks',
        replacement: fileURLToPath(new URL('./src/Hooks', import.meta.url)),
      },
      {
        find: '@components',
        replacement: fileURLToPath(new URL('./src/Components', import.meta.url)),
      },
    ],
  },
})
