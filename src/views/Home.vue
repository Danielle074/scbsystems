<template>
  <div>
    <!-- Hero Section  -->
    <section id="hero" class="relative h-screen overflow-hidden fade-in-card">
      <!-- Images avec overlay -->
      <div class="absolute inset-0 z-0">
        <div
          v-for="(image, index) in heroImages"
          :key="index"
          class="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          :class="{
            'opacity-100': currentImageIndex === index,
            'opacity-0': currentImageIndex !== index,
          }"
          :style="{ backgroundImage: `url('${image.url}')` }"
        >
          <div
            class="absolute inset-0 bg-gradient-to-b from-black/45 to-black/45"
          ></div>
        </div>
      </div>

      <!-- Texte et bouton -->
      <div
        class="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6"
      >
        <h1
          class="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white/80 to-blue-400 drop-shadow-[0_5px_20px_rgba(0,0,0,0.7)$] leading-tight pt-20 text-center fade-in-card"
        >
          {{ heroImages[currentImageIndex].title }}
        </h1>

        <router-link
          to="/services"
          class="mt-6 px-6 py-3 rounded-full bg-blue-800 text-white font-semibold shadow-lg hover:bg-blue-800 transition transform hover:scale-105 fade-in-card"
        >
          Découvrir nos services
        </router-link>
      </div>

      <!-- Bullets de navigation -->
      <div
        class="absolute bottom-8 z-20 w-full flex justify-center items-center space-x-4 fade-in-card"
      >
        <span
          v-for="(image, index) in heroImages"
          :key="index"
          @click="currentImageIndex = index"
          :class="[
            'w-4 h-4 rounded-full border-2 border-blue-800 cursor-pointer transition-all duration-300',
            currentImageIndex === index ? 'bg-blue-800' : 'bg-transparent',
          ]"
        ></span>
      </div>
    </section>

    <!-- About Section -->
    <section
      class="relative py-20 px-6 md:px-10 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-200 fade-in-card"
    >
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-bold text-blue-900 mb-6 drop-shadow-lg fade-in-card"
        >
          À propos de SCB SYSTEMS
        </h2>
        <p class="text-lg md:text-xl text-gray-700 mb-4 fade-in-card">
          SCB Systems accompagne tous les secteurs d'activité, du primaire au
          secondaire, en passant par le tertiaire et le quaternaire.<br />
          Nos solutions aident les entreprises à prendre des décisions durables
          pour assurer leur croissance dans cette ère technologique.<br />
          Notre expertise diversifiée nous permet d'être les meilleurs garants
          de votre réussite.
        </p>
      </div>

      <!-- Cartes en grille -->
      <div
        class="flex flex-col md:flex-row justify-center items-stretch gap-8 mt-2"
      >
        <div
          class="bg-white rounded-xl shadow-lg p-6 w-full md:w-1/3 hover:scale-105 transition duration-300 flex flex-col items-center fade-in-card"
        >
          <img src="/images/tts.png" alt="" class="h-20 mb-4" />
          <h3 class="text-xl font-semibold text-blue-800 mb-2">
            Le personnel technique
          </h3>
          <p class="text-gray-600 text-center">
            Que vous soyez en démarrage ou en restructuration, nous sommes là
            pour vous. Notre devise : analyser, identifier, conseiller,
            exécuter. Notre mission est de créer des relations, et non des
            transactions. Nous vous promettons d'être présents à chaque étape de
            votre projet, en cas de questions ou de problèmes.
          </p>
        </div>
        <div
          class="bg-white rounded-xl shadow-lg p-6 w-full md:w-1/3 hover:scale-105 transition duration-300 flex flex-col items-center fade-in-card"
        >
          <img src="/images/oe.png" alt="" class="h-20 mb-4" />
          <h3 class="text-xl font-semibold text-blue-800 mb-2">
            Notre expertise
          </h3>
          <p class="text-gray-600 text-center">
            Nous sommes un groupe de ressources en gestion d'ingénierie et en
            science des données, d'analystes, de défenseurs et de stratèges qui
            s'efforcent de partager notre expérience et nos connaissances pour
            vous aider à réussir votre entreprise.
          </p>
        </div>
      </div>
    </section>

    <!-- Nos Projets  -->
    <section class="py-20 px-6 md:px-10 bg-gray-50 fade-in-card">
      <h2
        class="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-12 fade-in-card"
      >
        Nos Projets
      </h2>

      <div class="relative">
        <div
          class="flex overflow-x-auto gap-6 py-4 scrollbar-hide"
          ref="projectsContainer"
          @scroll="handleProjectsScroll"
        >
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="min-w-[260px] max-w-[260px] flex-shrink-0"
          >
            <div
              class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-out h-[350px] flex flex-col hover:shadow-lg"
            >
              <!-- Image du projet -->
              <div
                class="relative h-40 flex items-center justify-center bg-gray-50 p-3"
              >
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="max-w-full max-h-24 object-contain"
                />
              </div>

              <!-- Contenu du projet -->
              <div class="p-4 flex-1 flex flex-col">
                <h3
                  class="text-base font-bold text-blue-900 mb-2 leading-tight"
                >
                  {{ project.title }}
                </h3>
                <p class="text-gray-600 text-xs flex-1 leading-relaxed mb-2">
                  {{ project.description }}
                </p>

                <!-- Indicateur de statut -->
                <div class="flex items-center justify-between mt-auto">
                  <span
                    class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
                    :class="
                      project.status === 'Complété'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    "
                  >
                    {{ project.status }}
                  </span>
                  <span class="text-xs text-gray-500">
                    {{ project.year }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Indicateurs de progression -->
        <div class="flex justify-center items-center gap-2 mt-6">
          <div
            v-for="(project, index) in projects"
            :key="index"
            @click="scrollToProject(index)"
            :class="[
              'w-2 h-2 rounded-full cursor-pointer transition-all duration-300',
              activeProjectIndex === index
                ? 'bg-blue-600 w-6'
                : 'bg-gray-300 hover:bg-gray-400',
            ]"
          ></div>
        </div>
      </div>
    </section>

    <!-- Innovations Section  -->
    <section class="py-20 px-6 md:px-10 bg-white fade-in-card">
      <h2
        class="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-12 fade-in-card"
      >
        Nos Innovations
      </h2>

      <div class="relative">
        <div
          class="flex overflow-x-auto gap-6 py-4 scrollbar-hide"
          ref="innovationsContainer"
          @scroll="handleInnovationsScroll"
        >
          <div
            v-for="(innovation, index) in innovations"
            :key="index"
            class="min-w-[260px] max-w-[260px] flex-shrink-0"
          >
            <div
              class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-out h-[350px] flex flex-col hover:shadow-lg"
            >
              <!-- Image  -->
              <div
                class="relative h-40 flex items-center justify-center bg-gray-50 p-3"
              >
                <img
                  :src="innovation.image"
                  :alt="innovation.title"
                  class="max-w-full max-h-24 object-contain"
                />
              </div>

              <!-- Contenu -->
              <div class="p-4 flex-1 flex flex-col">
                <h3
                  class="text-base font-bold text-blue-900 mb-2 leading-tight"
                >
                  {{ innovation.title }}
                </h3>

                <p class="text-gray-600 text-xs flex-1 leading-relaxed mb-2">
                  {{ innovation.description }}
                </p>

                <!-- Badge catégorie  -->
                <div class="flex items-center justify-between mt-auto">
                  <span
                    class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700"
                  >
                    {{ innovation.category }}
                  </span>
                  <span class="text-xs text-gray-500">
                    {{ innovation.year }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Indicateurs -->
        <div class="flex justify-center items-center gap-2 mt-6">
          <div
            v-for="(innovation, index) in innovations"
            :key="index"
            @click="scrollToInnovation(index)"
            :class="[
              'w-2 h-2 rounded-full cursor-pointer transition-all duration-300',
              activeInnovationIndex === index
                ? 'bg-blue-600 w-6'
                : 'bg-gray-300 hover:bg-gray-400',
            ]"
          ></div>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section  -->
    <section
      class="py-16 px-6 md:px-10 flex flex-col items-center justify-center fade-in-card"
    >
      <div
        class="bg-white rounded-xl shadow-xl p-8 max-w-2xl w-full text-center fade-in-card"
      >
        <h2
          class="text-3xl md:text-4xl font-bold text-blue-900 mb-4 fade-in-card"
        >
          Vous avez un projet en tête?
        </h2>
        <p class="text-lg text-gray-700 mb-6 fade-in-card">
          Notre équipe est à votre écoute pour concrétiser vos idées et vous
          accompagner dans toutes les étapes de votre projet.
        </p>
        <router-link
          to="/contact"
          class="bg-blue-700 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-800 transition text-lg shadow-lg fade-in-card"
        >
          Discutons-en
        </router-link>
      </div>
    </section>

    <!-- Contact Section -->
    <section
      class="py-20 px-6 md:px-10 flex flex-col items-center justify-center bg-white fade-in-card"
    >
      <h1
        class="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2 text-center fade-in-card"
      >
        Concrétisez vos projets
      </h1>
      <p
        class="text-xl text-blue-700 mb-10 text-center font-medium fade-in-card"
      >
        Contactez-nous
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div
          class="bg-blue-50 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center fade-in-card"
        >
          <i
            class="bx bx-phone-call text-5xl text-blue-700 mb-4 fade-in-card"
          ></i>
          <h2 class="text-2xl font-bold text-blue-900 mb-2 fade-in-card">
            Appelez-nous
          </h2>
          <p class="text-gray-700 mb-4 fade-in-card">
            Besoin d'un conseil ou d'un devis? Appelez-nous ou demandez à être
            rappelé par notre équipe.
          </p>
          <a
            href="tel:+22500000000"
            class="bg-blue-700 text-white font-bold px-6 py-2 rounded-full hover:bg-blue-800 transition shadow-lg fade-in-card"
            >Appeler</a
          >
          <a
            href="javascript:void(0)"
            class="mt-2 text-blue-700 underline hover:text-blue-900 fade-in-card"
            >Demander à être rappelé</a
          >
        </div>
        <div
          class="bg-blue-50 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center fade-in-card"
        >
          <i
            class="bx bx-message-detail text-5xl text-blue-700 mb-4 fade-in-card"
          ></i>
          <h2 class="text-2xl font-bold text-blue-900 mb-2 fade-in-card">
            Envoyez-nous un message
          </h2>
          <p class="text-gray-700 mb-4 fade-in-card">
            Obtenez une réponse en moins de 24H. Notre équipe est disponible
            pour vous accompagner.
          </p>
          <RouterLink
            to="/contact"
            class="bg-blue-700 text-white font-bold px-6 py-2 rounded-full hover:bg-blue-800 transition shadow-lg fade-in-card"
            >Contactez-nous</RouterLink
          >
        </div>
      </div>
    </section>

    <!-- Section Équipe  -->
    <section
      class="px-6 py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden fade-in-card"
    >
      <h2
        class="text-5xl md:text-6xl font-extrabold text-blue-900 mb-10 text-center tracking-tight fade-in-card"
      >
        Notre Équipe
      </h2>
      <p
        class="text-center text-black mb-12 max-w-3xl mx-auto text-lg fade-in-card"
      >
        Derrière SCB SYSTEMS se cache une équipe soudée de talents passionnés.
      </p>
      <div class="flex flex-row justify-center gap-8 overflow-x-auto py-4">
        <div
          class="region-card bg-white rounded-3xl shadow-xl p-8 min-w-[300px] flex flex-col items-center text-center transform hover:scale-105 transition fade-in-card"
        >
          <div class="flex items-center gap-3 fade-in-card">
            <h3
              class="text-2xl md:text-3xl font-bold text-blue-900 min-w-[200px]"
            >
              SCB SYSTEMS AFRICA
            </h3>
            <img
              src="/images/afrique.png"
              alt="icone Afrique"
              class="w-8 h-8 object-contain fade-in-card"
            />
          </div>
          <router-link
            :to="{ name: 'TeamPage', params: { region: 'Africa' } }"
            class="mt-6 px-8 py-3 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 text-lg transition fade-in-card"
            >Savoir plus</router-link
          >
        </div>
        <div
          class="region-card bg-white rounded-3xl shadow-xl p-8 min-w-[300px] flex flex-col items-center text-center transform hover:scale-105 transition fade-in-card"
        >
          <div class="flex items-center gap-3 fade-in-card">
            <h3
              class="text-2xl md:text-3xl font-bold text-blue-900 min-w-[200px]"
            >
              SCB SYSTEMS USA
            </h3>
            <img
              src="/images/les-etats-unis-damerique.png"
              alt="icone USA"
              class="w-8 h-8 object-contain fade-in-card"
            />
          </div>
          <router-link
            :to="{ name: 'TeamPage', params: { region: 'USA' } }"
            class="mt-6 px-8 py-3 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 text-lg transition fade-in-card"
            >Savoir plus</router-link
          >
        </div>
        <div
          class="region-card bg-white rounded-3xl shadow-xl p-8 min-w-[300px] flex flex-col items-center text-center transform hover:scale-105 transition fade-in-card"
        >
          <div class="flex items-center gap-3 fade-in-card">
            <h3
              class="text-2xl md:text-3xl font-bold text-blue-900 min-w-[200px]"
            >
              SCB SYSTEMS FRANCE
            </h3>
            <img
              src="/images/france.png"
              alt="icone France"
              class="w-8 h-8 object-contain fade-in-card"
            />
          </div>
          <router-link
            :to="{ name: 'TeamPage', params: { region: 'France' } }"
            class="mt-6 px-8 py-3 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 text-lg transition fade-in-card"
            >Savoir plus</router-link
          >
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="py-20 px-6 md:px-10 bg-gray-50 fade-in-card">
      <h2
        class="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-12 fade-in-card"
      >
        Nos Certifications
      </h2>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center items-center"
      >
        <div
          v-for="(cert, i) in certifications"
          :key="i"
          class="flex flex-col items-center fade-in-card"
        >
          <img
            :src="cert.image"
            alt=""
            class="h-28 w-28 object-contain mb-2 fade-in-card"
          />
          <h3
            class="text-base md:text-lg font-semibold text-blue-800 text-center fade-in-card"
          >
            {{ cert.title }}
          </h3>
        </div>
      </div>
    </section>

    <!-- Bouton Retour en Haut -->
    <button
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-110 z-50 fade-in-card"
      title="Retour en haut"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const heroImages = [
  {
    url: "/images/banner.jpg",
    title: "LEADER AFRICAIN EN INGÉNIERIE ET TECHNOLOGIE INNOVANTE",
  },
  {
    url: "/images/Site web SCB_Plan de travail 1 copie.jpg",
    title: "MAÎTRISE TOTALE DE LA GESTION DES CONNAISSANCES",
  },
  {
    url: "/images/Site web SCB_Plan de travail 1 copie 2.jpg",
    title: "OPTIMISEZ VOTRE NUMÉRISATION POUR UNE PERFORMANCE MAXIMALE",
  },
];

const projects = [
  {
    image: "/images/Scb-Academy.png",
    title: "SCB Academy",
    description:
      " Développement des compétences techniques et professionnelles.",
    status: "En cours",
    year: "2025",
  },
  {
    image: "/images/scb dr 2.png",
    title: "SCB Drone",
    description: "Avec ce site vous pouvez decouvrir le monde des drones.",
    status: "En cours",
    year: "2025",
  },
  {
    image: "/images/boursepay sf.png",
    title: "BoursePay",
    description:
      "Système de paiement sécurisé pour les bourses d'etudes à l'etranger.",
    status: "Complété",
    year: "2024",
  },
  {
    image: "/images/product-7-removebg-preview.png",
    title: "UISIDIR",
    description: "Automatisation intelligente des processus.",
    status: "En cours",
    year: "2024",
  },
  {
    image: "/images/product-9-removebg-preview.png",
    title: "Une projet plus que créatif",
    description: "Plateforme pour les ambassades de côte d'ivoire aux USA.",
    status: "Complété",
    year: "2023",
  },
  {
    image: "/images/logo (2).png",
    title: "Plateforme prise de rendez-vous Sécurisée",
    description:
      "Avec secure check pas besion de se deplacer pour un rendez-vous.",
    status: "Complété",
    year: "2023",
  },
];

const innovations = [
  {
    image: "/images/Innovation 1.png",
    title: "Appolo",
    description: "Votre plateforme de santé.",
    category: "Santé",
  },
  {
    image: "/images/Innovation 2.png",
    title: "Blockchain Secure",
    description: "Technologie blockchain .",
    category: "Sécurité",
  },
  {
    image: "/images/Innovation 3.png",
    title: "Entrepreunariat ship",
    description: "Pour celebrer les jeunes talentueux.",
    category: "Conférence",
  },
  {
    image: "/images/Innovation 4.png",
    title: "  SENECA",
    description: "Une forme d'architectures.",
    category: "Cloud Computing",
  },
  {
    image: "/images/Innovation 5.png",
    title: "Kora",
    description: "Votre plateforme pour lire des livres.",
    category: "Big Data",
  },
  {
    image: "/images/Innovation 6.png",
    title: "Mobile First",
    description: "Approche mobile-first.",
    category: "Développement Mobile",
  },
  {
    image: "/images/Innovation 7.png",
    title: "e-civils",
    description: "Réalité virtuelle interactive.",
    category: "Réalité Virtuelle",
  },
  {
    image: "/images/Innovation 8.png",
    title: "API Gateway",
    description: "Gestion centralisée des APIs.",
    category: "Architecture",
  },
  {
    image: "/images/Innovation 9.png",
    title: "DevOps Auto",
    description: "Automatisation des processus DevOps.",
    category: "DevOps",
  },
];

const certifications = [
  { image: "/images/certification 1.png" },
  { image: "/images/Certification 2.png" },
  { image: "/images/Certification 3.png" },
  { image: "/images/Certification 4.png" },
  { image: "/images/Certification 5.png" },
  { image: "/images/Certificatio 6.png" },
  { image: "/images/Certification 7.png" },
  { image: "/images/Certification 8.png" },
  { image: "/images/Certification 9.png" },
  { image: "/images/Certification 10.png" },
  { image: "/images/Certification 11.png" },
];

const currentImageIndex = ref(0);
const activeProjectIndex = ref(0);
const activeInnovationIndex = ref(0);
const projectsContainer = ref(null);
const innovationsContainer = ref(null);
let autoScrollInterval;

onMounted(() => {
  // Changement automatique images hero
  setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % heroImages.length;
  }, 5000);

  // Défilement automatique des projets et innovations (beaucoup plus lent)
  startAutoScroll();

  // Animation progressive cartes
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".fade-in-on-scroll").forEach((el) => {
    observer.observe(el);
  });
});

onUnmounted(() => {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval);
  }
});

// Défilement automatique BEAUCOUP PLUS LENT
const startAutoScroll = () => {
  autoScrollInterval = setInterval(() => {
    if (projectsContainer.value) {
      projectsContainer.value.scrollLeft += 0.5; // Réduit de 1 à 0.5
      if (
        projectsContainer.value.scrollLeft >=
        projectsContainer.value.scrollWidth -
          projectsContainer.value.clientWidth
      ) {
        projectsContainer.value.scrollLeft = 0;
      }
    }

    if (innovationsContainer.value) {
      innovationsContainer.value.scrollLeft += 0.5; // Réduit de 1 à 0.5
      if (
        innovationsContainer.value.scrollLeft >=
        innovationsContainer.value.scrollWidth -
          innovationsContainer.value.clientWidth
      ) {
        innovationsContainer.value.scrollLeft = 0;
      }
    }
  }, 50); // Augmenté de 30ms à 50ms pour ralentir encore plus
};

// Gestion du scroll des projets
const handleProjectsScroll = () => {
  if (projectsContainer.value) {
    const scrollLeft = projectsContainer.value.scrollLeft;
    const cardWidth = projectsContainer.value.children[0]?.offsetWidth || 280;
    const gap = 24; // gap-6 = 24px
    const newIndex = Math.round(scrollLeft / (cardWidth + gap));
    activeProjectIndex.value = Math.max(
      0,
      Math.min(newIndex, projects.length - 1)
    );
  }
};

// Gestion du scroll des innovations
const handleInnovationsScroll = () => {
  if (innovationsContainer.value) {
    const scrollLeft = innovationsContainer.value.scrollLeft;
    const cardWidth =
      innovationsContainer.value.children[0]?.offsetWidth || 260;
    const gap = 24; // gap-6 = 24px
    const newIndex = Math.round(scrollLeft / (cardWidth + gap));
    activeInnovationIndex.value = Math.max(
      0,
      Math.min(newIndex, innovations.length - 1)
    );
  }
};

// Navigation vers un projet spécifique
const scrollToProject = (index) => {
  if (projectsContainer.value) {
    const cardWidth = projectsContainer.value.children[0]?.offsetWidth || 280;
    const gap = 24;
    projectsContainer.value.scrollLeft = index * (cardWidth + gap);
    activeProjectIndex.value = index;
  }
};

// Navigation vers une innovation spécifique
const scrollToInnovation = (index) => {
  if (innovationsContainer.value) {
    const cardWidth =
      innovationsContainer.value.children[0]?.offsetWidth || 260;
    const gap = 24;
    innovationsContainer.value.scrollLeft = index * (cardWidth + gap);
    activeInnovationIndex.value = index;
  }
};

// Fonction "Retour en haut"
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".fade-in-card");
  const windowBottom = window.innerHeight + window.scrollY;

  elements.forEach((el) => {
    const elementBottom = el.offsetTop + el.offsetHeight / 4;
    if (windowBottom > elementBottom) {
      el.classList.add("show");
    }
  });
});
</script>

<style scoped>
/* Overlay léger pour toutes les images */
.bg-black\/50 {
  background-color: rgba(0, 0, 0, 0.5);
}

/* Transition douce des images */
.transition-opacity {
  transition: opacity 1s ease-in-out;
}

/* Cacher la scrollbar pour le carrousel */
.flex::-webkit-scrollbar {
  display: none;
}
.flex {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Smooth scroll pour toute la page */
html {
  scroll-behavior: smooth;
}

/* Animations pour les cartes */
.fade-in-card {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.fade-in-card.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
