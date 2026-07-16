import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        hindu: resolve(__dirname, 'hindu-pilgrimage.html'),
        about: resolve(__dirname, 'about.html'),
        valmiki: resolve(__dirname, 'valmiki-tiger-reserve-package.html'),
      },
    },
  },
})
