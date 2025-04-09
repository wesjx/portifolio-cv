import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
})

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
