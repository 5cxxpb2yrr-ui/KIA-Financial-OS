import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { cpSync } from 'node:fs'
import { resolve } from 'node:path'

const legacyCopyPlugin = () => ({
  name: 'copy-legacy-apps',
  closeBundle() {
    cpSync(resolve('legacy'), resolve('dist/legacy'), { recursive: true })
  },
})

export default defineConfig({
  plugins: [vue(), legacyCopyPlugin()],
})
