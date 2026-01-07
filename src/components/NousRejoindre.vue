<template>
  <div class="bg-gray-50 min-h-screen flex flex-col">

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-32 px-6 text-center overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="relative z-10 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg ">
          SCB Systems
        </h1>
        <p class="text-lg md:text-xl mb-8">
          Nous nous concentrons sur l'excellence de nos services
        </p>
      </div>
      <!-- Effet décoratif -->
      <div class="absolute -bottom-16 -right-16 w-72 h-72 bg-white/20 rounded-full animate-pulse"></div>
      <div class="absolute -top-16 -left-16 w-72 h-72 bg-white/20 rounded-full animate-pulse"></div>
    </section>

    <!-- No Recruitment Section -->
    <section class="py-20 px-6 max-w-4xl mx-auto flex-1 text-center">
      <!-- Illustration élégante -->
      <div class="mb-12">
        <div class="relative mx-auto w-80 h-80">
          <!-- Cercle de fond -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full shadow-2xl"></div>
          
          <!-- Personnage professionnel stylisé -->
          <div class="absolute inset-0 flex items-center justify-center">
            <!-- Silhouette élégante -->
            <div class="relative">
              <!-- Tête -->
              <div class="w-20 h-20 bg-blue-200 rounded-full mx-auto mb-4 relative z-10 shadow-lg">
                <!-- Traits du visage subtils -->
                <div class="absolute top-6 left-5 w-2 h-2 bg-blue-400 rounded-full"></div>
                <div class="absolute top-6 right-5 w-2 h-2 bg-blue-400 rounded-full"></div>
                <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-blue-400 rounded-full"></div>
              </div>
              
              <!-- Corps -->
              <div class="w-16 h-24 bg-blue-300 rounded-lg mx-auto relative shadow-md">
                <!-- Col -->
                <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-blue-400 rounded-t-lg"></div>
              </div>
            </div>
            
            <!-- Symbole "Non" élégant -->
            <div class="absolute top-6 right-8">
              <div class="relative">
                <!-- Cercle externe -->
                <div class="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-gentle-pulse">
                  <!-- Croix stylisée -->
                  <div class="relative w-10 h-10">
                    <div class="absolute top-1/2 left-1/2 w-12 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                    <div class="absolute top-1/2 left-1/2 w-12 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
                  </div>
                </div>
                <!-- Effet de brillance -->
                <div class="absolute top-2 left-2 w-4 h-4 bg-white/30 rounded-full"></div>
              </div>
            </div>
            
            <!-- Document/contrat stylisé -->
            <div class="absolute bottom-8 left-8">
              <div class="w-16 h-20 bg-white rounded-lg shadow-lg transform -rotate-6 animate-float">
                <!-- Lignes du document -->
                <div class="absolute top-4 left-3 w-10 h-1 bg-blue-200 rounded"></div>
                <div class="absolute top-6 left-3 w-8 h-1 bg-blue-200 rounded"></div>
                <div class="absolute top-8 left-3 w-6 h-1 bg-blue-200 rounded"></div>
                <div class="absolute top-10 left-3 w-7 h-1 bg-blue-200 rounded"></div>
                <!-- Icône stylo -->
                <div class="absolute bottom-3 right-3 w-4 h-4 bg-red-400 rounded-sm transform rotate-45"></div>
              </div>
            </div>
          </div>
          
          <!-- Texte flottant élégant -->
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-xl animate-gentle-bounce">
            <div class="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              Aucun recrutement en cours
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Aucun Recrutement en Cours
      </h2>
      
      <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
        Pour le moment, nous ne recrutons pas de nouveau personnel. 
        Nous nous concentrons sur la qualité de nos services existants et 
        l'excellence de notre support client.
      </p>

      <div class="bg-blue-50 rounded-2xl p-8 max-w-2xl mx-auto border border-blue-100">
        <h3 class="text-2xl font-bold text-blue-800 mb-6">Notre Focus Actuel</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div class="flex items-start space-x-4 p-4 rounded-xl bg-white/50 hover:bg-white/80 transition-colors">
            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-blue-600 font-bold text-lg">✓</span>
            </div>
            <div>
              <h4 class="font-semibold text-blue-900 text-lg">Support Client</h4>
              <p class="text-gray-600">Amélioration continue de notre assistance</p>
            </div>
          </div>
          <div class="flex items-start space-x-4 p-4 rounded-xl bg-white/50 hover:bg-white/80 transition-colors">
            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-blue-600 font-bold text-lg">✓</span>
            </div>
            <div>
              <h4 class="font-semibold text-blue-900 text-lg">Innovation</h4>
              <p class="text-gray-600">Développement de nouvelles fonctionnalités</p>
            </div>
          </div>
          <div class="flex items-start space-x-4 p-4 rounded-xl bg-white/50 hover:bg-white/80 transition-colors">
            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-blue-600 font-bold text-lg">✓</span>
            </div>
            <div>
              <h4 class="font-semibold text-blue-900 text-lg">Qualité</h4>
              <p class="text-gray-600">Optimisation de nos services existants</p>
            </div>
          </div>
          <div class="flex items-start space-x-4 p-4 rounded-xl bg-white/50 hover:bg-white/80 transition-colors">
            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-blue-600 font-bold text-lg">✓</span>
            </div>
            <div>
              <h4 class="font-semibold text-blue-900 text-lg">Stabilité</h4>
              <p class="text-gray-600">Consolidation de notre infrastructure</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 px-6 text-center relative overflow-hidden">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">Vous avez d'autres questions ?</h2>
      <p class="max-w-3xl mx-auto mb-8 text-lg md:text-xl">
        N'hésitez pas à nous contacter pour toute information sur nos services
      </p>
      <a 
        href="/contact"
        class="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 hover:scale-105 transition transform inline-block"
      >
        Nous contacter
      </a>
      <!-- Décorations -->
      <div class="absolute -bottom-16 -right-16 w-72 h-72 bg-white/20 rounded-full animate-pulse"></div>
      <div class="absolute -top-16 -left-16 w-72 h-72 bg-white/20 rounded-full animate-pulse"></div>
    </section>

    <!-- Footer -->
    <Footer />

  </div>
</template>

<script>
export default {
  name: 'NousRejoindre',
  data() {
    return {
      // Supprimé les données des offres d'emploi
    }
  },
  methods: {
    // Supprimé les méthodes liées au recrutement
  }
}
</script>

<style scoped>
/* Animation de texte gradient */
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradient-text {
  background: linear-gradient(270deg, #3b82f6, #60a5fa, #3b82f6);
  background-size: 600% 600%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientMove 8s ease infinite;
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