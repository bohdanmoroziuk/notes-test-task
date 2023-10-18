// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  typescript: {
    strict: true,
    typeCheck: true
  },
  css: [
    '~/assets/styles/main.css'
  ],
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: true
      }
    }]
  ]
})
