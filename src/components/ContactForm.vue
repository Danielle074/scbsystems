<template>
  <div class="contact-page">
    <!-- Header avec image amélioré -->
    <header class="header-container">
      <img src="/images/contact1.jpg" alt="Contact background" class="header-image" />
      <div class="header-overlay"></div>

      <!-- Contenu du header -->
      <div class="header-content text-center relative z-20 mt-20">
        <div class="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-6 tracking-wider" style="background-color: rgba(255,255,255,0.2); backdrop-filter: blur(10px); color: white;">
          NOUS CONTACTER
        </div>
        <h1 class="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
          <span class="text-white">Contactez</span>
          <span class="text-transparent bg-clip-text" style="background-image: linear-gradient(135deg, #ffffff, #a0a8e0, #101E89);">-Nous</span>
        </h1>
        <div class="w-24 h-1 mx-auto rounded-full mb-6" style="background-color: #101E89;"></div>
        <p class="text-white text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style="text-shadow: 0 4px 18px rgba(0,0,0,0.35);">
          Prêt à concrétiser votre projet ?<br>
          Notre équipe est à votre écoute pour vous accompagner.
        </p>
      </div>

      
    </header>

    <!-- Section liens de contact principale -->
    <main>
      <section class="py-24 px-6 md:px-10 flex justify-center items-center" style="background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);">
        <div class="w-full max-w-5xl">
          <!-- Titre de section -->
          <div class="text-center mb-12">
            <span class="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider mb-4" style="background-color: #e8eaff; color: #101E89;">
              COMMENT NOUS JOINDRE
            </span>
            <h2 class="text-3xl md:text-4xl font-bold mb-4" style="color: #101E89;">
              Deux façons simples de nous contacter
            </h2>
            <div class="w-20 h-1 mx-auto rounded-full" style="background-color: #101E89;"></div>
          </div>

          <!-- Cartes de contact -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Carte Rendez-vous -->
            <a 
              :href="meetingLink" 
              target="_blank"
              class="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer block"
            >
              <div class="relative h-2" style="background-color: #101E89;"></div>
              <div class="p-8 text-center">
                <div class="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, #101E89, #2a3eb8);">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold mb-3" style="color: #101E89;">Demander un rendez-vous</h3>
                <p class="text-gray-600 mb-4 leading-relaxed">
                  Prenez rendez-vous avec notre équipe pour discuter de vos besoins spécifiques
                </p>
                <div class="inline-flex items-center gap-2 font-semibold transition-all duration-300 group-hover:gap-3" style="color: #101E89;">
                  Prendre RDV
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </a>

            <!-- Carte Dashboard -->
            <a 
              :href="dashboardLink" 
              target="_blank"
              class="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer block"
            >
              <div class="relative h-2" style="background-color: #101E89;"></div>
              <div class="p-8 text-center">
                <div class="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, #101E89, #2a3eb8);">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold mb-3" style="color: #101E89;">Se connecter au dashboard</h3>
                <p class="text-gray-600 mb-4 leading-relaxed">
                  Accédez à votre espace client Secure Check pour gérer vos services
                </p>
                <div class="inline-flex items-center gap-2 font-semibold transition-all duration-300 group-hover:gap-3" style="color: #101E89;">
                  Se connecter
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- Section Informations de contact -->
      <section class="py-24 px-6 md:px-10 bg-white relative overflow-hidden">
        <!-- Effets décoratifs -->
        <div class="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style="background-color: #101E89;"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5" style="background-color: #101E89;"></div>

        <div class="max-w-5xl mx-auto relative z-10">
          <div class="text-center mb-12">
            <span class="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider mb-4" style="background-color: #e8eaff; color: #101E89;">
              NOS COORDONNÉES
            </span>
            <h2 class="text-3xl md:text-4xl font-bold mb-4" style="color: #101E89;">
              Retrouvez-nous
            </h2>
            <div class="w-20 h-1 mx-auto rounded-full" style="background-color: #101E89;"></div>
            <p class="text-gray-600 mt-6 max-w-2xl mx-auto">
              Notre équipe est basée à Abidjan, mais nous intervenons dans toute l'Afrique et dans le monde
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Carte Adresse -->
            <div class="group bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 p-8 border border-gray-100">
              <div class="flex items-start gap-5">
                <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style="background-color: #e8eaff;">
                  <svg class="w-7 h-7" style="color: #101E89;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2" style="color: #101E89;">Notre adresse</h3>
                  <p class="text-gray-500 text-sm mb-3">Venez nous rendre visite</p>
                  <p class="text-gray-700 font-medium">Riviera Palmeraie Triangle</p>
                  <p class="text-gray-600">Abidjan, Côte d'Ivoire</p>
                </div>
              </div>
            </div>

            <!-- Carte Site web -->
            <a :href="websiteLink" target="_blank" class="group bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 p-8 border border-gray-100 cursor-pointer block">
              <div class="flex items-start gap-5">
                <div class="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110" style="background-color: #e8eaff;">
                  <svg class="w-7 h-7" style="color: #101E89;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2" style="color: #101E89;">Notre site web</h3>
                  <p class="text-gray-500 text-sm mb-3">Découvrez tous nos services</p>
                  <p class="text-gray-700 font-medium group-hover:underline" style="color: #101E89;">www.securecheck.info</p>
                </div>
              </div>
            </a>
          </div>

          <!-- Bouton site web principal -->
          <div class="text-center mt-12">
            <a 
              :href="websiteLink" 
              target="_blank"
              class="inline-flex items-center gap-3 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg group"
              style="background: linear-gradient(135deg, #101E89, #2a3eb8);"
            >
              <svg class="w-5 h-5 group-hover:rotate-12 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9"></path>
              </svg>
              Découvrir Secure Check
              <svg class="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <!-- Section CTA Newsletter -->
      <section class="py-20 px-6 md:px-10 relative overflow-hidden" style="background-color: #101E89;">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div class="max-w-3xl mx-auto text-center relative z-10">
          <div class="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-white/20">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">Restez informés</h3>
          <p class="text-blue-200 mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos actualités et offres exclusives
          </p>
          <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              class="flex-1 px-4 py-3 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-700"
            />
            <button class="px-6 py-3 rounded-full font-semibold transition transform hover:scale-105" style="background-color: white; color: #101E89;">
              S'inscrire
            </button>
          </div>
        </div>
      </section>
    </main>

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
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'ContactPage',
  setup() {
    const meetingLink = ref('https://www.securecheck.info/scb/request-meeting')
    const dashboardLink = ref('https://www.securecheck.info/Connexion')
    const websiteLink = ref('https://www.securecheck.info/')
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
      meetingLink,
      dashboardLink,
      websiteLink,
      showScrollTop,
      scrollToTop
    }
  }
}
</script>

<style scoped>
.header-container { 
  position: relative; 
  height: 100vh; 
  overflow: hidden; 
}

.header-image {
  position: absolute; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%;
  object-fit: cover; 
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(16, 30, 137, 0.75) 0%, rgba(0, 0, 0, 0.5) 100%);
  z-index: 5;
}

.header-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 0 2rem;
  z-index: 20;
}



.animate-bounce {
  animation: bounce 2s infinite;
}

/* Animation gradient pour le texte */
.animate-gradient {
  background-size: 300%;
  animation: gradientMove 6s ease infinite;
}

@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>