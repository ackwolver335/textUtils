import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss()],
    server: {
        host: 'localhost', // or '0.0.0.0' if you want LAN access
        port: 5173,
        strictPort: true,
        watch: {
            usePolling: true, // ensures changes are detected in all environments
            interval: 100,    // how often to poll (ms)
        },
        hmr: {
            overlay: true, // shows error overlay in browser
        }
    }
})