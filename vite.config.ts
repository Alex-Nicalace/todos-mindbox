/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': 'src',
      app: '/src/app',
      entities: '/src/entities',
      features: '/src/features',
      pages: '/src/pages',
      shared: '/src/shared',
      widgets: '/src/widgets',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/app/styles/global-tools.scss" as *;',
      },
    },
  },
});
