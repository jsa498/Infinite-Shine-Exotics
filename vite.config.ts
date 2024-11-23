// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Infinite-Shine-Exotics/', // Ensure this matches your repository name exactly
  plugins: [react()],
});