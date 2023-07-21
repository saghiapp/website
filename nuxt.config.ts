export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/ui'
  ],
  content: {
    documentDriven: true,
  },
  experimental: {
    payloadExtraction: false
  }
})
