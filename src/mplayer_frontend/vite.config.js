// src/mplayer_frontend/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Set base to './' to use relative paths
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this matches the 'source' in dfx.json
    sourcemap: false // Disable source maps for production
  },
  server: {
    host: '127.0.0.1',
    port: 5173 // Default Vite port, adjust if necessary
  }
});