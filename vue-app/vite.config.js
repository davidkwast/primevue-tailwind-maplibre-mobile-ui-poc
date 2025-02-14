import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

import tailwindcss from '@tailwindcss/vite'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [

    vue(),

    tailwindcss(),

    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: 'vue-app',
        short_name: 'vue-app',
        description: 'vue-app',
        theme_color: '#ffffff',
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: true,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
      },
    })],
})