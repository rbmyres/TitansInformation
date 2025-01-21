import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/~rbmyres/CS354/Project7/project7',
  server: {
    historyApiFallback: true
  }
})
