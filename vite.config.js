import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// `base` is required because the site is served from a GitHub Pages
// project subpath: https://darshani8.github.io/New-one-website-/
export default defineConfig({
  base: '/New-one-website-/',
  plugins: [react()],
})
