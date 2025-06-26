import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'pwa-192x192.png',
        'pwa-512x512.png'
      ],
      manifest: {
        name: 'MERN PWA App',
        short_name: 'PWA App',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#003378',
        orientation: 'portrait',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      devOptions: {
        enabled: true, // allows SW to run in development
        type: 'module'
      },
      // workbox: {
      //   runtimeCaching: [
      //     {
      //       urlPattern: ({ request }) => request.destination === 'document',
      //       handler: 'NetworkFirst',
      //       options: {
      //         cacheName: 'html-cache'
      //       }
      //     },
      //     {
      //       urlPattern: ({ request }) =>
      //         ['style', 'script', 'worker'].includes(request.destination),
      //       handler: 'StaleWhileRevalidate',
      //       options: {
      //         cacheName: 'asset-cache'
      //       }
      //     },
      //     {
      //       urlPattern: ({ request }) => request.destination === 'image',
      //       handler: 'CacheFirst',
      //       options: {
      //         cacheName: 'image-cache',
      //         expiration: {
      //           maxEntries: 50,
      //           maxAgeSeconds: 60 * 60 * 24 * 7 // 1 week
      //         }
      //       }
      //     }
      //   ]
      // }
    })
  ]
});
