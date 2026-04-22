<template>
  <div class="projects-page">
    <!-- Header -->
    <header class="relative h-[70vh] flex flex-col items-center justify-center text-center text-white overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${projectsHeaderImage})` }">
        <div class="absolute inset-0" style="background: linear-gradient(135deg, rgba(16,30,137,0.85) 0%, rgba(0,0,0,0.6) 100%);"></div>
      </div>

      <div class="relative z-10 max-w-4xl mx-auto px-6 mt-40">
        <div class="inline-block px-4 py-1 rounded-full text-xs font-semibold mt-6 tracking-wider" style="background-color: rgba(255,255,255,0.2); backdrop-filter: blur(10px);">
          NOS RÉALISATIONS
        </div>
        <h1 class="text-5xl md:text-7xl font-extrabold mb-6">
          Nos Projets
        </h1>
        <div class="w-24 h-1 mx-auto rounded-full mt-6" style="background-color: #101E89;"></div>
        <p class="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Découvrez nos projets phares qui ont transformé le paysage numérique en Afrique
        </p>
      </div>
    </header>

    <!-- Section Projets phares -->
    <section class="py-20 px-6 md:px-12 relative overflow-hidden" style="background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider mb-4" style="background-color: #e8eaff; color: #101E89;">
            PROJETS STRATÉGIQUES
          </span>
          <h2 class="text-3xl md:text-4xl font-bold mb-4" style="color: #101E89;">
            Nos projets phares
          </h2>
          <div class="w-20 h-1 mx-auto rounded-full" style="background-color: #101E89;"></div>
          <p class="text-gray-600 mt-6 max-w-2xl mx-auto">
            Des solutions innovantes qui ont accompagné les plus grandes institutions
          </p>
        </div>

        <!-- Projets en grand format -->
        <div class="space-y-16">
          <!-- Projet 1: Express 54 -->
          <div v-for="(project, index) in projects" :key="index" class="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div :class="['grid md:grid-cols-2 gap-0', index % 2 === 1 ? 'md:flex-row-reverse' : '']">
              <div class="relative h-64 md:h-auto overflow-hidden">
                <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div class="p-8 md:p-10">
                <div class="flex items-center gap-4 mb-4">
                  <img :src="project.logo" :alt="`${project.title} Logo`" class="h-12 w-auto object-contain" />
                  <span class="px-3 py-1 rounded-full text-xs font-semibold" style="background-color: #e8eaff; color: #101E89;">{{ project.badge }}</span>
                </div>
                <h3 class="text-2xl md:text-3xl font-bold mb-4" style="color: #101E89;">{{ project.title }}</h3>
                <p class="text-gray-600 leading-relaxed mb-4">
                  {{ project.description }}
                </p>
                <ul class="space-y-2 mb-6">
                  <li v-for="(feature, i) in project.features" :key="i" class="flex items-center gap-2 text-sm text-gray-600">
                    <svg class="w-4 h-4" style="color: #101E89;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {{ feature }}
                  </li>
                </ul>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(tag, i) in project.tags" :key="i" class="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Chiffres clés des projets -->
    <section class="py-20 px-6 md:px-12 text-white relative overflow-hidden" style="background-color: #101E89;">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-6xl mx-auto text-center relative z-10">
        <span class="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider mb-4" style="background-color: rgba(255,255,255,0.2); color: white;">
          NOTRE IMPACT
        </span>
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Nos réalisations en chiffres</h2>
        <div class="w-20 h-1 mx-auto rounded-full bg-white/50 mb-12"></div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="(stat, index) in stats" :key="index">
            <div class="text-4xl md:text-5xl font-bold mb-2">{{ stat.value }}</div>
            <p class="text-blue-200 text-sm">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Témoignages -->
    <section class="py-20 px-6 md:px-12 bg-white">
      <div class="max-w-4xl mx-auto text-center">
        <span class="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider mb-4" style="background-color: #e8eaff; color: #101E89;">
          ILS NOUS FONT CONFIANCE
        </span>
        <h2 class="text-3xl md:text-4xl font-bold mb-4" style="color: #101E89;">Ce que disent nos clients</h2>
        <div class="w-20 h-1 mx-auto rounded-full mb-12" style="background-color: #101E89;"></div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-gray-50 rounded-2xl p-8 text-left hover:shadow-xl transition-all duration-300">
            <svg class="w-10 h-10 mb-4 opacity-30" style="color: #101E89;" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p class="text-gray-600 mb-4 italic">
              "{{ testimonial.text }}"
            </p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center" style="background-color: #e8eaff;">
                <span class="font-bold" style="color: #101E89;">{{ testimonial.initials }}</span>
              </div>
              <div>
                <p class="font-semibold" style="color: #101E89;">{{ testimonial.name }}</p>
                <p class="text-gray-500 text-sm">{{ testimonial.position }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section CTA -->
    <section class="py-20 px-6 md:px-12 relative overflow-hidden" style="background: linear-gradient(135deg, #f8f9ff 0%, #e8ecff 100%);">
      <div class="max-w-3xl mx-auto text-center">
        <div class="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div class="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style="background: linear-gradient(135deg, #101E89, #2a3eb8);">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h3 class="text-2xl md:text-3xl font-bold mb-4" style="color: #101E89;">Vous avez un projet similaire ?</h3>
          <p class="text-gray-600 mb-8">
            Découvrons ensemble comment SCB Systems peut vous accompagner dans votre transformation digitale
          </p>
          <router-link to="/contact" class="inline-block px-8 py-3 rounded-full text-white font-semibold transition transform hover:scale-105 shadow-lg" style="background-color: #101E89;">
            Discuter de mon projet
          </router-link>
        </div>
      </div>
    </section>

    <!-- Bouton Retour en Haut -->
    <button @click="scrollToTop" v-show="showScrollTop" class="fixed bottom-6 right-6 p-4 rounded-full shadow-lg transition transform hover:scale-110 z-50" style="background-color: #101E89; color: white;">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// ========== IMPORT DES IMAGES DEPUIS LE DOSSIER ASSETS ==========
// Header image
import headerProjetImage from "../assets/images/header.jpg"

// Logos et images des projets
import express54Logo from "../assets/images/express54.png"
import maPosteLogo from "../assets/images/MaPostelogo.png"
import polibyLogo from "../assets/images/Polibylaposte.png"
import laPosteCILogo from "../assets/images/laposteci.png"
import goPosteLogo from "../assets/images/gopost.png"

// Header image
const projectsHeaderImage = headerProjetImage

// Projets data avec les images importées
const projects = ref([
  {
    title: "Express 54",
    logo: express54Logo,
    image: express54Logo,
    badge: "Projet majeur",
    description: "Plateforme de livraison express et de logistique innovante. Nous avons développé une solution complète de gestion des colis, de suivi en temps réel et d'optimisation des tournées pour les livreurs.",
    features: [
      "Application mobile de suivi de colis",
      "Optimisation des tournées en temps réel",
      "Dashboard administrateur avancé"
    ],
    tags: ["Logistique", "Mobile", "IA"]
  },
  {
    title: "Maposte",
    logo: maPosteLogo,
    image: maPosteLogo,
    badge: "Solution digitale",
    description: "Solution de géolocalisation et de cartographie interactive pour les services postaux. Maposte permet de visualiser en temps réel l'ensemble des bureaux de poste et points de service.",
    features: [
      "Cartographie interactive des bureaux",
      "Calcul d'itinéraires optimisés",
      "API de géolocalisation"
    ],
    tags: ["Cartographie", "Géolocalisation", "API"]
  },
  {
    title: "Poliby",
    logo: polibyLogo,
    image: polibyLogo,
    badge: "Plateforme web",
    description: "Plateforme de gestion administrative et de services publics en ligne. Poliby simplifie les démarches administratives pour les citoyens et les entreprises.",
    features: [
      "Gestion dématérialisée des documents",
      "Portail citoyen sécurisé",
      "Workflow de validation automatisé"
    ],
    tags: ["Administratif", "Sécurisé", "Cloud"]
  },
  {
    title: "La Poste CI",
    logo: laPosteCILogo,
    image: laPosteCILogo,
    badge: "Transformation digitale",
    description: "Accompagnement de La Poste de Côte d'Ivoire dans sa transformation digitale. Modernisation des services postaux et développement de solutions innovantes.",
    features: [
      "Digitalisation des services postaux",
      "Solution de suivi de courrier",
      "Formation et accompagnement"
    ],
    tags: ["Digitalisation", "Formation", "Conseil"]
  },
  {
    title: "Go Poste",
    logo: goPosteLogo,
    image: goPosteLogo,
    badge: "Application mobile",
    description: "Application mobile révolutionnaire pour les services postaux. Go Poste permet aux utilisateurs d'effectuer leurs opérations postales directement depuis leur smartphone.",
    features: [
      "Envoi et suivi de colis mobile",
      "Paiement mobile intégré",
      "Notifications push en temps réel"
    ],
    tags: ["Mobile", "Paiement", "UX/UI"]
  }
])

// Statistiques
const stats = ref([
  { value: "5+", label: "Projets majeurs" },
  { value: "1M+", label: "Utilisateurs impactés" },
  { value: "100%", label: "Satisfaction client" },
  { value: "24/7", label: "Support disponible" }
])

// Témoignages
const testimonials = ref([
  {
    text: "SCB Systems a révolutionné notre système de livraison avec Express 54. Aujourd'hui, nos clients sont plus satisfaits que jamais.",
    initials: "JD",
    name: "Jean Dupont",
    position: "Directeur Logistique"
  },
  {
    text: "La transformation digitale de La Poste CI grâce à SCB Systems nous a permis d'atteindre nos objectifs plus rapidement.",
    initials: "MK",
    name: "Mamadou Koné",
    position: "Directeur IT, La Poste CI"
  }
])

// Scroll to top
const showScrollTop = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

onMounted(() => {
  window.addEventListener("scroll", () => {
    showScrollTop.value = window.scrollY > 500
  })
})

onUnmounted(() => {
  window.removeEventListener("scroll", () => {})
})
</script>

<style scoped>
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>