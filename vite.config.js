import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    include: /\.(mdx|js|jsx|ts|tsx)$/ ,
    exclude: [],
    loader: 'jsx',
  },
  plugins: [react()],
})
