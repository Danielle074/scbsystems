<template>
  <div class="services-page relative">
    <!-- Header -->
    <header
      class="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden"
    >
      <!-- Image de fond -->
      <div
        class="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        :style="{ backgroundImage: `url(${headerImages[currentIndex]})` }"
      ></div>

      <!-- Overlay sombre -->
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>

      <!-- Contenu du header -->
      <div class="relative z-10">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-up">
          Nos Services
        </h1>
        <p
          class="text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up delay-200"
        >
          Des solutions innovantes et adaptées pour propulser vos projets vers
          l’avenir.
        </p>
      </div>
    </header>
 <!-- Section Knowledge Management 360 -->
  <section class="py-20 px-6 md:px-12 bg-gradient-to-br from-blue-50 to-blue-100">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-4xl md:text-5xl font-extrabold text-blue-900 mb-16">
        Knowledge Management 360
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- Card -->
        <div
          v-for="(card, index) in knowledgeCards"
          :key="index"
          class="relative group h-72 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
          @click="openKnowledgeCard(card)"
        >
          <!-- Image -->
          <img
            :src="card.img"
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <!-- Titre -->
          <div class="absolute bottom-6 left-0 right-0 text-center text-white z-10">
            <h3 class="text-2xl font-bold drop-shadow-lg">{{ card.title }}</h3>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Knowledge -->
    <transition name="fade">
      <div
        v-if="selectedKnowledge"
        class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
        @click.self="selectedKnowledge = null"
      >
        <div
          class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative"
        >
          <button
            @click="selectedKnowledge = null"
            class="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700"
          >
            ✕
          </button>
          <h3 class="text-3xl font-bold text-blue-900 mb-6 text-center">
            {{ selectedKnowledge.title }}
          </h3>
          <ul class="list-disc list-inside text-gray-700 space-y-3 text-left">
            <li v-for="(detail, i) in selectedKnowledge.details" :key="i">
              {{ detail }}
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </section>

    <!-- Section Services -->
    <section
      ref="servicesSection"
      class="py-20 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div class="max-w-6xl mx-auto relative">
        <h2
          class="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-16 fade-in-card"
        >
          Nos Domaines d’Expertise
        </h2>

        <div class="relative">
          <div
            ref="carousel"
            class="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
          >
            <div
              v-for="(service, index) in services"
              :key="index"
              @click="openService(service)"
              class="min-w-[280px] md:min-w-[320px] flex-shrink-0 bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition duration-300 cursor-pointer fade-in-card"
            >
              <img
                :src="service.img"
                :alt="service.title"
                class="h-48 md:h-56 w-full object-cover rounded-lg mb-4"
              />
              <h3 class="text-xl md:text-2xl font-bold text-blue-800 mb-2">
                {{ service.title }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal Service -->
    <transition name="fade">
      <div
        v-if="selectedService"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        @click.self="selectedService = null"
      >
        <div
          class="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 transform transition-all scale-95 hover:scale-100 overflow-hidden"
        >
          <img
            :src="selectedService.img"
            alt=""
            class="w-full h-48 md:h-56 object-cover rounded-lg mb-4"
          />
          <h3
            class="text-2xl md:text-2xl font-bold text-blue-900 mb-4 text-center"
          >
            {{ selectedService.title }}
          </h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2 text-left">
            <li v-for="(detail, i) in selectedService.details" :key="i">
              {{ detail }}
            </li>
          </ul>
          <div class="text-center mt-4">
            <button
              @click="selectedService = null"
              class="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Section Chiffres clés -->
    <section
      class="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center"
    >
      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div v-for="(stat, i) in stats" :key="i">
          <h3 class="text-5xl font-extrabold">{{ stat.value }}</h3>
          <p class="mt-2 text-lg">{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <!-- Section Contact -->
    <section class="py-20 px-6 md:px-12 bg-gray-50 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
        Prêt à collaborer ?
      </h2>
      <p class="text-lg text-gray-600 mb-8">
        Contactez-nous dès aujourd’hui pour transformer vos idées en projets
        concrets.
      </p>
      <button
        class="bg-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:bg-blue-800 transition"
      >
        Contactez-nous
      </button>
    </section>
   
    
    
  

    <!-- Bouton flottant Retour en haut -->
    <div class="fixed bottom-6 right-6 z-50">
      <button
        @click="scrollToTop"
        class="bg-blue-700 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-800 transition transform hover:scale-110 text-2xl"
      >
        ⬆
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "Services",
  setup() {
    // 🔹 Header
    const headerImages = ["/images/IA.jpg", "/images/Science.jpg"];
    const currentIndex = ref(0);

    onMounted(() => {
      setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % headerImages.length;
      }, 4000);
    });

    // 🔹 Services
    const services = ref([
      {
        img: "/images/ss-img1.png",
        title: "Sciences de la vie",
        details: [
          "Audits",
          "Affaires réglementaires",
          "Assurance de l'intégrité des données",
          "Conformité de la qualité",
          "Validation du système informatique",
        ],
      },
      {
        img: "/images/ss-img2.png",
        title: "Gouvernance numérique",
        details: [
          "Opérations informatiques",
          "Cybersécurité",
          "Science des données",
          "La qualité par la conception",
          "Normes et politiques",
        ],
      },
      {
        img: "/images/ss-img3.png",
        title: "Sciences de l’ingénieur",
        details: [
          "Ingénierie des systèmes",
          "Qualification des processus",
          "Validation des installations",
          "Gestion de l'ingénierie",
          "R&D",
        ],
      },
      {
        img: "/images/Site web SCB_Plan de travail 1 copie 3.jpg",
        title: "Technologie",
        details: [
          "Numérisation",
          "Services cloud",
          "Création d'applications et CRM",
          "SaaS, PaaS, IaaS, EaaS",
          "Référence",
        ],
      },
      {
        img: "/images/Services.jpg",
        title: "Gestion des connaissances",
        details: [
          "Machine learning / IA",
          "Gestion de la performance",
          "Formations du personnel",
          "Prise de décision",
          "Soutien au marketing stratégique",
        ],
      },
      {
        img: "/images/phishing-email-warning-cybersecurity-concept.jpg",
        title: "Gestion des risques",
        details: [
          "Évaluation des risques",
          "Conseil en matière de risques",
          "Plan de relance des activités",
          "Préparation des entreprises",
          "Plan d'atténuation des risques",
        ],
      },
    ]);

    // 🔹 Stats
    const stats = ref([
      { value: "50+", label: "Projets réalisés" },
      { value: "100+", label: "Clients satisfaits" },
      { value: "8+", label: "Années d’expérience" },
    ]);

    // 🔹 Carousel
    const carousel = ref(null);
    const selectedService = ref(null);

    onMounted(() => {
      setInterval(() => {
        if (carousel.value) {
          carousel.value.scrollBy({ left: 250, behavior: "smooth" });
          if (
            carousel.value.scrollLeft + carousel.value.clientWidth >=
            carousel.value.scrollWidth
          ) {
            carousel.value.scrollTo({ left: 0, behavior: "smooth" });
          }
        }
      }, 3000);
    });

    const openService = (service) => (selectedService.value = service);

    // 🔹 Knowledge Cards (fixé et fusionné)
    const selectedKnowledge = ref(null);
    const knowledgeCards = ref([
      {
        title: "Données",
        img: "/images/donnée.jpg",
        details: [
          "Solutions Cloud : hébergement et stockage sécurisés.",
          "Services IT gérés : gestion complète de votre infrastructure.",
          "Robotique et Drones : innovation et automatisation.",
        ],
      },
      {
        title: "Information",
        img: "/images/information.jpg",
        details: [
          "Cybersécurité : protéger vos systèmes et données.",
          "Développement de logiciels personnalisés.",
          "DevOps & automatisation des infrastructures.",
        ],
      },
      {
        title: "Connaissance",
        img: "/images/connaissances.jpg",
        details: [
          "Gestion des connaissances et capitalisation du savoir.",
          "Consulting IT stratégique.",
          "Audit et amélioration des systèmes.",
        ],
      },
      {
        title: "Sagesse",
        img: "/images/sagesse.jpg",
        details: [
          "Gestion de la performance.",
          "Intelligence artificielle pour la prise de décision.",
          "Qualité par conception.",
        ],
      },
    ]);

    const openKnowledgeCard = (card) => {
      selectedKnowledge.value = card;
    };

    // 🔹 Scroll
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return {
      headerImages,
      currentIndex,
      services,
      stats,
      carousel,
      selectedService,
      openService,
      scrollToTop,
      // Knowledge
      selectedKnowledge,
      knowledgeCards,
      openKnowledgeCard,
    };
  },
};
</script>


<style scoped>
/* Animation tourbillon */
.swirl-enter-active {
  animation: swirlIn 1s forwards;
}
.swirl-leave-active {
  animation: swirlOut 1s forwards;
}

@keyframes swirlIn {
  0% {
    transform: rotate(-360deg) scale(0);
    opacity: 0;
  }
  100% {
    transform: rotate(0deg) scale(1);
    opacity: 1;
  }
}

@keyframes swirlOut {
  0% {
    transform: rotate(0deg) scale(1);
    opacity: 1;
  }
  100% {
    transform: rotate(360deg) scale(0);
    opacity: 0;
  }
}

/* Services */
.fade-in-card {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.fade-in-card.show {
  opacity: 1;
  transform: translateY(0);
}

/* Modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Carousel */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Header text animation */
.animate-fade-up {
  animation: fadeUp 1s ease-out forwards;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
