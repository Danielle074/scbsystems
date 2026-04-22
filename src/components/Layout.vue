<template>
  <div class="layout flex flex-col min-h-screen font-sans">
    <!-- Barre supérieure (partenaires, actualités, rejoindre) -->
    <div
      :class="[
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        afterHero 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' 
          : 'bg-black/50 backdrop-blur-sm'
      ]"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div class="flex justify-end items-center h-10">
          <ul class="flex space-x-4 sm:space-x-6 text-xs uppercase tracking-wider font-medium">
            <li>
              <RouterLink 
                to="/actualite" 
                class="top-nav-link text-gray-300 hover:text-white transition-colors"
              >
                Actualités
              </RouterLink>
            </li>
            <li>
              <RouterLink 
                to="/nous-rejoindre" 
                class="top-nav-link text-gray-300 hover:text-white transition-colors"
              >
                Nous rejoindre
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Navigation principale -->
    <nav
      :class="[
        'fixed top-10 left-0 w-full z-40 transition-all duration-500 px-4 sm:px-6 md:px-8',
        afterHero 
          ? 'py-3 bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100' 
          : 'py-4 sm:py-5 md:py-6 bg-transparent'
      ]"
    >
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <!-- LOGO -->
        <RouterLink to="/" class="flex items-center transition-transform hover:scale-105 flex-shrink-0">
          <img
            :src="afterHero ? '/images/logo.png' : '/images/loogoblanc.png'"
            class="h-10 sm:h-14 md:h-20 w-auto object-contain transition-all duration-500"
            alt="SCB Logo"
          />
        </RouterLink>

        <!-- Menu desktop -->
        <div class="hidden lg:flex items-center gap-6 xl:gap-8">
          <ul :class="['flex items-center space-x-6 xl:space-x-8 font-semibold text-sm xl:text-base', afterHero ? 'text-gray-800' : 'text-white']">
            <li>
              <RouterLink 
                to="/" 
                class="nav-link flex items-center gap-2"
              >
                <i class='bx bx-home-alt-2 text-xl'></i>
                <span>Accueil</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink 
                to="/a-propos" 
                class="nav-link flex items-center gap-2"
              >
                <i class='bx bx-info-circle text-xl'></i>
                <span>À propos</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink 
                to="/services" 
                class="nav-link flex items-center gap-2"
              >
                <i class='bx bx-grid-alt text-xl'></i>
                <span>Services</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink 
                to="/projet" 
                class="nav-link flex items-center gap-2"
              >
                <!-- Icône changée -->
                <i class='bx bx-briefcase-alt-2 text-xl'></i>
                <span>Projets</span>
              </RouterLink>
            </li>
          </ul>

          <!-- Bouton Contact avec effet -->
          <RouterLink 
            to="/contact" 
            class="text-white px-5 py-2 rounded-full shadow-lg transition-all flex items-center gap-2 transform hover:-translate-y-1 hover:shadow-xl whitespace-nowrap"
            style="background-color: #101E89;"
          >
            <i class='bx bx-envelope text-lg'></i>
            <span class="font-semibold text-sm">Contact</span>
          </RouterLink>

          <!-- Sélecteur de langue -->
          <div class="relative">
            <button 
              @click="toggleLangMenu" 
              :class="[
                'flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-sm font-medium whitespace-nowrap',
                afterHero 
                  ? 'border border-gray-300 hover:bg-gray-100 text-gray-700' 
                  : 'border border-white/30 hover:bg-white/20 text-white'
              ]"
            >
              <i class="bx bx-globe text-lg"></i>
              <span class="hidden sm:inline">{{ currentLang }}</span>
              <i class="bx bx-chevron-down text-base"></i>
            </button>
            
            <div 
              v-if="langMenuOpen" 
              class="absolute right-0 mt-2 w-36 bg-white text-gray-800 rounded-xl shadow-2xl overflow-hidden py-2 animate-fade-in-down z-50"
            >
              <button @click="setLang('fr')" class="w-full text-left px-4 py-2.5 transition flex items-center gap-2 hover:bg-gray-50">
                <span class="text-lg">🇫🇷</span>
                <span>Français</span>
              </button>
              <button @click="setLang('en')" class="w-full text-left px-4 py-2.5 transition flex items-center gap-2 hover:bg-gray-50">
                <span class="text-lg">🇬🇧</span>
                <span>English</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Bouton menu mobile -->
        <button 
          class="lg:hidden text-3xl p-2 rounded-lg transition-colors flex-shrink-0" 
          :class="afterHero ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/20'" 
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <i :class="mobileMenuOpen ? 'bx bx-x' : 'bx bx-menu-alt-right'"></i>
        </button>
      </div>

      <!-- Menu mobile -->
      <transition name="slide">
        <div v-if="mobileMenuOpen" class="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl flex flex-col p-5 space-y-3 text-gray-800 font-semibold border-t z-50 max-h-[80vh] overflow-y-auto">
          <RouterLink to="/" class="flex items-center gap-3 p-3 rounded-lg transition hover:bg-gray-50" @click="mobileMenuOpen = false">
            <i class='bx bx-home-alt-2 text-xl' style="color: #101E89;"></i>
            <span>Accueil</span>
          </RouterLink>
          <RouterLink to="/a-propos" class="flex items-center gap-3 p-3 rounded-lg transition hover:bg-gray-50" @click="mobileMenuOpen = false">
            <i class='bx bx-info-circle text-xl' style="color: #101E89;"></i>
            <span>À propos</span>
          </RouterLink>
          <RouterLink to="/services" class="flex items-center gap-3 p-3 rounded-lg transition hover:bg-gray-50" @click="mobileMenuOpen = false">
            <i class='bx bx-grid-alt text-xl' style="color: #101E89;"></i>
            <span>Services</span>
          </RouterLink>
          <RouterLink to="/projet" class="flex items-center gap-3 p-3 rounded-lg transition hover:bg-gray-50" @click="mobileMenuOpen = false">
            <i class='bx bx-briefcase-alt-2 text-xl' style="color: #101E89;"></i>
            <span>Projets</span>
          </RouterLink>
          <RouterLink to="/contact" class="flex items-center gap-3 p-3 rounded-lg text-white transition" style="background-color: #101E89;" @click="mobileMenuOpen = false">
            <i class='bx bx-envelope text-xl'></i>
            <span>Contact</span>
          </RouterLink>
          <div class="border-t pt-3 mt-2">
            <RouterLink to="/actualite" class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition text-gray-600" @click="mobileMenuOpen = false">
              <span>📰</span>
              <span>Actualités</span>
            </RouterLink>
            <RouterLink to="/nous-rejoindre" class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition text-gray-600" @click="mobileMenuOpen = false">
              <span>💼</span>
              <span>Nous rejoindre</span>
            </RouterLink>
          </div>
        </div>
      </transition>
    </nav>

    <!-- Contenu principal avec padding pour la navigation fixe -->
    <main class="flex-1">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import Footer from "./Footer.vue";

export default {
  name: "Layout",
  components: { Footer },
  setup() {
    const langMenuOpen = ref(false);
    const currentLang = ref("Français");
    const mobileMenuOpen = ref(false);
    const afterHero = ref(false);

    const toggleLangMenu = () => {
      langMenuOpen.value = !langMenuOpen.value;
    };

    const setLang = (lang) => {
      currentLang.value = lang === "fr" ? "Français" : "English";
      langMenuOpen.value = false;
    };

    const handleScroll = () => {
      afterHero.value = window.scrollY > 100;
    };

    // Fermer le menu mobile au resize
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        mobileMenuOpen.value = false;
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    });

    return {
      langMenuOpen,
      toggleLangMenu,
      currentLang,
      setLang,
      mobileMenuOpen,
      afterHero,
    };
  },
};
</script>

<style scoped>
/* Styles des liens de la barre supérieure - sans underline */
.top-nav-link {
  transition: color 0.3s ease;
}

/* Styles des liens principaux - sans underline */
.nav-link {
  transition: all 0.3s ease;
}

/* Animation pour le menu déroulant */
.animate-fade-in-down {
  animation: fadeInDown 0.2s ease-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Transition menu mobile */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

/* Responsive adjustments - CORRECTION DU DÉCALAGE */
@media (max-width: 1024px) {
  main {
    padding-top: 7rem;
  }
}

@media (max-width: 768px) {
  main {
    padding-top: 6.5rem;
  }
}

@media (max-width: 640px) {
  main {
    padding-top: 6rem;
  }
}

/* Amélioration du hover sur les boutons */
button, 
a {
  cursor: pointer;
}

/* Style des icônes */
.bx {
  vertical-align: middle;
}
</style>