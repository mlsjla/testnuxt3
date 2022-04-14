
import { defineNuxtPlugin } from '#app'
import * as ElementPlus from "element-plus/dist/index.full.js";


export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(ElementPlus, { size: 'large', zIndex: 3000 })
})