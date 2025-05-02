import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Trabalho_Replica-o_de_site_IHC/', 
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})