import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/portifolio-cv/', 
  plugins: [react()],
  build: {
    outDir: 'dist',
  }
})

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
