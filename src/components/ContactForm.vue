<template>
  <div class="contact-page">
    <!-- Header avec image -->
    <header class="header-container">
      <img src="/images/contact1.jpg" 
        alt="Contact background" class="header-image" />
      
      <!-- Contenu du header -->
      <div class="header-content text-center md:text-left relative z-10">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
          Contactez<br>Nous
        </h1>
        <p class="text-white text-lg md:text-xl leading-relaxed mt-6 mb-4"
          style="text-shadow: 0 4px 18px rgba(0,0,0,0.35);">
          Prêt à concrétiser votre projet ?<br>
          Notre équipe est à votre écoute pour vous accompagner.
        </p>
      </div>
    </header>

    <!-- Section liens de contact -->
    <main>
      <section class="py-20 flex justify-center items-center bg-gradient-to-br from-blue-50 via-white to-blue-200">
        <div class="w-full max-w-4xl bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl p-0 border border-blue-100 overflow-hidden animate-fade-in">
          <!-- Avatar et titre -->
          <div class="flex flex-col items-center justify-center py-10 bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700">
            <div class="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg mb-4">
              <i class='bx bx-link-alt text-blue-700 text-5xl'></i>
            </div>
            <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">Contactez-nous</h2>
            <span class="text-blue-100 text-lg font-medium">Choisissez comment nous contacter</span>
          </div>
          
          <!-- Liens de contact -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
            <!-- Lien Rendez-vous -->
            <a 
              :href="meetingLink" 
              target="_blank"
              class="group flex flex-col items-center text-center p-8 rounded-2xl bg-white/80 border-2 border-transparent hover:border-blue-500 hover:bg-white transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <i class='bx bx-calendar-event text-blue-700 text-3xl'></i>
              </div>
              <h3 class="text-xl font-bold text-blue-900 mb-3">Demander un rendez-vous</h3>
              <p class="text-gray-600 mb-4">
                Prenez rendez-vous avec notre équipe pour discuter de vos besoins spécifiques
              </p>
              <span class="text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                Prendre RDV →
              </span>
            </a>

            <!-- Lien Dashboard -->
            <a 
              :href="dashboardLink" 
              target="_blank"
              class="group flex flex-col items-center text-center p-8 rounded-2xl bg-white/80 border-2 border-transparent hover:border-blue-500 hover:bg-white transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <i class='bx bx-lock-alt text-blue-700 text-3xl'></i>
              </div>
              <h3 class="text-xl font-bold text-blue-900 mb-3">Se connecter au dashboard</h3>
              <p class="text-gray-600 mb-4">
                Accédez à votre espace client Secure Check pour gérer vos services
              </p>
              <span class="text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                Se connecter →
              </span>
            </a>
          </div>
        </div>
      </section>

      <!-- Informations de contact simplifiées -->
      <section class="py-20 px-6 md:px-10 bg-white">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-extrabold text-blue-900 mb-10 text-center tracking-tight">Nos coordonnées</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Adresse -->
            <div class="bg-blue-50 rounded-2xl shadow-xl p-8 text-center">
              <i class='bx bx-map text-5xl text-blue-700 mb-4'></i>
              <h3 class="text-2xl font-bold text-blue-900 mb-2">Adresse</h3>
              <p class="text-gray-700 mb-4">Venez nous rendre visite</p>
              <p class="text-blue-700 font-semibold">Riviera Palmeraie Triangle<br>Abidjan, Côte d'Ivoire</p>
            </div>
            
            <!-- Site web -->
            <div class="bg-blue-50 rounded-2xl shadow-xl p-8 text-center">
              <i class='bx bx-globe text-5xl text-blue-700 mb-4'></i>
              <h3 class="text-2xl font-bold text-blue-900 mb-2">Notre site web</h3>
              <p class="text-gray-700 mb-4">Découvrez tous nos services</p>
              <a 
                :href="websiteLink" 
                target="_blank"
                class="text-blue-700 font-semibold hover:text-blue-900 transition-colors"
              >
                Visiter Secure Check
              </a>
            </div>
          </div>
          
          <!-- Bouton site web principal -->
          <div class="text-center mt-12">
            <a 
              :href="websiteLink" 
              target="_blank"
              class="inline-flex items-center gap-3 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition text-lg"
            >
              <i class='bx bx-world text-xl'></i>
              Découvrir Secure Check
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ContactPage',
  setup() {
    const meetingLink = ref('https://www.securecheck.info/scb/request-meeting')
    const dashboardLink = ref('https://www.securecheck.info/Connexion')
    const websiteLink = ref('https://www.securecheck.info/')

    return {
      meetingLink,
      dashboardLink,
      websiteLink
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
  filter: brightness(0.8);
}

.header-content {
  position: relative; 
  z-index: 30;
  padding-top: 12rem; 
  padding-left: 2rem; 
  padding-right: 2rem;
  max-width: 1200px; 
  margin: 0 auto;
}

.animate-gradient {
  background-size: 300%;
  animation: gradientMove 6s ease infinite;
}

@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(0.5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>