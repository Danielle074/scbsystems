<template>
  <div class="about-page">
    <!-- Header avec image amélioré -->
    <header class="header-container fade-in-card">
      <img
        src="/images/equipe.jpg"
        alt="About background"
        class="header-image"
      />
      <div class="header-overlay"></div>

      <!-- Contenu du header -->
      <div class="header-content text-center relative z-20 mt-20">
        <div class="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-6 tracking-wider" style="background-color: #101E89; color: white;">
          QUI SOMMES-NOUS
        </div>
        <h1 class="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
          <span class="text-white">À Propos</span>
          <span class="text-transparent bg-clip-text" style="background-image: linear-gradient(135deg, #ffffff, #a0a8e0, #101E89);"> de Nous</span>
        </h1>
        <div class="w-24 h-1 mx-auto rounded-full mb-6" style="background-color: #101E89;"></div>
        <p class="text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto" style="text-shadow: 0 4px 18px rgba(0, 0, 0, 0.35)">
          Découvrez l'histoire, la mission et les valeurs de SCB SYSTEMS,<br />
          leader africain de l'ingénierie et de la technologie.
        </p>
      </div>

     
    </header>

    <!-- Section principale -->
    <main>
      <!-- Section À propos - Version chic -->
      <section class="relative py-24 px-6 md:px-10 overflow-hidden bg-white fade-in-card">
        <!-- Effets décoratifs élégants -->
        <div class="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style="background-color: #101E89;"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5" style="background-color: #101E89;"></div>

        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Texte à gauche -->
            <div>
              <div class="mb-6">
                <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider" style="background-color: #e8eaff; color: #101E89;">
                  NOTRE HISTOIRE
                </span>
              </div>
              <h2 class="text-3xl md:text-4xl font-bold mb-6" style="color: #101E89;">
                Une expertise <span class="border-b-4 pb-1" style="border-color: #101E89;">reconnue</span> en Afrique et dans le monde
              </h2>
              <div class="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  SCB Systems est une entreprise leader dans le domaine de l'ingénierie 
                  et de la technologie innovante en Afrique et dans le monde.
                </p>
                <p>
                  Fondée avec la vision de transformer le paysage technologique, 
                  SCB Systems accompagne tous les secteurs d'activité, du primaire au 
                  secondaire, en passant par le tertiaire et le quaternaire.
                </p>
                <p>
                  Nos solutions aident les entreprises à prendre des décisions durables 
                  pour assurer leur croissance dans cette ère technologique.
                </p>
                <p>
                  Notre expertise diversifiée nous permet d'être les meilleurs garants 
                  de votre réussite. Avec une présence en Afrique, aux États-Unis et en France, 
                  SCB Systems réunit une équipe de talents passionnés.
                </p>
              </div>
            </div>

            <!-- Image à droite -->
            <div class="relative">
              <div class="absolute -top-4 -left-4 w-32 h-32 rounded-lg opacity-20" style="background-color: #101E89;"></div>
              <div class="absolute -bottom-4 -right-4 w-32 h-32 rounded-lg opacity-20" style="background-color: #101E89;"></div>
              <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/ai.jpg" alt="SCB Systems" class="w-full h-auto object-cover transform hover:scale-105 transition duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Cartes personnel technique & expertise -->
      <section class="relative py-20 px-6 md:px-10 fade-in-card" style="background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Carte personnel technique -->
            <div class="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in-card">
              <div class="relative h-2" style="background-color: #101E89;"></div>
              <div class="p-8 text-center">
                <div class="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, #101E89, #2a3eb8);">
                  <img src="/images/tts.png" alt="Personnel technique" class="w-10 h-10 object-contain brightness-0 invert" />
                </div>
                <h3 class="text-2xl font-bold mb-4" style="color: #101E89;">Le personnel technique</h3>
                <p class="text-gray-600 leading-relaxed">
                  Que vous soyez en démarrage ou en restructuration, nous sommes là pour vous. 
                  Notre devise : analyser, identifier, conseiller, exécuter. Notre mission est 
                  de créer des relations, et non des transactions. Nous vous promettons d'être 
                  présents à chaque étape de votre projet.
                </p>
              </div>
            </div>

            <!-- Carte expertise -->
            <div class="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in-card">
              <div class="relative h-2" style="background-color: #101E89;"></div>
              <div class="p-8 text-center">
                <div class="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, #101E89, #2a3eb8);">
                  <img src="/images/oe.png" alt="Expertise" class="w-10 h-10 object-contain brightness-0 invert" />
                </div>
                <h3 class="text-2xl font-bold mb-4" style="color: #101E89;">Notre expertise</h3>
                <p class="text-gray-600 leading-relaxed">
                  Nous sommes un groupe de ressources en gestion d'ingénierie et en science des données, 
                  d'analystes, de défenseurs et de stratèges qui s'efforcent de partager notre expérience 
                  et nos connaissances pour vous aider à réussir votre entreprise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Mission & Vision - Version luxe -->
      <section class="py-24 px-6 md:px-10 fade-in-card relative overflow-hidden" style="background-color: #101E89;">
        <!-- Effet de fond -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div class="max-w-6xl mx-auto relative z-10">
          <div class="text-center mb-12">
            <span class="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider mb-4" style="background-color: rgba(255,255,255,0.2); color: white;">
              NOTRE RAISON D'ÊTRE
            </span>
            <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Mission & Vision
            </h2>
            <div class="w-20 h-1 mx-auto rounded-full bg-white"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Mission -->
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 border border-white/20">
              <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-white/20">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Notre Mission</h3>
                <p class="text-blue-100 leading-relaxed">
                  Accompagner les entreprises africaines dans leur transformation numérique 
                  en leur fournissant des solutions technologiques innovantes et adaptées à 
                  leurs besoins spécifiques. Nous nous engageons à être le partenaire de 
                  confiance qui facilite la croissance et l'innovation.
                </p>
              </div>
            </div>

            <!-- Vision -->
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 border border-white/20">
              <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-white/20">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Notre Vision</h3>
                <p class="text-blue-100 leading-relaxed">
                  Devenir le leader incontournable de l'ingénierie et de la technologie en Afrique, 
                  en créant un écosystème numérique qui propulse l'innovation et l'excellence. 
                  Nous aspirons à un continent où la technologie catalyse le développement durable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Nos Valeurs - Version chic -->
      <section class="py-24 px-6 md:px-10 bg-white fade-in-card">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <span class="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider mb-4" style="background-color: #e8eaff; color: #101E89;">
              CE QUI NOUS ANIME
            </span>
            <h2 class="text-4xl md:text-5xl font-extrabold mb-4" style="color: #101E89;">
              Nos Valeurs
            </h2>
            <div class="w-20 h-1 mx-auto rounded-full" style="background-color: #101E89;"></div>
            <p class="text-gray-600 mt-6 max-w-2xl mx-auto">
              Des principes forts qui guident nos actions au quotidien
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Excellence -->
            <div class="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div class="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, #101E89, #2a3eb8);">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3" style="color: #101E89;">Excellence</h3>
              <p class="text-gray-600">
                Nous nous engageons à fournir des solutions de la plus haute qualité, 
                en dépassant constamment les attentes de nos clients.
              </p>
            </div>

            <!-- Intégrité -->
            <div class="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div class="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, #101E89, #2a3eb8);">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3" style="color: #101E89;">Intégrité</h3>
              <p class="text-gray-600">
                Nous agissons avec transparence, honnêteté et éthique dans 
                toutes nos interactions et décisions.
              </p>
            </div>

            <!-- Collaboration -->
            <div class="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div class="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, #101E89, #2a3eb8);">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3" style="color: #101E89;">Collaboration</h3>
              <p class="text-gray-600">
                Nous croyons en la force du travail d'équipe et en la création 
                de partenariats durables avec nos clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Chiffres clés -->
      <section class="py-20 px-6 md:px-10 fade-in-card text-white" style="background-color: #101E89;">
        <div class="max-w-6xl mx-auto">
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
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <p class="text-blue-200 text-sm">Années d'expertise</p>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <p class="text-blue-200 text-sm">Projets réalisés</p>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <p class="text-blue-200 text-sm">Clients satisfaits</p>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold mb-2">3</div>
              <p class="text-blue-200 text-sm">Continents</p>
            </div>
          </div>
        </div>
      </section>

      <Team class="fade-in-card" />
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
import Team from "../components/Team.vue";

export default {
  name: "About",
  components: {
    Team,
  },
  data() {
    return {
      showScrollTop: false,
    };
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

      // Gestion du bouton retour en haut
      this.showScrollTop = window.scrollY > 500;
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // Vérifier au montage
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
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
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(16, 30, 137, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%);
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

/* Fade-in animation */
.fade-in-card {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-card.show {
  opacity: 1;
  transform: translateY(0);
}

/* Animation pour le scroll indicator */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>