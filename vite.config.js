import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Use polling instead of native file system watchers
      usePolling: true,
      interval: 100,   // Check for file changes every 100ms
    },
  },
})
