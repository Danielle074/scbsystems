<template>
  <div class="layout flex flex-col min-h-screen">
    <!-- Barre de navigation-->
    <nav
      class="fixed top-0 left-0 w-full px-3 sm:px-4 md:px-6 h-10 flex justify-between items-center bg-blue-900/80 text-white text-xs sm:text-sm backdrop-blur-md z-50"
    >
      <ul class="hidden md:flex space-x-4 lg:space-x-6 font-medium">
        <li>
          <RouterLink to="/partenaires" class="hover:text-blue-300 transition">
            Nos partenaires
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/actualite" class="hover:text-blue-300 transition">
            Actualités
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/nous-rejoindre" class="hover:text-blue-300 transition">
            Nous rejoindre
          </RouterLink>
        </li>
      </ul>

      <button
        class="md:hidden p-1 rounded-md hover:bg-blue-700 transition"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <i class="bx bx-menu text-lg"></i>
      </button>

      <div class="relative group ml-1 sm:ml-2 md:ml-0">
        <button
          @click="toggleLangMenu"
          class="flex items-center gap-1 px-2 py-1 rounded-full bg-blue-700 hover:bg-blue-600 transition text-xs"
        >
          <i class="bx bx-globe text-xs"></i>
          <span class="hidden xs:inline">{{ currentLang }}</span>
          <i class="bx bx-chevron-down text-xs"></i>
        </button>

        <div
          :class="[
            'absolute right-0 mt-1 w-24 sm:w-28 md:w-32 bg-white text-blue-900 rounded shadow-lg transition z-50 text-xs sm:text-sm',
            langMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none',
          ]"
        >
          <a href="#" @click.prevent="setLang('fr')" class="block px-3 py-1 sm:px-4 sm:py-2 hover:bg-blue-100">
            Français
          </a>
          <a href="#" @click.prevent="setLang('en')" class="block px-3 py-1 sm:px-4 sm:py-2 hover:bg-blue-100">
            English
          </a>
        </div>
      </div>
    </nav>

    <!-- Navbar principale -->
    <nav
      class="fixed top-10 left-0 w-full h-14 sm:h-16 px-3 sm:px-4 md:px-6 flex justify-between items-center bg-black/5 backdrop-blur-sm z-40"
    >
      <!-- LOGO -->
      <RouterLink to="/" class="flex items-center z-40">
        <img
          :src="afterHero
            ? '/images/logo.png'
            : '/images/footer-logo-removebg-preview.png'"
          class="h-8 sm:h-9 md:h-10 transition-all"
          alt="SCB Logo"
        />
      </RouterLink>

      <!-- LIENS -->
      <ul
        class="hidden md:flex space-x-4 lg:space-x-6 font-medium"
        :class="afterHero ? 'text-gray-800' : 'text-white'"
      >
        <li>
          <RouterLink
            to="/"
            class="btn px-3 py-1.5 rounded-full transition text-xs sm:text-sm shadow-lg"
            :class="afterHero ? 'btn-light' : 'text-white'"
            active-class="btn-active"
          >
            Accueil
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/a-propos"
            class="nav-link text-xs sm:text-sm relative"
            :class="afterHero ? 'text-gray-800' : 'text-white'"
            active-class="nav-active"
          >
            À propos
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/services"
            class="nav-link text-xs sm:text-sm relative"
            :class="afterHero ? 'text-gray-800' : 'text-white'"
            active-class="nav-active"
          >
            Services
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/contact"
            class="nav-link text-xs sm:text-sm relative"
            :class="afterHero ? 'text-gray-800' : 'text-white'"
            active-class="nav-active"
          >
            Contactez-nous
          </RouterLink>
        </li>
      </ul>
    </nav>

    <!-- Contenu principal -->
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
    const mainMobileMenuOpen = ref(false);
    const afterHero = ref(false);

    const toggleLangMenu = () => {
      langMenuOpen.value = !langMenuOpen.value;
    };

    const setLang = (lang) => {
      currentLang.value = lang === "fr" ? "Français" : "English";
      langMenuOpen.value = false;
    };

    const handleScroll = () => {
      afterHero.value = window.scrollY > 120; // hauteur du hero
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      langMenuOpen,
      toggleLangMenu,
      currentLang,
      setLang,
      mobileMenuOpen,
      mainMobileMenuOpen,
      afterHero,
    };
  },
};
</script>
<style scoped>
.nav-link {
  position: relative;
  transition: color 0.3s;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -4px;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  transition: width 0.3s;
}

.nav-active {
  color: #3b82f6;
}

.nav-active::after {
  width: 80%;
}

.btn-active {
  background-color: #2563eb;
}

.btn-light {
  background-color: #2563eb;
  color: white;
}

</style>