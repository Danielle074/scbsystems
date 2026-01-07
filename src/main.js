import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Créez l'application
const app = createApp(App)

// Utilisez le routeur
app.use(router)

// Montez l'application
app.mount('#app')