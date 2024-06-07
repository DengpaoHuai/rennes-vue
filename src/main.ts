import './assets/main.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/router'
import { createPinia } from 'pinia'
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import PrimeVue from 'primevue/config'
import myPlugin from './plugins/myPlugin'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
export const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      gcTime: 60000
    }
  }
})

const app = createApp(App)
const pinia = createPinia()
//pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(PrimeVue)
app.use(VueQueryPlugin, {
  queryClient: client
})

app.use(myPlugin, {
  pinia: pinia
})

app.component('DefaultLayout', DefaultLayout)
app.component('MainLayout', MainLayout)
app.mount('#app')
