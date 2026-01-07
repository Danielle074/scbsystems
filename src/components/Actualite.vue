<template>
  <div class="min-h-screen relative">
    <!-- Header et contenu existants -->
    <header
      class="relative h-[85vh] flex flex-col items-center justify-center text-center text-white"
      style="
        background-image: url('/images/Actualites.jpg');
        background-size: cover;
        background-position: center;
      "
    >
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative z-10 px-6">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Actualités
        </h1>
        <p class="max-w-2xl mx-auto text-lg md:text-xl">
          Chez SCB Systems, nous partageons nos dernières innovations
          technologiques, projets et événements pour rester connectés avec nos
          clients et partenaires.
        </p>
      </div>
    </header>

    <!-- Grille des actualités -->
    <section class="container mx-auto px-6 py-16">
      <h2 class="text-5xl font-bold text-blue-900 mb-8 text-center">
        Dernières Actualités
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="(news, index) in newsList"
          :key="index"
          class="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
        >
          <img
            :src="news.image"
            alt="Actu image"
            class="h-64 w-full object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-blue-800 mb-2">
              {{ news.title }}
            </h3>
            <p class="text-gray-500 text-sm mb-3">{{ news.date }}</p>
            <p class="text-gray-700 mb-4 line-clamp-3">
              {{ news.description }}
            </p>
            <button
              @click="openArticle(news)"
              class="text-blue-600 hover:underline font-medium"
            >
              Lire plus →
            </button>
          </div>
        </article>
      </div>
    </section>

    <!-- Grille des vidéos -->
    <section class="container mx-auto px-6 py-16 bg-gray-100 rounded-2xl">
      <h2 class="text-5xl font-bold text-blue-900 mb-8 text-center">
        Nos Vidéos
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(video, index) in videos"
          :key="index"
          class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
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
            <h3 class="font-semibold text-lg text-blue-800">
              {{ video.title }}
            </h3>
            <p class="text-gray-600 text-sm mt-1">{{ video.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal pour lire l'article -->
    <div v-if="selectedArticle" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div class="relative">
          <button 
            @click="closeArticle"
            class="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <img 
            :src="selectedArticle.image" 
            :alt="selectedArticle.title"
            class="w-full h-64 object-cover"
          />
        </div>
        <div class="p-8">
          <h2 class="text-3xl font-bold text-blue-900 mb-4">{{ selectedArticle.title }}</h2>
          <p class="text-gray-500 mb-6">{{ selectedArticle.date }}</p>
          <div class="prose max-w-none">
            <p class="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
              {{ selectedArticle.fullContent }}
            </p>
            
            <!-- Vidéos associées à l'article -->
            <div v-if="selectedArticle.relatedVideos && selectedArticle.relatedVideos.length" class="mt-8">
              <h3 class="text-2xl font-semibold text-blue-800 mb-4">Vidéos associées</h3>
              <div class="grid md:grid-cols-2 gap-6">
                <div
                  v-for="(video, index) in selectedArticle.relatedVideos"
                  :key="index"
                  class="bg-gray-50 rounded-xl overflow-hidden"
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
                    <h4 class="font-semibold text-blue-800">{{ video.title }}</h4>
                    <p class="text-gray-600 text-sm mt-1">{{ video.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Flash info en bas -->
    <div class="fixed bottom-0 left-0 w-full bg-blue-700 text-white py-2 overflow-hidden z-40">
      <div class="inline-block whitespace-nowrap animate-marquee px-4">
        Bientôt votre site de drone SCB Fly sera disponible — Restez à l'écoute !
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "Actualites",
  setup() {
    const newsList = [
      {
        id: 1,
        title: "Lancement de SCB Drone - Innovation Technologique",
        date: "20 septembre 2025",
        description: "Découvrez nos drones Performants.",
        image: "/images/scb dr 2.png",
        fullContent: `SCB Systems est fier d'annoncer le lancement de SCB Drone, une plateforme révolutionnaire dédiée aux solutions drones innovantes. Cette technologie de pointe transformera les secteurs de l'agriculture, de la construction et de la surveillance.

Nos drones équipés de capteurs avancés permettent :
- L'analyse des cultures en temps réel
- La cartographie topographique précise
- La surveillance d'infrastructures
- L'inspection de sites industriels

Cette innovation s'inscrit dans notre vision d'apporter des solutions technologiques adaptées aux besoins locaux et internationaux.`,
        relatedVideos: [
          {
            url: "https://www.youtube.com/watch?v=YRnm7r8Z9aE",
            title: "SCB Drone - Démonstration",
            description: "Vidéo de démonstration de nos drones innovants"
          },
          {
            url: "https://www.youtube.com/watch?v=Bk1pQyfQQ_c",
            title: "Drones en Agriculture",
            description: "Comment les drones révolutionnent l'agriculture moderne"
          }
        ]
      },
      {
        id: 2,
        title: " Intelligence Artificielle",
        date: "10 septembre 2025",
        description: " Nos capacités en IA et machine learning.",
        image: "/images/Affaires.jpg",
        fullContent: `SCB Systems a le plaisir d'annoncer une stratégique majeur avec une organisation internationale leader dans le domaine de l'intelligence artificielle, nous permettra de renforcer significativement nos capacités en machine learning et analyse de données.

Les bénéfices de ce partenariat incluent :
- Développement d'algorithmes IA avancés
- Solutions d'analyse prédictive améliorées
- Formation de nos équipes aux dernières technologies
- Accès à des ressources de recherche de pointe

Ce partenariat positionne SCB Systems comme un acteur majeur dans le domaine de l'IA en Afrique et au-delà.`,
        relatedVideos: [
          {
            url: "https://www.youtube.com/watch?v=QJn28fFKUR0",
            title: "IA et Machine Learning",
            description: "Les bases de l'intelligence artificielle expliquées"
          },
          {
            url: "https://www.youtube.com/watch?v=JMUxmLyrhSk",
            title: "L'IA dans les Affaires",
            description: "Comment l'IA transforme les entreprises modernes"
          }
        ]
      },
      {
        id: 3,
        title: " Tech Innovation ",
        date: "5 août 2025",
        description: "La technologie avance.",
        image: "/images/Events.jpg",
        fullContent: ` SCB Systems a connu un succès retentissant avec la participation de plus de 500 professionnels du secteur technologique.

Points marquants de :
- Présentation de SCB Academy
- Démo live de SCB Drone
- Tables rondes sur l'IA et la blockchain
- Ateliers de formation technique
- Networking avec des experts internationaux

Cet événement renforce notre engagement à promouvoir l'innovation technologique en Afrique et dans le monde.`,
        relatedVideos: [
          {
            url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
            title: "Tech Summit 2025 - Highlights",
            description: "Les meilleurs moments de notre événement annuel"
          },
          {
            url: "https://www.youtube.com/watch?v=7-QIyRKyFEg",
            title: "Innovations Technologiques",
            description: "Les tendances technologiques de 2025"
          }
        ]
      },
    ];

    const videos = [
     
      {
        url: "https://www.youtube.com/watch?v=QJn28fFKUR0",
        title: "Blockchain : Comprendre la technologie",
        description: "Une explication simple de la technologie blockchain."
      },
      {
        url: "https://www.youtube.com/watch?v=mxT233EdY5c",
        title: "Introduction au Cloud Computing",
        description: "Les bases du cloud computing expliquées simplement."
      },
      {
        url: "https://www.youtube.com/watch?v=7-QIyRKyFEg",
        title: "L'IA N°1 Mondiale pour les Vidéos",
        description: "Découvrez la nouvelle génération d'IA pour la création de vidéos."
      },
      {
        url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
        title: "Technologies de Réalité Augmentée",
        description: "Découvrez comment la réalité augmentée transforme le digital."
      },
      
      
   
    ];

    const selectedArticle = ref(null);

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

    return { 
      newsList, 
      videos, 
      selectedArticle,
      extractYoutubeID, 
      openArticle,
      closeArticle
    };
  },
};
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Animation du flash info */
@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

.animate-marquee {
  display: inline-block;
  padding-right: 100%;
  animation: marquee 30s linear infinite;
  font-weight: bold;
  font-size: 1rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

/* Styles pour le modal */
.prose {
  line-height: 1.6;
}

.prose p {
  margin-bottom: 1rem;
}

.prose ul {
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.whitespace-pre-line {
  white-space: pre-line;
}
</style>