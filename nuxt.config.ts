export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@vueuse/nuxt',
  ],
  content: {
    documentDriven: {
      page: true,
      surround: true
    }
  }
})
