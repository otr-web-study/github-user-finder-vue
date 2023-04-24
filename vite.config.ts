import { fileURLToPath, URL } from 'node:url'
import svgLoader from 'vite-svg-loader'
import graphql from '@rollup/plugin-graphql'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader(), graphql()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
