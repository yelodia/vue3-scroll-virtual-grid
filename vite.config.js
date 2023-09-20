import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        demo: fileURLToPath(new URL('./demo.html', import.meta.url))
      },
    },
  }
})
