<template>
  <div class="services-page relative">
    <!-- Header avec dégradé chic -->
    <header class="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
      <!-- Image de fond -->
      <div class="absolute inset-0 bg-cover bg-center transition-all duration-1000" :style="{ backgroundImage: `url(${headerImages[currentIndex]})` }"></div>

      <!-- Overlay avec dégradé -->
      <div class="absolute inset-0" style="background: linear-gradient(135deg, rgba(16,30,137,0.85) 0%, rgba(0,0,0,0.6) 100%);"></div>

      <!-- Contenu du header -->
      <div class="relative z-10 max-w-4xl mx-auto px-6 mt-20">
        <div class="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-6 tracking-wider" style="background-color: rgba(255,255,255,0.2); backdrop-filter: blur(10px);">
          NOS PRESTATIONS
        </div>
        <h1 class="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-up">
          Nos Services
        </h1>
        <div class="w-24 h-1 mx-auto rounded-full mb-8" style="background-color: #101E89;"></div>
        <p class="text-lg md:text-xl max-w-2xl mx-auto animate-fade-up delay-200 leading-relaxed">
          Des solutions innovantes et adaptées pour propulser vos projets vers l'avenir.
        </p>
      </div>
    </header>

    <!-- Section Knowledge Management 360 - Version améliorée -->
    <section class="py-24 px-6 md:px-12 relative overflow-hidden" style="background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);">
      <!-- Effets décoratifs -->
      <div class="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style="background-color: #101E89;"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5" style="background-color: #101E89;"></div>

      <div class="max-w-7xl mx-auto text-center relative z-10">
        <div class="mb-12">
          <span class="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider mb-4" style="background-color: #e8eaff; color: #101E89;">
            NOTRE APPROCHE UNIQUE
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold mb-4" style="color: #101E89;">
            Knowledge Management 360
          </h2>
          <div class="w-20 h-1 mx-auto rounded-full" style="background-color: #101E89;"></div>
          <p class="text-gray-600 mt-6 max-w-2xl mx-auto">
            Une méthodologie complète en 4 étapes pour transformer vos données en valeur ajoutée
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <!-- Carte Données -->
          <div v-for="(card, index) in knowledgeCards" :key="index" class="group cursor-pointer" @click="openKnowledgeCard(card)">
            <div class="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3">
              <!-- Image -->
              <img :src="card.img" class="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110" />
              <!-- Overlay avec dégradé -->
              <div class="absolute inset-0" style="background: linear-gradient(to top, #101E89 0%, transparent 50%);"></div>
              <!-- Contenu -->
              <div class="absolute bottom-0 left-0 right-0 p-6 text-left z-10">
                <div class="text-4xl font-bold text-white/30 mb-2">{{ String(index + 1).padStart(2, '0') }}</div>
                <h3 class="text-2xl font-bold text-white mb-2 drop-shadow-lg">{{ card.title }}</h3>
                <div class="w-12 h-0.5 rounded-full mb-3" style="background-color: #101E89;"></div>
                <p class="text-white/80 text-sm">{{ card.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Knowledge -->
      <transition name="fade">
        <div v-if="selectedKnowledge" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" @click.self="selectedKnowledge = null">
          <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden relative animate-scaleIn">
            <div class="relative h-48 overflow-hidden">
              <img :src="selectedKnowledge.img" class="w-full h-full object-cover" />
              <div class="absolute inset-0" style="background: linear-gradient(135deg, #101E89 0%, transparent 100%);"></div>
              <button @click="selectedKnowledge = null" class="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition text-xl">
                ✕
              </button>
            </div>
            <div class="p-8">
              <h3 class="text-3xl font-bold mb-4" style="color: #101E89;">{{ selectedKnowledge.title }}</h3>
              <p class="text-gray-600 mb-6">{{ selectedKnowledge.fullDescription }}</p>
              <ul class="space-y-3">
                <li v-for="(detail, i) in selectedKnowledge.details" :key="i" class="flex items-start gap-3">
                  <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: #101E89;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">{{ detail }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </transition>
    </section>

    <!-- Section Domaines d'Expertise -->
    <section class="py-24 px-6 md:px-12 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider mb-4" style="background-color: #e8eaff; color: #101E89;">
            NOTRE SAVOIR-FAIRE
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold mb-4" style="color: #101E89;">
            Nos Domaines d'Expertise
          </h2>
          <div class="w-20 h-1 mx-auto rounded-full" style="background-color: #101E89;"></div>
          <p class="text-gray-600 mt-6 max-w-2xl mx-auto">
            Une expertise diversifiée pour répondre à tous vos besoins technologiques
          </p>
        </div>

        <!-- Grille de services -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(service, index) in services" :key="index" @click="openService(service)" class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden">
            <div class="relative h-56 overflow-hidden">
              <img :src="service.img" :alt="service.title" class="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300" style="background: linear-gradient(135deg, #101E89 0%, transparent 100%);"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2" style="color: #101E89;">{{ service.title }}</h3>
              <div class="w-12 h-0.5 rounded-full mb-3" style="background-color: #101E89;"></div>
              <p class="text-gray-500 text-sm">{{ service.description || 'Découvrez nos solutions innovantes dans ce domaine' }}</p>
              <div class="mt-4 flex items-center gap-2 text-sm font-semibold" style="color: #101E89;">
                En savoir plus
                <svg class="w-4 h-4 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal Service amélioré -->
    <transition name="fade">
      <div v-if="selectedService" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" @click.self="selectedService = null">
        <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden relative animate-scaleIn">
          <div class="relative h-56 overflow-hidden">
            <img :src="selectedService.img" class="w-full h-full object-cover" />
            <div class="absolute inset-0" style="background: linear-gradient(135deg, #101E89 0%, transparent 100%);"></div>
            <button @click="selectedService = null" class="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition text-xl">
              ✕
            </button>
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold mb-4" style="color: #101E89;">{{ selectedService.title }}</h3>
            <p class="text-gray-600 mb-6">Nos experts vous accompagnent dans les domaines suivants :</p>
            <ul class="space-y-3">
              <li v-for="(detail, i) in selectedService.details" :key="i" class="flex items-start gap-3">
                <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: #101E89;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">{{ detail }}</span>
              </li>
            </ul>
            <div class="mt-8 text-center">
              <button @click="selectedService = null" class="px-6 py-2 rounded-full text-white font-semibold transition transform hover:scale-105" style="background-color: #101E89;">
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Section Chiffres clés améliorée -->
    <section class="py-20 px-6 md:px-12 text-white relative overflow-hidden" style="background-color: #101E89;">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-6xl mx-auto relative z-10">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider mb-4" style="background-color: rgba(255,255,255,0.2); color: white;">
            NOTRE IMPACT
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4">
            SCB Systems en chiffres
          </h2>
          <div class="w-20 h-1 mx-auto rounded-full bg-white"></div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="(stat, i) in stats" :key="i" class="text-center group">
            <div class="text-4xl md:text-5xl font-bold mb-2 transition-all duration-300 group-hover:scale-110">{{ stat.value }}</div>
            <div class="w-12 h-0.5 mx-auto rounded-full bg-white/50 mb-3"></div>
            <p class="text-blue-200 text-sm">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Contact améliorée -->
    <section class="py-20 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-white">
      <div class="max-w-4xl mx-auto text-center">
        <div class="bg-white rounded-3xl shadow-xl p-8 md:p-12 transform hover:scale-105 transition-all duration-500">
          <div class="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style="background: linear-gradient(135deg, #101E89, #2a3eb8);">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold mb-4" style="color: #101E89;">
            Prêt à collaborer ?
          </h2>
          <p class="text-gray-600 mb-8 max-w-md mx-auto">
            Contactez-nous dès aujourd'hui pour transformer vos idées en projets concrets.
          </p>
          <router-link to="/contact" class="inline-block px-8 py-3 rounded-full text-white font-semibold transition transform hover:scale-105 shadow-lg" style="background-color: #101E89;">
            Contactez-nous
          </router-link>
        </div>
      </div>
    </section>

    <!-- Bouton flottant Retour en haut -->
    <div class="fixed bottom-6 right-6 z-50">
      <button @click="scrollToTop" v-show="showScrollTop" class="w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition transform hover:scale-110 text-xl" style="background-color: #101E89; color: white;">
        ↑
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

// ========== IMPORT DES IMAGES DEPUIS LE DOSSIER ASSETS ==========
// Header images
import iaImage from "../assets/images/IA.jpg";
import scienceImage from "../assets/images/Science.jpg";
import aiImage from "../assets/images/ai.jpg";

// Images des services (domaines d'expertise)
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import header2Image from "../assets/images/header2.jpg";
import servicesImage from "../assets/images/Services.jpg";
import cybersecurityImage from "../assets/images/cybersecurity.jpg";

// Images Knowledge Management
import donneeImage from "../assets/images/donnee.jpg";
import informationImage from "../assets/images/information.jpg";
import connaissancesImage from "../assets/images/connaissances.jpg";
import sagesseImage from "../assets/images/sagesse.jpg";

export default {
  name: "Services",
  setup() {
    // Header images avec les imports
    const headerImages = [iaImage, scienceImage, aiImage];
    const currentIndex = ref(0);
    let headerInterval;

    onMounted(() => {
      headerInterval = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % headerImages.length;
      }, 4000);
    });

    onUnmounted(() => {
      if (headerInterval) clearInterval(headerInterval);
    });

    // Services avec les images importées
    const services = ref([
      {
        img: img1,
        title: "Sciences de la vie",
        description: "Expertise en audit, réglementation et conformité qualité",
        details: [
          "Audits et inspections",
          "Affaires réglementaires",
          "Assurance de l'intégrité des données",
          "Conformité de la qualité",
          "Validation du système informatique",
        ],
      },
      {
        img: img2,
        title: "Gouvernance numérique",
        description: "Sécurisez et optimisez votre infrastructure IT",
        details: [
          "Opérations informatiques",
          "Cybersécurité avancée",
          "Science des données",
          "La qualité par la conception",
          "Normes et politiques IT",
        ],
      },
      {
        img: img3,
        title: "Sciences de l'ingénieur",
        description: "Ingénierie système et validation de processus",
        details: [
          "Ingénierie des systèmes",
          "Qualification des processus",
          "Validation des installations",
          "Gestion de l'ingénierie",
          "Recherche & Développement",
        ],
      },
      {
        img: header2Image,
        title: "Technologie",
        description: "Solutions digitales innovantes pour votre entreprise",
        details: [
          "Numérisation des processus",
          "Services cloud (IaaS, PaaS, SaaS)",
          "Création d'applications et CRM",
          "EaaS (Everything as a Service)",
          "Architecture de référence",
        ],
      },
      {
        img: servicesImage,
        title: "Gestion des connaissances",
        description: "Capitalisez et valorisez votre savoir-faire",
        details: [
          "Machine Learning / Intelligence Artificielle",
          "Gestion de la performance",
          "Formations du personnel",
          "Aide à la décision",
          "Soutien au marketing stratégique",
        ],
      },
      {
        img: cybersecurityImage,
        title: "Gestion des risques",
        description: "Anticipez et maîtrisez les risques",
        details: [
          "Évaluation des risques",
          "Conseil en matière de risques",
          "Plan de relance des activités",
          "Préparation des entreprises",
          "Plan d'atténuation des risques",
        ],
      },
    ]);

    // Stats
    const stats = ref([
      { value: "50+", label: "Projets réalisés" },
      { value: "100+", label: "Clients satisfaits" },
      { value: "15+", label: "Années d'expertise" },
      { value: "3", label: "Continents" },
    ]);

    // Knowledge Management Cards avec les images importées
    const selectedKnowledge = ref(null);
    const knowledgeCards = ref([
      {
        title: "Données",
        img: donneeImage,
        description: "Collecte et structuration des données",
        fullDescription: "Notre approche Data vous permet de collecter, structurer et sécuriser vos données pour en faire un actif stratégique.",
        details: [
          "Solutions Cloud : hébergement et stockage sécurisés",
          "Services IT gérés : gestion complète de votre infrastructure",
          "Robotique et Drones : innovation et automatisation",
          "Data governance et qualité des données",
        ],
      },
      {
        title: "Information",
        img: informationImage,
        description: "Traitement et analyse",
        fullDescription: "Transformez vos données brutes en informations exploitables grâce à nos solutions d'analyse avancées.",
        details: [
          "Cybersécurité : protéger vos systèmes et données",
          "Développement de logiciels personnalisés",
          "DevOps & automatisation des infrastructures",
          "Business Intelligence et reporting",
        ],
      },
      {
        title: "Connaissance",
        img: connaissancesImage,
        description: "Capitalisation et partage",
        fullDescription: "Capitalisez sur votre savoir-faire et créez une mémoire d'entreprise durable.",
        details: [
          "Gestion des connaissances et capitalisation du savoir",
          "Consulting IT stratégique",
          "Audit et amélioration des systèmes",
          "Formation et transfert de compétences",
        ],
      },
      {
        title: "Sagesse",
        img: sagesseImage,
        description: "Décision et innovation",
        fullDescription: "Utilisez la connaissance pour prendre les meilleures décisions et innover.",
        details: [
          "Gestion de la performance",
          "Intelligence artificielle pour la prise de décision",
          "Qualité par conception",
          "Innovation continue et R&D",
        ],
      },
    ]);

    const selectedService = ref(null);
    const showScrollTop = ref(false);

    const openService = (service) => {
      selectedService.value = service;
    };

    const openKnowledgeCard = (card) => {
      selectedKnowledge.value = card;
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    onMounted(() => {
      window.addEventListener("scroll", () => {
        showScrollTop.value = window.scrollY > 500;
      });
    });

    return {
      headerImages,
      currentIndex,
      services,
      stats,
      selectedService,
      openService,
      scrollToTop,
      showScrollTop,
      selectedKnowledge,
      knowledgeCards,
      openKnowledgeCard,
    };
  },
};
</script>

<style scoped>
/* Header animations */
.animate-fade-up {
  animation: fadeUp 1s ease-out forwards;
  opacity: 0;
}

.delay-200 {
  animation-delay: 0.2s;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Modal animation */
.animate-scaleIn {
  animation: scaleIn 0.3s ease-out forwards;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Scroll indicator */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

/* Hide scrollbar */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>