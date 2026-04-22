<template>
  <footer class="relative text-white pt-20 pb-8 overflow-hidden" style="background: linear-gradient(135deg, #0a125c 0%, #101E89 50%, #0a125c 100%);">
    <!-- Vagues animées avec nouvelle couleur -->
    <div class="waves-container">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(16, 30, 137, 0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(16, 30, 137, 0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(16, 30, 137, 0.7)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(16, 30, 137, 0.9)" />
        </g>
      </svg>
    </div>

    <!-- Vagues secondaires -->
    <div class="waves-container-secondary">
      <svg class="waves-secondary" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax-secondary">
          <use xlink:href="#wave" x="48" y="0" fill="rgba(16, 30, 137, 0.2)" />
          <use xlink:href="#wave" x="48" y="4" fill="rgba(16, 30, 137, 0.4)" />
          <use xlink:href="#wave" x="48" y="8" fill="rgba(16, 30, 137, 0.6)" />
        </g>
      </svg>
    </div>

    <!-- Effets décoratifs -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
    </div>

    <!-- Contenu du footer -->
    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <!-- Logo et description -->
      <div class="flex flex-col items-center text-center mb-12">
        <img src="/images/loogoblanc.png" alt="SCB Logo" class="h-20 mb-4" />
        <p class="text-blue-200 max-w-2xl text-sm leading-relaxed">
          SCB SYSTEMS, leader africain de l'ingénierie, de la technologie et de la gestion des connaissances.
          Nous accompagnons les entreprises dans leur transformation digitale et leur croissance.
        </p>
      </div>

      <!-- Liens du footer -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <!-- Liens rapides -->
        <div class="text-center md:text-left">
          <h3 class="text-lg font-bold mb-4 relative inline-block md:inline-block" style="color: #a0a8e0;">
            Liens rapides
            <span class="absolute bottom-0 left-0 w-12 h-0.5 rounded-full" style="background-color: #a0a8e0;"></span>
          </h3>
          <ul class="space-y-2 mt-4">
            <li><RouterLink to="/" class="text-blue-200 hover:text-white transition-colors text-sm flex items-center justify-center md:justify-start gap-2 group">
              <svg class="w-3 h-3 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              Accueil
            </RouterLink></li>
            <li><RouterLink to="/a-propos" class="text-blue-200 hover:text-white transition-colors text-sm flex items-center justify-center md:justify-start gap-2 group">
              <svg class="w-3 h-3 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              À propos
            </RouterLink></li>
            <li><RouterLink to="/services" class="text-blue-200 hover:text-white transition-colors text-sm flex items-center justify-center md:justify-start gap-2 group">
              <svg class="w-3 h-3 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              Services
            </RouterLink></li>
            <li><RouterLink to="/contact" class="text-blue-200 hover:text-white transition-colors text-sm flex items-center justify-center md:justify-start gap-2 group">
              <svg class="w-3 h-3 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              Contact
            </RouterLink></li>
          </ul>
        </div>

        <!-- Services -->
        <div class="text-center md:text-left">
          <h3 class="text-lg font-bold mb-4 relative inline-block md:inline-block" style="color: #a0a8e0;">
            Nos services
            <span class="absolute bottom-0 left-0 w-12 h-0.5 rounded-full" style="background-color: #a0a8e0;"></span>
          </h3>
          <ul class="space-y-2 mt-4">
            <li><a href="#" class="text-blue-200 hover:text-white transition-colors text-sm flex items-center justify-center md:justify-start gap-2 group">
              <svg class="w-3 h-3 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              Ingénierie
            </a></li>
            <li><a href="#" class="text-blue-200 hover:text-white transition-colors text-sm flex items-center justify-center md:justify-start gap-2 group">
              <svg class="w-3 h-3 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              Data Science
            </a></li>
            <li><a href="#" class="text-blue-200 hover:text-white transition-colors text-sm flex items-center justify-center md:justify-start gap-2 group">
              <svg class="w-3 h-3 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              Cybersécurité
            </a></li>
            <li><a href="#" class="text-blue-200 hover:text-white transition-colors text-sm flex items-center justify-center md:justify-start gap-2 group">
              <svg class="w-3 h-3 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              Conseil stratégique
            </a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="text-center md:text-left">
          <h3 class="text-lg font-bold mb-4 relative inline-block md:inline-block" style="color: #a0a8e0;">
            Contactez-nous
            <span class="absolute bottom-0 left-0 w-12 h-0.5 rounded-full" style="background-color: #a0a8e0;"></span>
          </h3>
          <ul class="space-y-3 mt-4">
            <li class="flex items-center justify-center md:justify-start gap-3 text-blue-200 text-sm group">
              <div class="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style="background-color: rgba(255,255,255,0.1);">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <span>contact@scbsystems.com</span>
            </li>
            <li class="flex items-center justify-center md:justify-start gap-3 text-blue-200 text-sm group">
              <div class="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style="background-color: rgba(255,255,255,0.1);">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <span>+225 00 00 00 00</span>
            </li>
            <li class="flex items-center justify-center md:justify-start gap-3 text-blue-200 text-sm group">
              <div class="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style="background-color: rgba(255,255,255,0.1);">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <span>Abidjan, Côte d'Ivoire</span>
            </li>
          </ul>
          <!-- Réseaux sociaux -->
          <div class="flex justify-center md:justify-start gap-3 mt-6">
            <a href="#" class="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1" style="background-color: rgba(255,255,255,0.1);">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="#" class="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1" style="background-color: rgba(255,255,255,0.1);">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/>
              </svg>
            </a>
            <a href="#" class="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1" style="background-color: rgba(255,255,255,0.1);">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.68-11.786c0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/>
              </svg>
            </a>
            <a href="#" class="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1" style="background-color: rgba(255,255,255,0.1);">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center pt-8 border-t" style="border-color: rgba(160, 168, 224, 0.2);">
        <p class="text-blue-300 text-xs">
          &copy; 2025 SCB SYSTEMS. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.waves-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.waves {
  position: relative;
  width: 100%;
  height: 80px;
  margin-bottom: -7px;
}

.waves-container-secondary {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  opacity: 0.5;
}

.waves-secondary {
  position: relative;
  width: 100%;
  height: 60px;
  margin-bottom: -7px;
}

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}

.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}

.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 16s;
}

.parallax-secondary > use {
  animation: move-forever 20s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}

.parallax-secondary > use:nth-child(1) {
  animation-delay: -1s;
  animation-duration: 6s;
}

.parallax-secondary > use:nth-child(2) {
  animation-delay: -2s;
  animation-duration: 9s;
}

.parallax-secondary > use:nth-child(3) {
  animation-delay: -3s;
  animation-duration: 12s;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .waves {
    height: 40px;
  }
  .waves-secondary {
    height: 30px;
  }
}
</style>