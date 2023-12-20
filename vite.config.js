import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'docs')
// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  base: '/find-worker/',
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        project: resolve(root, 'project/index.html')
      }
    }
  }
})
