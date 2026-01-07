<template>
  <div class="about-page">
    <!-- Header avec image -->
    <header class="header-container fade-in-card">
      <img
        src="/images/equipe.jpg"
        alt="About background"
        class="header-image"
      />

      <!-- Contenu du header -->
      <div class="header-content text-center md:text-left relative z-10">
        <h1
          class="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient"
        >
          À Propos<br />de Nous
        </h1>
        <p
          class="text-white text-lg md:text-xl leading-relaxed mt-6 mb-4"
          style="text-shadow: 0 4px 18px rgba(0, 0, 0, 0.35)"
        >
          Découvrez l'histoire et la mission de SCB SYSTEMS,<br />
          leader africain de l'ingénierie et de la technologie.
        </p>
      </div>
    </header>

    <!-- Section principale -->
    <main>
      <!-- Section À propos -->
      <section
        class="relative py-20 px-6 md:px-10 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-200 fade-in-card"
      >
        <!-- Effets décoratifs -->
        <div
          class="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-2xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-0 right-0 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-3xl animate-pulse"
        ></div>

        <!-- Titre et texte principal À propos -->
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2
            class="text-4xl md:text-5xl font-bold text-blue-900 mb-6 drop-shadow-lg"
          >
            À propos de SCB SYSTEMS
          </h2>
          <p class="text-lg md:text-xl text-gray-700 mb-4">
            SCB Systems accompagne tous les secteurs d'activité, du primaire au
            secondaire, en passant par le tertiaire et le quaternaire.<br />
            Nos solutions aident les entreprises à prendre des décisions
            durables pour assurer leur croissance dans cette ère
            technologique.<br />
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
              transactions. Nous vous promettons d'être présents à chaque étape
              de votre projet, en cas de questions ou de problèmes.
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
              science des données, d'analystes, de défenseurs et de stratèges
              qui s'efforcent de partager notre expérience et nos connaissances
              pour vous aider à réussir votre entreprise.
            </p>
          </div>
        </div>
      </section>

      <!-- Section Mission/Vision -->
      <section class="py-20 px-6 md:px-10 bg-white fade-in-card">
        <div class="max-w-6xl mx-auto">
          <h2
            class="text-4xl md:text-5xl font-extrabold text-blue-900 mb-10 text-center tracking-tight"
          >
            Notre Mission & Vision
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-8 fade-in-card"
            >
              <div class="text-center">
                <i class="bx bx-target-lock text-5xl text-blue-700 mb-4"></i>
                <h3 class="text-2xl font-bold text-blue-900 mb-4">
                  Notre Mission
                </h3>
                <p class="text-gray-700 leading-relaxed">
                  Accompagner les entreprises africaines dans leur
                  transformation numérique en leur fournissant des solutions
                  technologiques innovantes et adaptées à leurs besoins
                  spécifiques. Nous nous engageons à être le partenaire de
                  confiance qui facilite la croissance et l'innovation.
                </p>
              </div>
            </div>
            <div
              class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-xl p-8 fade-in-card"
            >
              <div class="text-center">
                <i class="bx bx-show text-5xl text-purple-700 mb-4"></i>
                <h3 class="text-2xl font-bold text-purple-900 mb-4">
                  Notre Vision
                </h3>
                <p class="text-gray-700 leading-relaxed">
                  Devenir le leader incontournable de l'ingénierie et de la
                  technologie en Afrique, en créant un écosystème numérique qui
                  propulse l'innovation et l'excellence. Nous aspirons à un
                  continent où la technologie catalyse le développement durable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 px-6 md:px-10 bg-gradient-to-br from-gray-50 to-blue-50 fade-in-card">
        <div class="max-w-6xl mx-auto">
          <h2
            class="text-4xl md:text-5xl font-extrabold text-blue-900 mb-10 text-center tracking-tight"
          >
            Nos Valeurs
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition duration-300 fade-in-card">
              <i class="bx bx-heart text-5xl text-red-500 mb-4"></i>
              <h3 class="text-xl font-bold text-blue-900 mb-3">Excellence</h3>
              <p class="text-gray-600">
                Nous nous engageons à fournir des solutions de la plus haute
                qualité, en dépassant constamment les attentes de nos clients.
              </p>
            </div>

            <div class="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition duration-300 fade-in-card">
              <i class="bx bx-shield text-5xl text-green-500 mb-4"></i>
              <h3 class="text-xl font-bold text-blue-900 mb-3">Intégrité</h3>
              <p class="text-gray-600">
                Nous agissons avec transparence, honnêteté et éthique dans
                toutes nos interactions et décisions.
              </p>
            </div>

            <div class="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition duration-300 fade-in-card">
              <i class="bx bx-group text-5xl text-blue-500 mb-4"></i>
              <h3 class="text-xl font-bold text-blue-900 mb-3">
                Collaboration
              </h3>
              <p class="text-gray-600">
                Nous croyons en la force du travail d'équipe et en la création
                de partenariats durables avec nos clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Team class="fade-in-card" />
    </main>

  

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

<script>
import Team from "../components/Team.vue";


export default {
  name: "About",
  components: {
    Team,
  },
  mounted() {
    // Effet fade-in pour toutes les sections lors du scroll
    const onScroll = () => {
      const elements = document.querySelectorAll(".fade-in-card");
      const windowBottom = window.scrollY + window.innerHeight;

      elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top + window.scrollY;
        if (windowBottom > elementTop + el.offsetHeight / 6) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    // Vérifier au montage pour les éléments déjà visibles
    onScroll();
  },
};

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

/* Fade-in + montée rapide pour toutes les sections */
.fade-in-card {
  opacity: 0;
  transform: translateY(15px);
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
}
.fade-in-card.show {
  opacity: 1;
  transform: translateY(0);
}
</style>


