import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Test from '../views/Test.vue'
import TeamPage from '../views/TeamPage.vue'
import Services from '../views/Services.vue'
import ContactForm from '../components/ContactForm.vue'
import Dashboard from '../components/Dashboard.vue'
import Partenaires from '../components/Partenaires.vue'
import NousRejoindre from '../components/NousRejoindre.vue'
import Actualite from '../components/Actualite.vue'
import Projet from '../views/Projet.vue'


const routes = [
  { path: '/', name: 'Home', component: Home, meta: { layout: true } },
  { path: '/projet', name: 'Projet', component: Projet, meta: { layout: true } },
  { path: '/test', name: 'Test', component: Test, meta: { layout: true } },
  { path: '/a-propos', name: 'About', component: About, meta: { layout: true } },
  { path: '/services', name: 'Services', component: Services, meta: { layout: true } },
  { path: '/contact', name: 'Contact', component: ContactForm, meta: { layout: true } },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: { layout: true } },

    { path: '/actualite', name: 'Actualite', component: Actualite, meta: { layout: true } },
  { path: '/partenaires', name: 'Partenaires', component: Partenaires, meta: { layout: true } },
  { path: '/nous-rejoindre', name: 'NousRejoindre', component: NousRejoindre, meta: { layout: true } },

  { path: '/team/:region', name: 'TeamPage', component: TeamPage, props: true },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
