<template>
  <section class="px-6 py-12 pt-32 min-h-screen" style="background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);">
    <div class="max-w-7xl mx-auto">
      <!-- Header section -->
      <div class="text-center mt-12">
        <span class="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider mb-4" style="background-color: #e8eaff; color: #101E89;">
          NOTRE ÉQUIPE INTERNATIONALE
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold mb-4" style="color: #101E89;">
          Nos Équipes
        </h2>
        <div class="w-20 h-1 mx-auto rounded-full" style="background-color: #101E89;"></div>
        <p class="text-gray-600 mt-6 max-w-2xl mx-auto">
          Des talents passionnés répartis sur 3 continents pour vous accompagner
        </p>
      </div>

      <!-- Cartes des régions -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div
          v-for="region in regions"
          :key="region.name"
          class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden"
          @click="goToRegion(region.name)"
        >
          <div class="relative h-48 overflow-hidden">
            <iframe
              :src="region.map"
              width="100%"
              height="200"
              style="border:0;"
              allowfullscreen
              loading="lazy"
              class="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            ></iframe>
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300" style="background: linear-gradient(135deg, #101E89 0%, transparent 100%);"></div>
          </div>
          <div class="p-6 text-center">
            <div class="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, #101E89, #2a3eb8);">
              <span class="text-white text-xl">{{ region.flag }}</span>
            </div>
            <h3 class="text-xl font-bold mb-2" style="color: #101E89;">{{ region.name }}</h3>
            <p class="text-gray-500 text-sm">{{ region.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Section équipe affichée après clic -->
      <div v-if="selectedRegion" ref="teamSection" class="mt-20">
        <div class="text-center mb-12">
          <div class="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider mb-4" style="background-color: #e8eaff; color: #101E89;">
            NOS TALENTS
          </div>
          <h3 class="text-3xl md:text-4xl font-bold mb-4" style="color: #101E89;">
            Équipe SCB SYSTEMS {{ selectedRegion }}
          </h3>
          <div class="w-16 h-1 mx-auto rounded-full" style="background-color: #101E89;"></div>
          <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
            Découvrez tous les membres de notre équipe {{ selectedRegion }} qui travaillent chaque jour pour votre succès
          </p>
        </div>

        <transition-group
          name="slide-up"
          tag="div"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div
            v-for="member in teams[selectedRegion]"
            :key="member.name"
            class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            <!-- Photo plus grande et mieux visible -->
            <div class="relative h-64 md:h-72 overflow-hidden bg-gray-100">
              <img
                :src="member.img"
                :alt="member.name"
                class="w-full h-full object-cover object-top transition duration-700 group-hover:scale-105"
                @error="handleImageError($event, member)"
              />
              <!-- Fallback si image manquante -->
              <div v-if="!member.imgLoaded" class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <div class="text-center">
                  <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  <p class="text-gray-400 text-sm mt-2">Photo non disponible</p>
                </div>
              </div>
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300" style="background: linear-gradient(135deg, #101E89 0%, transparent 100%);"></div>
            </div>
            <div class="p-6 text-center">
              <h3 class="text-xl font-bold mb-1" style="color: #101E89;">{{ member.name }}</h3>
              <p class="text-sm font-semibold mb-3" style="color: #2a3eb8;">{{ member.role }}</p>
              <p class="text-gray-500 text-sm mb-4">{{ member.desc }}</p>
              
              <!-- Informations de contact -->
              <div class="border-t pt-4 mt-2 space-y-2 text-left">
                <div class="flex items-center gap-2 text-xs text-gray-600">
                  <svg class="w-4 h-4 flex-shrink-0" style="color: #101E89;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span class="break-all">{{ member.mail }}</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-gray-600">
                  <svg class="w-4 h-4 flex-shrink-0" style="color: #101E89;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>{{ member.phone }}</span>
                </div>
                <div class="flex items-center gap-2 text-xs">
                  <svg class="w-4 h-4 flex-shrink-0" style="color: #101E89;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-4 0h4"></path>
                  </svg>
                  <a
                    :href="member.link"
                    target="_blank"
                    class="hover:underline transition"
                    style="color: #101E89;"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, nextTick } from "vue";

const selectedRegion = ref(null);
const teamSection = ref(null);

const regions = [
  {
    name: "Côte d'Ivoire",
    flag: "🌍",
    map: "https://www.google.com/maps?q=Riviera+Palmeraie,+Abidjan,+Côte+d'Ivoire&output=embed",
    desc: "Notre équipe basée à la Riviera Palmeraie, Abidjan."
  },
  {
    name: "USA",
    flag: "🇺🇸",
    map: "https://www.google.com/maps?q=Washington,+USA&output=embed",
    desc: "Notre équipe basée à Washington DC."
  },
  {
    name: "France",
    flag: "🇫🇷",
    map: "https://www.google.com/maps?q=Paris,+France&output=embed",
    desc: "Notre équipe basée à Paris."
  }
];

// Gestionnaire d'erreur d'image
const handleImageError = (event, member) => {
  member.imgLoaded = false;
  event.target.style.display = 'none';
};

// Ajout de l'état de chargement pour chaque membre
const teams = reactive({
  "Côte d'Ivoire": [
    { 
      name: "Youan Cedric", 
      role: "Développeur Backend", 
      desc: "Expert Python, passionné par l'innovation technologique.", 
      img: "/images/cedrick.jpeg", 
      mail: "hervecedricyouan@gmail.com", 
      phone: "+225 07 77 53 79 54", 
      link: "https://linkedin.com/in/youancedric",
      imgLoaded: true
    },
    { 
      name: "Kouamé Thibaut", 
      role: "Développeur Mobile", 
      desc: "Expert en applications mobiles cross-platform.", 
      img: "/images/Thibaut.jpg", 
      mail: "tkouame@scbsystems.org", 
      phone: "+225 07 05 80 98 81", 
      link: "https://www.linkedin.com/in/kouame-thibaut-34b8b4232/",
      imgLoaded: true
    },
    { 
      name: "Danielle Achi", 
      role: "Développeuse Front-End", 
      desc: "Spécialiste des interfaces utilisateur modernes.", 
      img: "/images/Danielle.jpg", 
      mail: "dachi@scbsystems.org", 
      phone: "+225 07 69 09 95 57", 
      link: "https://www.linkedin.com/in/danielle-achi-869229311/",
      imgLoaded: true
    },
    { 
      name: "Elsa Zougouri", 
      role: "Développeuse Full-Stack", 
      desc: "Expertise complète backend et frontend.", 
      img: "/images/Elsa .jpg", 
      mail: "eabelame@scbsystems.org", 
      phone: "+225 07 01 73 96 47", 
      link: "https://www.linkedin.com/in/elsa-zougouri-301743167/",
      imgLoaded: true
    },
    { 
      name: "Bayala Adam", 
      role: "Graphiste", 
      desc: "Créateur d'identités visuelles uniques.", 
      img: "/images/Adam.jpg", 
      mail: "kbayala@scbsystems.org", 
      phone: "+225 07 77 87 09 02", 
      link: "https://www.linkedin.com/in/bayala-kalice-adam-a35328223/",
      imgLoaded: true
    },
  ],
  "USA": [
    { 
      name: "Abdul Sako", 
      role: "CEO SCB SYSTEMS USA", 
      desc: "Leader visionnaire et stratège international.", 
      img: "/images/Abdul.png", 
      mail: "abdul@scbsystems.com", 
      phone: "+1-202-555-0101", 
      link: "https://linkedin.com/in/abdul-sako",
      imgLoaded: true
    },
    { 
      name: "Awa Sylla", 
      role: "Directrice Juridique", 
      desc: "Spécialiste en droit international des affaires.", 
      img: "/images/t3.jpg", 
      mail: "awa@scbsystems.com", 
      phone: "+1-202-555-0102", 
      link: "https://linkedin.com/in/awa-sylla",
      imgLoaded: true
    },
  ],
  "France": [
    { 
      name: "Franck Harding", 
      role: "Directeur Général", 
      desc: "Visionnaire et stratège européen.", 
      img: "/images/t1.jpg", 
      mail: "franck@scbsystems.com", 
      phone: "+33 1 45 00 00 01", 
      link: "https://linkedin.com/in/franck-harding",
      imgLoaded: true
    },
    { 
      name: "Fanta Kamissoko", 
      role: "Chef d'Exploitation", 
      desc: "Expert en optimisation des systèmes.", 
      img: "/images/t2.jpg", 
      mail: "fanta@scbsystems.com", 
      phone: "+33 1 45 00 00 02", 
      link: "https://linkedin.com/in/fanta-kamissoko",
      imgLoaded: true
    },
  ]
});

const goToRegion = (regionName) => {
  selectedRegion.value = regionName;
  nextTick(() => {
    if (teamSection.value) {
      teamSection.value.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
};
</script>

<style scoped>
/* Animation qui monte */
.slide-up-enter-active {
  transition: all 0.5s ease-out;
}
.slide-up-leave-active {
  transition: all 0.3s ease-in;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
.slide-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style>