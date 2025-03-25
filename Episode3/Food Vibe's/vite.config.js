import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3001,
    proxy: {
      '/api': {
        target: 'https://www.swiggy.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  test: {  // ✅ Moved test configuration outside server
    environment: 'jsdom',  // ✅ Enables DOM support
    globals: true,         // ✅ Enables global test functions (describe, it, expect)
    setupFiles: './setupTests.js', // ✅ Setup file for testing
  },
});
