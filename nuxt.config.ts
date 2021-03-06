import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: 'demo'
    },
    app: {
        baseURL: process.env.NODE_ENV === 'production' ? './' : '/'
    },
    ssr: false,
    buildModules: [
        '@vueuse/nuxt',
        '@pinia/nuxt',
    ],
    css: ["~/assets/scss/tailwind.scss", "~/assets/scss/index.scss", "bootstrap-icons/font/bootstrap-icons.css"],
    components: true,
    publicRuntimeConfig: {
        baseURL: process.env.baseURL
    },
    experimental: {
        reactivityTransform: true
    },
    vite: {
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                }
            }
        },
    }
})
