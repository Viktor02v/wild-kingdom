export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/sitemap.xml']
    }
  },

  app: {
    head: {
      title: 'Wild Kingdom',
      titleTemplate: '%s - Wild Kingdom',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description',
          content: 'Explore the wonders of the wild with Wild Kingdom'
        },
        { name: 'theme-color', content: '#000000' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  css: [
    '~/assets/scss/main.scss',
  ],

  image: {
    format: ['webp', 'avif'], 
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280
    }
  },

  icon: {
    size: '24px', 
    class: 'icon', 
    aliases: {

      'home': 'ph:house-duotone',
      'menu': 'ph:list-duotone',
      'close': 'ph:x-duotone'
    }
  },

  features: {
    inlineStyles: false
  }
})