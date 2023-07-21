export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxt/ui'
  ],
  content: {
    documentDriven: true
  }
})
