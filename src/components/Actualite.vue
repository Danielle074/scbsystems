<template>
  <div class="actualites-page min-h-screen relative">
    <!-- Header amélioré -->
    <header class="relative h-[85vh] flex flex-col items-center justify-center text-center text-white overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center scale-110" style="background-image: url('/images/Actualites.jpg');"></div>
      <div class="absolute inset-0" style="background: linear-gradient(135deg, rgba(16,30,137,0.85) 0%, rgba(0,0,0,0.6) 100%);"></div>
      
      <div class="relative z-10 px-6 max-w-4xl mx-auto mt-40">
        <div class="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-6 tracking-wider" style="background-color: rgba(255,255,255,0.2); backdrop-filter: blur(10px);">
          SCB SYSTEMS INTERNATIONAL
        </div>
        <h1 class="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
          Actualités
        </h1>
        <div class="w-24 h-1 mx-auto rounded-full " style="background-color: #101E89;"></div>
        <p class="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Chez SCB Systems, nous partageons nos dernières innovations technologiques, 
          projets et événements pour rester connectés avec nos clients et partenaires à travers le monde.
        </p>
      </div>

     
    </header>

    <!-- Grille des actualités -->
    <section class="py-24 px-6 md:px-12 relative overflow-hidden" style="background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);">
      <!-- Effets décoratifs -->
      <div class="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style="background-color: #101E89;"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5" style="background-color: #101E89;"></div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider mb-4" style="background-color: #e8eaff; color: #101E89;">
            RESTEZ INFORMÉS
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold mb-4" style="color: #101E89;">
            Dernières Actualités
          </h2>
          <div class="w-20 h-1 mx-auto rounded-full" style="background-color: #101E89;"></div>
          <p class="text-gray-600 mt-6 max-w-2xl mx-auto">
            Découvrez nos dernières innovations et événements à travers le monde
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="(news, index) in newsList"
            :key="index"
            class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden cursor-pointer"
            @click="openArticle(news)"
          >
            <div class="relative h-56 overflow-hidden">
              <img :src="news.image" alt="Actu image" class="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300" style="background: linear-gradient(135deg, #101E89 0%, transparent 100%);"></div>
              <div class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold" style="background-color: #101E89; color: white;">
                {{ news.category || 'Actualité' }}
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span>{{ news.date }}</span>
              </div>
              <h3 class="text-xl font-bold mb-3 line-clamp-2" style="color: #101E89;">{{ news.title }}</h3>
              <p class="text-gray-600 line-clamp-3">{{ news.description }}</p>
              <div class="mt-4 flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3" style="color: #101E89;">
                Lire plus
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Section Vidéos -->
    <section class="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider mb-4" style="background-color: #e8eaff; color: #101E89;">
            CONTENU MULTIMÉDIA
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold mb-4" style="color: #101E89;">
            Nos Vidéos
          </h2>
          <div class="w-20 h-1 mx-auto rounded-full" style="background-color: #101E89;"></div>
          <p class="text-gray-600 mt-6 max-w-2xl mx-auto">
            Découvrez nos présentations, démonstrations et événements en vidéo
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(video, index) in videos"
            :key="index"
            class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div class="relative" style="padding-top: 56.25%">
              <iframe
                :src="`https://www.youtube.com/embed/${extractYoutubeID(video.url)}`"
                class="absolute top-0 left-0 w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="p-4">
              <h3 class="font-bold text-lg mb-1 line-clamp-1" style="color: #101E89;">{{ video.title }}</h3>
              <p class="text-gray-500 text-sm line-clamp-2">{{ video.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal article amélioré -->
    <transition name="fade">
      <div v-if="selectedArticle" class="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" @click.self="closeArticle">
        <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-scaleIn">
          <div class="relative h-64 overflow-hidden">
            <img :src="selectedArticle.image" :alt="selectedArticle.title" class="w-full h-full object-cover" />
            <div class="absolute inset-0" style="background: linear-gradient(135deg, #101E89 0%, transparent 100%);"></div>
            <button @click="closeArticle" class="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition text-xl">
              ✕
            </button>
          </div>
          <div class="p-8">
            <div class="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span>{{ selectedArticle.date }}</span>
            </div>
            <h2 class="text-3xl font-bold mb-6" style="color: #101E89;">{{ selectedArticle.title }}</h2>
            <div class="prose max-w-none">
              <p class="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                {{ selectedArticle.fullContent }}
              </p>
              
              <!-- Vidéos associées -->
              <div v-if="selectedArticle.relatedVideos && selectedArticle.relatedVideos.length" class="mt-8 pt-6 border-t border-gray-200">
                <h3 class="text-2xl font-bold mb-4" style="color: #101E89;">Vidéos associées</h3>
                <div class="grid md:grid-cols-2 gap-6">
                  <div v-for="(video, idx) in selectedArticle.relatedVideos" :key="idx" class="bg-gray-50 rounded-xl overflow-hidden">
                    <div class="relative" style="padding-top: 56.25%">
                      <iframe
                        :src="`https://www.youtube.com/embed/${extractYoutubeID(video.url)}`"
                        class="absolute top-0 left-0 w-full h-full"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div class="p-4">
                      <h4 class="font-bold" style="color: #101E89;">{{ video.title }}</h4>
                      <p class="text-gray-600 text-sm mt-1">{{ video.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Section Newsletter -->
    <section class="py-20 px-6 md:px-12 relative overflow-hidden" style="background-color: #101E89;">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-3xl mx-auto text-center relative z-10">
        <div class="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-white/20">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </div>
        <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">Restez informés</h3>
        <p class="text-blue-200 mb-8">
          Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités et innovations
        </p>
        <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Votre adresse email" 
            class="flex-1 px-4 py-3 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-700"
          />
          <button class="px-6 py-3 rounded-full font-semibold transition transform hover:scale-105" style="background-color: white; color: #101E89;">
            S'inscrire
          </button>
        </div>
      </div>
    </section>

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
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: "Actualites",
  setup() {
    const newsList = ref([
      {
        id: 1,
        title: "Lancement de SCB Drone - Innovation Technologique",
        category: "Innovation",
        date: "20 septembre 2025",
        description: "Découvrez nos drones performants pour l'agriculture, la construction et la surveillance.",
        image: "/images/scb dr 2.png",
        fullContent: `SCB Systems est fier d'annoncer le lancement de SCB Drone, une plateforme révolutionnaire dédiée aux solutions drones innovantes. Cette technologie de pointe transformera les secteurs de l'agriculture, de la construction et de la surveillance.

Nos drones équipés de capteurs avancés permettent :
• L'analyse des cultures en temps réel
• La cartographie topographique précise
• La surveillance d'infrastructures
• L'inspection de sites industriels

Cette innovation s'inscrit dans notre vision d'apporter des solutions technologiques adaptées aux besoins locaux et internationaux.`,
        relatedVideos: [
          { url: "https://www.youtube.com/watch?v=YRnm7r8Z9aE", title: "SCB Drone - Démonstration", description: "Vidéo de démonstration de nos drones innovants" },
          { url: "https://www.youtube.com/watch?v=Bk1pQyfQQ_c", title: "Drones en Agriculture", description: "Comment les drones révolutionnent l'agriculture moderne" }
        ]
      },
      {
        id: 2,
        title: "Partenariat Stratégique en Intelligence Artificielle",
        category: "Partenariat",
        date: "10 septembre 2025",
        description: "Renforcement de nos capacités en IA et machine learning.",
        image: "/images/Affaires.jpg",
        fullContent: `SCB Systems a le plaisir d'annoncer un partenariat stratégique majeur avec une organisation internationale leader dans le domaine de l'intelligence artificielle.

Les bénéfices de ce partenariat incluent :
• Développement d'algorithmes IA avancés
• Solutions d'analyse prédictive améliorées
• Formation de nos équipes aux dernières technologies
• Accès à des ressources de recherche de pointe

Ce partenariat positionne SCB Systems comme un acteur majeur dans le domaine de l'IA en Afrique et au-delà.`,
        relatedVideos: [
          { url: "https://www.youtube.com/watch?v=QJn28fFKUR0", title: "IA et Machine Learning", description: "Les bases de l'intelligence artificielle expliquées" },
          { url: "https://www.youtube.com/watch?v=JMUxmLyrhSk", title: "L'IA dans les Affaires", description: "Comment l'IA transforme les entreprises modernes" }
        ]
      },
      {
        id: 3,
        title: "SCB Tech Summit 2025 - Un Succès Retentissant",
        category: "Événement",
        date: "5 août 2025",
        description: "Plus de 500 professionnels réunis pour célébrer l'innovation technologique.",
        image: "/images/Events.jpg",
        fullContent: `Le SCB Tech Summit 2025 a connu un succès retentissant avec la participation de plus de 500 professionnels du secteur technologique.

Points marquants de l'événement :
• Présentation de SCB Academy
• Démo live de SCB Drone
• Tables rondes sur l'IA et la blockchain
• Ateliers de formation technique
• Networking avec des experts internationaux

Cet événement renforce notre engagement à promouvoir l'innovation technologique en Afrique et dans le monde.`,
        relatedVideos: [
          { url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ", title: "Tech Summit 2025 - Highlights", description: "Les meilleurs moments de notre événement annuel" },
          { url: "https://www.youtube.com/watch?v=7-QIyRKyFEg", title: "Innovations Technologiques", description: "Les tendances technologiques de 2025" }
        ]
      }
    ]);

    const videos = ref([
      { url: "https://www.youtube.com/watch?v=QJn28fFKUR0", title: "Blockchain : Comprendre la technologie", description: "Une explication simple de la technologie blockchain." },
      { url: "https://www.youtube.com/watch?v=mxT233EdY5c", title: "Introduction au Cloud Computing", description: "Les bases du cloud computing expliquées simplement." },
      { url: "https://www.youtube.com/watch?v=7-QIyRKyFEg", title: "L'IA N°1 Mondiale pour les Vidéos", description: "Découvrez la nouvelle génération d'IA." },
      { url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ", title: "Réalité Augmentée", description: "Comment la RA transforme le digital." }
    ]);

    const selectedArticle = ref(null);
    const showScrollTop = ref(false);

    const extractYoutubeID = (url) => {
      const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      return match && match[2].length === 11 ? match[2] : null;
    };

    const openArticle = (article) => {
      selectedArticle.value = article;
      document.body.style.overflow = 'hidden';
    };

    const closeArticle = () => {
      selectedArticle.value = null;
      document.body.style.overflow = 'auto';
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
      newsList, 
      videos, 
      selectedArticle,
      showScrollTop,
      extractYoutubeID, 
      openArticle,
      closeArticle,
      scrollToTop
    };
  },
};
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}



.animate-bounce {
  animation: bounce 2s infinite;
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

/* Prose styles */
.prose {
  line-height: 1.6;
}

.prose p {
  margin-bottom: 1rem;
}

.whitespace-pre-line {
  white-space: pre-line;
}
</style>