export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/ui'
  ],
  content: {
    documentDriven: {
      page: true,
      surround: true
    }
  }
})
