import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'main.js',
        assetFileNames: ({ name, type }) => {
          if (type === 'asset' && name && name.endsWith('.css')) {
            return 'style.css';
          }
          return '[name].[ext]';
        }
      }
    }
  },
})
