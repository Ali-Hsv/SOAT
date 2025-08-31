import { defineConfig } from 'vite'

// Определяем: мы на GitHub Pages или локально
const isGitHubPages = process.env.GITHUB === 'true'

export default defineConfig({
  base: '/SOAT/'
})
