import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'prompt',
    injectRegister: false,
  
    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'turnos-app',
      short_name: 'turnos',
      description: 'App destinada a la organizacion de negocios',
      theme_color: '#f3f3f3',
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Crea un alias para la carpeta "src"
    },
  },
})