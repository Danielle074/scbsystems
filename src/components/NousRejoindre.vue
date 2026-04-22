<template>
  <div class="recruitment-page min-h-screen flex flex-col bg-white">
    <!-- Hero Section améliorée -->
    <section class="relative text-white py-32 px-6 text-center overflow-hidden" style="background: linear-gradient(135deg, #101E89 0%, #2a3eb8 50%, #101E89 100%);">
      <!-- Effets décoratifs -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div class="relative z-10 max-w-4xl mx-auto mt-20">
        <div class="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-6 tracking-wider" style="background-color: rgba(255,255,255,0.2); backdrop-filter: blur(10px);">
          CARRIÈRES
        </div>
        <h1 class="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
          SCB Systems
        </h1>
        <div class="w-24 h-1 mx-auto rounded-full mb-6 bg-white"></div>
        <p class="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Nous nous concentrons sur l'excellence de nos services et l'innovation continue
        </p>
      </div>

      
    </section>

    <!-- No Recruitment Section - Version élégante -->
    <section class="py-24 px-6 flex-1 relative overflow-hidden" style="background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);">
      <!-- Effets décoratifs -->
      <div class="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style="background-color: #101E89;"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5" style="background-color: #101E89;"></div>

      <div class="max-w-5xl mx-auto text-center relative z-10">
        <!-- Illustration élégante -->
        <div class="mb-12">
          <div class="relative mx-auto w-80 h-80">
            <!-- Cercle de fond -->
            <div class="absolute inset-0 rounded-full shadow-2xl" style="background: linear-gradient(135deg, #e8eaff 0%, #ffffff 100%);"></div>
            
            <!-- Personnage professionnel stylisé -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="relative">
                <!-- Tête -->
                <div class="w-20 h-20 rounded-full mx-auto mb-4 relative z-10 shadow-lg" style="background: linear-gradient(135deg, #101E89, #2a3eb8);">
                  <!-- Traits du visage -->
                  <div class="absolute top-6 left-5 w-2 h-2 bg-white/60 rounded-full"></div>
                  <div class="absolute top-6 right-5 w-2 h-2 bg-white/60 rounded-full"></div>
                  <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-white/60 rounded-full"></div>
                </div>
                
                <!-- Corps -->
                <div class="w-16 h-24 rounded-lg mx-auto relative shadow-md" style="background: linear-gradient(135deg, #2a3eb8, #101E89);">
                  <!-- Col -->
                  <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 rounded-t-lg" style="background: linear-gradient(135deg, #3a4fd4, #2a3eb8);"></div>
                </div>
              </div>
              
              <!-- Symbole "Non" élégant -->
              <div class="absolute top-6 right-8">
                <div class="relative">
                  <div class="w-20 h-20 rounded-full flex items-center justify-center shadow-lg animate-gentle-pulse" style="background: linear-gradient(135deg, #dc2626, #ef4444);">
                    <div class="relative w-10 h-10">
                      <div class="absolute top-1/2 left-1/2 w-12 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                      <div class="absolute top-1/2 left-1/2 w-12 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
                    </div>
                  </div>
                  <div class="absolute top-2 left-2 w-4 h-4 bg-white/30 rounded-full"></div>
                </div>
              </div>
              
              <!-- Document stylisé -->
              <div class="absolute bottom-8 left-8">
                <div class="w-16 h-20 bg-white rounded-lg shadow-lg transform -rotate-6 animate-float">
                  <div class="absolute top-4 left-3 w-10 h-1 rounded" style="background-color: #e8eaff;"></div>
                  <div class="absolute top-6 left-3 w-8 h-1 rounded" style="background-color: #e8eaff;"></div>
                  <div class="absolute top-8 left-3 w-6 h-1 rounded" style="background-color: #e8eaff;"></div>
                  <div class="absolute top-10 left-3 w-7 h-1 rounded" style="background-color: #e8eaff;"></div>
                  <div class="absolute bottom-3 right-3 w-4 h-4 rounded-sm transform rotate-45" style="background: linear-gradient(135deg, #dc2626, #ef4444);"></div>
                </div>
              </div>
            </div>
            
            <!-- Texte flottant élégant -->
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-xl animate-gentle-bounce">
              <div class="text-sm font-semibold flex items-center gap-2" style="color: #101E89;">
                <div class="w-2 h-2 rounded-full animate-pulse" style="background-color: #dc2626;"></div>
                Aucun recrutement en cours
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-4xl md:text-5xl font-bold mb-6" style="color: #101E89;">
          Aucun Recrutement en Cours
        </h2>
        
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Pour le moment, nous ne recrutons pas de nouveau personnel. 
          Nous nous concentrons sur la qualité de nos services existants et 
          l'excellence de notre support client.
        </p>

        <div class="rounded-2xl p-8 max-w-2xl mx-auto" style="background: linear-gradient(135deg, #e8eaff 0%, #ffffff 100%); border: 1px solid rgba(16,30,137,0.1);">
          <h3 class="text-2xl font-bold mb-6" style="color: #101E89;">Notre Focus Actuel</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div class="flex items-start space-x-4 p-4 rounded-xl bg-white hover:shadow-md transition-all duration-300">
              <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style="background-color: #e8eaff;">
                <svg class="w-5 h-5" style="color: #101E89;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-lg" style="color: #101E89;">Support Client</h4>
                <p class="text-gray-500 text-sm">Amélioration continue de notre assistance</p>
              </div>
            </div>
            <div class="flex items-start space-x-4 p-4 rounded-xl bg-white hover:shadow-md transition-all duration-300">
              <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style="background-color: #e8eaff;">
                <svg class="w-5 h-5" style="color: #101E89;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-lg" style="color: #101E89;">Innovation</h4>
                <p class="text-gray-500 text-sm">Développement de nouvelles fonctionnalités</p>
              </div>
            </div>
            <div class="flex items-start space-x-4 p-4 rounded-xl bg-white hover:shadow-md transition-all duration-300">
              <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style="background-color: #e8eaff;">
                <svg class="w-5 h-5" style="color: #101E89;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-lg" style="color: #101E89;">Qualité</h4>
                <p class="text-gray-500 text-sm">Optimisation de nos services existants</p>
              </div>
            </div>
            <div class="flex items-start space-x-4 p-4 rounded-xl bg-white hover:shadow-md transition-all duration-300">
              <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style="background-color: #e8eaff;">
                <svg class="w-5 h-5" style="color: #101E89;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-lg" style="color: #101E89;">Stabilité</h4>
                <p class="text-gray-500 text-sm">Consolidation de notre infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section améliorée -->
    <section class="py-24 px-6 text-center relative overflow-hidden" style="background-color: #101E89;">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div class="relative z-10 max-w-3xl mx-auto">
        <div class="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-white/20">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">
          Vous avez d'autres questions ?
        </h2>
        <p class="max-w-2xl mx-auto mb-8 text-lg text-blue-200">
          N'hésitez pas à nous contacter pour toute information sur nos services
        </p>
        <router-link 
          to="/contact"
          class="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition transform shadow-lg"
          style="background-color: white; color: #101E89;"
        >
          Nous contacter
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </router-link>
      </div>
    </section>

 

    <!-- Bouton Retour en Haut -->
    <button
      @click="scrollToTop"
      v-show="showScrollTop"
      class="fixed bottom-6 right-6 p-4 rounded-full shadow-lg transition transform hover:scale-110 z-50"
      style="background-color: #101E89; color: white;"
      title="Retour en haut"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'NousRejoindre',
  components: {
    Footer
  },
  setup() {
    const showScrollTop = ref(false)

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }

    onMounted(() => {
      window.addEventListener("scroll", () => {
        showScrollTop.value = window.scrollY > 500
      })
    })

    return {
      showScrollTop,
      scrollToTop
    }
  }
}
</script>

<style scoped>
/* Animation scroll */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

/* Pulse doux pour les décorations */
@keyframes gentle-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.9; }
}

.animate-gentle-pulse {
  animation: gentle-pulse 3s ease-in-out infinite;
}

/* Animation de flottement */
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(-6deg); }
  50% { transform: translateY(-8px) rotate(-6deg); }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

/* Rebond doux */
@keyframes gentle-bounce {
  0%, 100% { transform: translateY(0) translateX(-50%); }
  50% { transform: translateY(-5px) translateX(-50%); }
}

.animate-gentle-bounce {
  animation: gentle-bounce 3s ease-in-out infinite;
}

/* Pulse pour décorations principales */
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.1); opacity: 0.3; }
}

.animate-pulse {
  animation: pulse 6s ease-in-out infinite;
}
</style>