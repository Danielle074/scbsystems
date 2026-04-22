<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="relative h-screen w-full overflow-hidden">
      <div class="absolute inset-0 z-0 w-full h-full">
        <div
          v-for="(image, index) in heroImages"
          :key="index"
          class="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
          :class="{ 'opacity-100': currentImageIndex === index, 'opacity-0': currentImageIndex !== index }"
          :style="{ backgroundImage: `url('${image.url}')` }"
        >
          <div class="absolute inset-0 bg-black/50 w-full h-full"></div>
        </div>
      </div>

      <div class="relative z-10 h-full w-full flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg leading-tight max-w-4xl mt-10 sm:mt-14">
          {{ heroImages[currentImageIndex].title }}
        </h1>
        <router-link to="/services" class="mt-6 sm:mt-8 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-white font-semibold transition transform hover:scale-105 shadow-lg text-sm sm:text-base" style="background-color: #101E89;">
          Découvrir nos services
        </router-link>
      </div>

      <div class="absolute bottom-6 sm:bottom-8 z-20 w-full flex justify-center gap-2 sm:gap-3">
        <button
          v-for="(image, index) in heroImages"
          :key="index"
          @click="currentImageIndex = index"
          class="w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 border-white transition-all duration-300"
          :class="{ 'bg-white': currentImageIndex === index, 'bg-transparent': currentImageIndex !== index }"
        ></button>
      </div>
    </section>

    <!-- Section Chiffres clés -->
    <section class="py-10 sm:py-16 text-white" style="background-color: #101E89;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-6 sm:mb-10">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">SCB Systems en chiffres</h2>
          <p class="text-blue-200 text-base sm:text-lg">Des résultats qui parlent d'eux-mêmes</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div class="text-center">
            <div class="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">15+</div>
            <p class="text-blue-200 text-xs sm:text-sm">Années d'expertise</p>
          </div>
          <div class="text-center">
            <div class="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">200+</div>
            <p class="text-blue-200 text-xs sm:text-sm">Projets réalisés</p>
          </div>
          <div class="text-center">
            <div class="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">98%</div>
            <p class="text-blue-200 text-xs sm:text-sm">Clients satisfaits</p>
          </div>
          <div class="text-center">
            <div class="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">3</div>
            <p class="text-blue-200 text-xs sm:text-sm">Continents</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cartes MINCES collées au header -->
    <section class="relative z-20 -mt-8 sm:-mt-12 pb-8 sm:pb-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 md:gap-24">
          <div class="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div class="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center" style="background: linear-gradient(to bottom right, #e8eaff, #d0d4f5);">
              <img src="/images/tts.png" alt="Personnel technique" class="w-7 h-7 object-contain" />
            </div>
            <h3 class="text-base font-bold mb-1" style="color: #101E89;">Le personnel technique</h3>
            <p class="text-gray-600 text-xs leading-relaxed">
              Que vous soyez en démarrage ou en restructuration, nous sommes là pour vous. 
              Notre devise : analyser, identifier, conseiller, exécuter.
            </p>
          </div>

          <div class="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div class="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center" style="background: linear-gradient(to bottom right, #e8eaff, #d0d4f5);">
              <img src="/images/oe.png" alt="Expertise" class="w-7 h-7 object-contain" />
            </div>
            <h3 class="text-base font-bold mb-1" style="color: #101E89;">Notre expertise</h3>
            <p class="text-gray-600 text-xs leading-relaxed">
              Nous sommes un groupe de ressources en gestion d'ingénierie et en science des données, 
              d'analystes, de défenseurs et de stratèges.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Qui nous sommes -->
    <section class="py-10 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
          <div class="text-left">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 sm:after:w-16 after:h-1 after:rounded-full" style="color: #101E89;">
              Qui nous sommes
            </h2>
            <div class="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
              <p class="text-gray-700 text-xs sm:text-sm leading-relaxed">
                SCB Systems est une entreprise leader dans le domaine de l'ingénierie 
                et de la technologie innovante en Afrique et dans le monde.
              </p>
              <p class="text-gray-700 text-xs sm:text-sm leading-relaxed">
                Fondée avec la vision de transformer le paysage technologique, 
                SCB Systems accompagne tous les secteurs d'activité.
              </p>
              <p class="text-gray-700 text-xs sm:text-sm leading-relaxed">
                Nos solutions aident les entreprises à prendre des décisions durables 
                pour assurer leur croissance dans cette ère technologique.
              </p>
              <p class="text-gray-700 text-xs sm:text-sm leading-relaxed">
                Avec une présence en Afrique, aux États-Unis et en France, SCB Systems 
                réunit une équipe de talents passionnés.
              </p>
            </div>
            <router-link to="/a-propos" class="inline-block mt-5 sm:mt-6 px-5 sm:px-6 py-1.5 sm:py-2 text-white font-semibold rounded-full transition text-xs sm:text-sm" style="background-color: #101E89;">
              En savoir plus
            </router-link>
          </div>

          <div class="rounded-xl overflow-hidden shadow-xl mt-6 lg:mt-0">
            <img src="/images/ai.jpg" alt="SCB Systems" class="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Section Ils nous font confiance -->
    <section class="py-12 sm:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-10 sm:mb-14">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style="color: #101E89;">Ils nous font confiance</h2>
          <p class="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Plus de 200 entreprises et institutions nous ont choisis pour leur transformation digitale
          </p>
          <div class="w-20 h-1 mx-auto mt-4 rounded-full" style="background-color: #101E89;"></div>
        </div>

        <!-- Grille -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center items-center">
          <div v-for="(client, index) in trustedClients" :key="index" class="text-center">
            <div class=" rounded-xl p-4  hover:shadow-md transition-all duration-300 flex items-center justify-center h-24 w-32">
              <img :src="client.logo" :alt="client.name" class="max-w-full max-h-16 object-contain" />
            </div>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="text-gray-600 text-sm italic">
            "SCB Systems nous accompagne depuis 5 ans avec un professionnalisme et une expertise remarquables."
          </p>
          <p class="text-gray-500 text-xs mt-2">— Directeur IT, Grande Entreprise</p>
        </div>
      </div>
    </section>

    <!-- Section Pourquoi nous sommes différents -->
    <section class="py-12 sm:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-8 sm:mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style="color: #101E89;">Pourquoi nous sommes différents</h2>
          <p class="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Découvrez les raisons qui font de SCB Systems votre partenaire de confiance
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-white rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full mx-auto mb-3 sm:mb-4" style="background-color: #101E89;">
              <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-center mb-2" style="color: #101E89;">Expertise certifiée</h3>
            <p class="text-gray-600 text-xs sm:text-sm text-center">
              Nos équipes sont certifiées aux normes internationales.
            </p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-white rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full mx-auto mb-3 sm:mb-4" style="background-color: #101E89;">
              <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9"></path>
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-center mb-2" style="color: #101E89;">Présence internationale</h3>
            <p class="text-gray-600 text-xs sm:text-sm text-center">
              Implantés en Afrique, USA et France.
            </p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-white rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full mx-auto mb-3 sm:mb-4" style="background-color: #101E89;">
              <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-center mb-2" style="color: #101E89;">Innovation continue</h3>
            <p class="text-gray-600 text-xs sm:text-sm text-center">
              Investissement massif en R&D.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Nos partenaires -->
    <section class="py-12 sm:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-10 sm:mb-14">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style="color: #101E89;">Nos partenaires stratégiques</h2>
          <p class="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Des partenariats solides pour vous offrir les meilleures solutions
          </p>
          <div class="w-20 h-1 mx-auto mt-4 rounded-full" style="background-color: #101E89;"></div>
        </div>

        <!-- Grille  -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 justify-items-center items-center">
          <div v-for="(partner, index) in partners" :key="index" class="text-center">
            <div class=" rounded-xl p-4 hover:shadow-md transition-all duration-300 flex items-center justify-center h-24 w-32">
              <img :src="partner.logo" :alt="partner.name" class="max-w-full max-h-16 object-contain" />
            </div>
          </div>
        </div>

        <div class="mt-12 text-center">
          <div class="inline-block max-w-lg mx-auto">
            <p class="text-white text-sm mb-3">
              Rejoignez notre réseau d'excellence
            </p>
            <router-link to="/contact" class="inline-block px-6 py-2 bg-[#101E89] text-white rounded-full font-semibold transition transform hover:scale-105 text-sm shadow-lg" style="color: #ffff;">
              Devenir partenaire →
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Contact CTA -->
    <section class="py-10 sm:py-16 bg-gray-100">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center">
          <h2 class="text-xl sm:text-2xl font-bold mb-2 sm:mb-3" style="color: #101E89;">Prêt à transformer votre entreprise ?</h2>
          <p class="text-gray-700 mb-4 sm:mb-5 text-xs sm:text-sm px-2">
            Rejoignez les entreprises qui nous font confiance et donnez un nouvel élan à votre projet.
          </p>
          <router-link to="/contact" class="inline-block px-6 sm:px-8 py-2 sm:py-3 text-white font-semibold rounded-full transition transform hover:scale-105 shadow-lg text-sm sm:text-base" style="background-color: #101E89;">
            Discutons-en
          </router-link>
        </div>
      </div>
    </section>

    <!-- Section Équipe -->
    <section class="py-12 sm:py-20 text-white relative overflow-hidden" style="background: linear-gradient(to bottom right, #0a125c, #101E89, #0a125c);">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style="background-color: #3a4fd4;"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style="background-color: #3a4fd4;"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div class="text-center mb-8 sm:mb-12">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            Notre Équipe
          </h2>
          <p class="text-blue-200 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Des talents passionnés répartis sur 3 continents pour vous accompagner
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div class="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center hover:bg-white/20 transition-all duration-500 hover:-translate-y-3 border border-white/20">
            <div class="absolute -top-5 left-1/2 transform -translate-x-1/2">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg" style="background: linear-gradient(to right, #2a3eb8, #101E89);">
                <span class="text-xl sm:text-2xl">🌍</span>
              </div>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold mt-4 sm:mt-6 mb-2 sm:mb-3">SCB SYSTEMS AFRICA</h3>
            <p class="text-blue-200 text-xs sm:text-sm mb-3 sm:mb-4">Siège social - Abidjan, Côte d'Ivoire</p>
            <div class="flex justify-center gap-2 mb-4 sm:mb-6 flex-wrap">
              <span class="px-2 py-1 rounded-full text-xs bg-white/20">Expertise locale</span>
              <span class="px-2 py-1 rounded-full text-xs bg-white/20">Leadership africain</span>
            </div>
            <router-link :to="{ name: 'TeamPage', params: { region: 'Africa' } }" class="inline-block px-5 sm:px-6 py-1.5 sm:py-2 text-white font-semibold rounded-xl transition transform hover:scale-105 text-sm" style="background-color: #101E89;">
              Découvrir l'équipe
            </router-link>
          </div>

          <div class="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center hover:bg-white/20 transition-all duration-500 hover:-translate-y-3 border border-white/20">
            <div class="absolute -top-5 left-1/2 transform -translate-x-1/2">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg" style="background: linear-gradient(to right, #2a3eb8, #101E89);">
                <span class="text-xl sm:text-2xl">🇺🇸</span>
              </div>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold mt-4 sm:mt-6 mb-2 sm:mb-3">SCB SYSTEMS USA</h3>
            <p class="text-blue-200 text-xs sm:text-sm mb-3 sm:mb-4">New York, États-Unis</p>
            <div class="flex justify-center gap-2 mb-4 sm:mb-6 flex-wrap">
              <span class="px-2 py-1 rounded-full text-xs bg-white/20">Innovation</span>
              <span class="px-2 py-1 rounded-full text-xs bg-white/20">Tech hub</span>
            </div>
            <router-link :to="{ name: 'TeamPage', params: { region: 'USA' } }" class="inline-block px-5 sm:px-6 py-1.5 sm:py-2 text-white font-semibold rounded-xl transition transform hover:scale-105 text-sm" style="background-color: #101E89;">
              Découvrir l'équipe
            </router-link>
          </div>

          <div class="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center hover:bg-white/20 transition-all duration-500 hover:-translate-y-3 border border-white/20">
            <div class="absolute -top-5 left-1/2 transform -translate-x-1/2">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg" style="background: linear-gradient(to right, #2a3eb8, #101E89);">
                <span class="text-xl sm:text-2xl">🇫🇷</span>
              </div>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold mt-4 sm:mt-6 mb-2 sm:mb-3">SCB SYSTEMS FRANCE</h3>
            <p class="text-blue-200 text-xs sm:text-sm mb-3 sm:mb-4">Paris, France</p>
            <div class="flex justify-center gap-2 mb-4 sm:mb-6 flex-wrap">
              <span class="px-2 py-1 rounded-full text-xs bg-white/20">R&D</span>
              <span class="px-2 py-1 rounded-full text-xs bg-white/20">European excellence</span>
            </div>
            <router-link :to="{ name: 'TeamPage', params: { region: 'France' } }" class="inline-block px-5 sm:px-6 py-1.5 sm:py-2 text-white font-semibold rounded-xl transition transform hover:scale-105 text-sm" style="background-color: #101E89;">
              Découvrir l'équipe
            </router-link>
          </div>
        </div>

        <div class="mt-8 sm:mt-12 text-center max-w-3xl mx-auto bg-white/5 rounded-xl p-5 sm:p-6 border border-white/10">
          <p class="text-base sm:text-lg italic px-2">
            "Une équipe passionnée et disponible qui a su transformer nos idées en solutions concrètes."
          </p>
          <p class="mt-2 sm:mt-3 text-blue-300 font-semibold text-sm sm:text-base">— Client satisfait</p>
        </div>
      </div>
    </section>

    <!-- Section Certifications -->
    <section class="py-10 sm:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10" style="color: #101E89;">Nos Certifications</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
          <div v-for="(cert, i) in certifications" :key="i" class="text-center">
            <img :src="cert.image" :alt="cert.title" class="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
          </div>
        </div>
      </div>
    </section>

    <!-- Bouton retour en haut -->
    <button @click="scrollToTop" v-show="showScrollTop" class="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg transition transform hover:scale-110 z-50 text-xl sm:text-2xl" style="background-color: #101E89;">
      ↑
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const heroImages = [
  { url: "/images/banner.jpg", title: "MAÎTRISE TOTALE DE LA GESTION DES CONNAISSANCES" },
  { url: "/images/header2.jpg", title: "LEADER AFRICAIN EN INGÉNIERIE ET TECHNOLOGIE INNOVANTE" },
  { url: "/images/header3.jpg", title: "OPTIMISEZ VOTRE NUMÉRISATION POUR UNE PERFORMANCE MAXIMALE" },
];

// Clients qui nous font confiance
const trustedClients = [
  { name: "AIGEF", logo: "/images/aigef.png" },
  { name: "ANSSI", logo: "/images/anssi.png" },
  { name: "ANSUT", logo: "/images/ansut.png" },
  { name: "ANTEREZA", logo: "/images/antereza.png" },
  { name: "ARTCI", logo: "/images/artci.png" },
  { name: "Guinée", logo: "/images/guinee.png" },
  { name: "La Poste CI", logo: "/images/laposteci.png" },
  { name: "Millenium", logo: "/images/millenium.png" },
  { name: "Ministère", logo: "/images/ministere.png" },
  { name: "NH", logo: "/images/nh.png" },
  { name: "Numérique", logo: "/images/numerique.png" },
  { name: "ONECI", logo: "/images/oneci.png" },
];

// Partenaires stratégiques
const partners = [
  { name: "AWS", logo: "/images/Aws.png", type: "Partenaire Technologique" },
  { name: "CHU", logo: "/images/chu.png", type: "Partenaire Réseau" },
  { name: "FedEx", logo: "/images/FedEx.png", type: "Partenaire IA" },
  { name: "GW", logo: "/images/gw.png", type: "Partenaire Cloud" },
  { name: "HCL", logo: "/images/hcl.png", type: "Partenaire ERP" },
  { name: "Nsicorps", logo: "/images/Nsicorps.png", type: "Partenaire Cloud" },
  { name: "Mobileum", logo: "/images/mobileum.png", type: "Partenaire Cloud" },
  { name: "SeedSpot", logo: "/images/SeedSpot.png", type: "Partenaire Hardware" },
];

const certifications = [
  { image: "/images/certification1.png", title: "Certification 1" },
  { image: "/images/Certification2.png", title: "Certification 2" },
  { image: "/images/Certification3.png", title: "Certification 3" },
  { image: "/images/Certification4.png", title: "Certification 4" },
  { image: "/images/Certification5.png", title: "Certification 5" },
  { image: "/images/Certification6.png", title: "Certification 6" },
  { image: "/images/Certification7.png", title: "Certification 7" },
  { image: "/images/Certification8.png", title: "Certification 8" },
  { image: "/images/Certification9.png", title: "Certification 9" },
  { image: "/images/Certification10.png", title: "Certification 10" },
  { image: "/images/Certification11.png", title: "Certification 11" },
];

const currentImageIndex = ref(0);
const showScrollTop = ref(false);

let heroInterval;

onMounted(() => {
  heroInterval = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % heroImages.length;
  }, 5000);

  window.addEventListener("scroll", () => {
    showScrollTop.value = window.scrollY > 500;
  });
});

onUnmounted(() => {
  if (heroInterval) clearInterval(heroInterval);
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>