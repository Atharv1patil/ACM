import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    // Open a map of your bundle after every build to see what is large
    visualizer({ open: true, filename: "bundle-stats.html" }) 
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // This helps cPanel servers that have small memory limits
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Splitting large vendor libraries into their own files
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('lucide') || id.includes('icons')) return 'vendor-icons';
            if (id.includes('framer-motion')) return 'vendor-animation';
            return 'vendor'; // all other third-party code
          }
        },
      },
    },
  },
})