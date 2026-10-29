import { defineConfig } from 'vite';

export default defineConfig({
  base: '/admin-assets/',
  build: { outDir: '../admin-dist', emptyOutDir: true },
});
