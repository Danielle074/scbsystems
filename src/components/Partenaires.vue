<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Hero Section -->
    <header 
      class="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
      style="background-image: url('images/partenaire.jpg');"
    >
      <div class="absolute inset-0 bg-black/40"></div>
      <h1 class="relative z-10 text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_5px_20px_rgba(0,0,0,0.6)] text-center px-4">
        Nos Partenaires
      </h1>
    </header>

    <!-- Carrousel Partenaires -->
    <section class="py-16 px-6 max-w-7xl mx-auto">
     

      <div 
        ref="carousel" 
        class="flex gap-6 overflow-x-hidden whitespace-nowrap relative"
        @mouseenter="pauseCarousel" 
        @mouseleave="resumeCarousel"
      >
        <div
          v-for="(partner, index) in partenairesConcat"
          :key="index"
          class="inline-flex flex-col items-center justify-center cursor-pointer bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 flex-shrink-0 transition-transform duration-500 hover:scale-105 hover:shadow-2xl min-w-[180px]"
          @click="goToPartner(partner.link)"
        >
          <img 
            :src="partner.logo" 
            :alt="partner.name" 
            class="w-32 h-32 object-contain mb-3 transition-transform duration-500 hover:-translate-y-1 hover:scale-105"
          />
          <h3 class="text-lg font-semibold text-gray-800 text-center">{{ partner.name }}</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partenaires: [
        { name: "Powered by AWS", logo: "images/l1.jpg", link: "https://aws.amazon.com/" },
        { name: "GW", logo: "images/l2.jpg", link: "https://www.gw.com/" },
        { name: "CHU Cocody", logo: "images/l3.jpg", link: "https://chu-cocody.ci/" },
        { name: "CORPS NSF", logo: "images/l4.jpg", link: "https://www.nsf.gov/" },
        { name: "MCENP", logo: "images/l5.jpg", link: "https://www.mcenp.com/" },
        { name: "Entrepreneuship", logo: "images/l6.jpg", link: "https://www.entrepreneuship.com/" },
        { name: "A-CI-USA", logo: "images/l7.jpg", link: "https://a-ci-usa.com/" },
        { name: "République de Guinée", logo: "images/l8.jpg", link: "https://www.guinee.gov.gn/" },
        { name: "SEED-SPOT", logo: "images/l10.jpg", link: "https://seedspot.org/" },
        { name: "MAEIAIE", logo: "images/l11.jpg", link: "https://www.maeiaie.com/" },
        { name: "SPECI", logo: "images/l12.jpg", link: "https://speci.com/" },
        { name: "FedEX", logo: "images/l13.jpg", link: "https://www.fedex.com/" },
        { name: "CI Tourisme", logo: "images/l14.jpg", link: "https://www.cotedivoiretourisme.com/" },
        { name: "INVEST-CI", logo: "images/l15.jpg", link: "https://invest-ci.com/" },
      ],
      isPaused: false,
      speed: 0.6,
    };
  },
  computed: {
    partenairesConcat() {
      return [...this.partenaires, ...this.partenaires];
    }
  },
  mounted() {
    this.startCarousel();
  },
  methods: {
    goToPartner(link) { if (link) window.open(link, "_blank"); },
    startCarousel() {
      const carousel = this.$refs.carousel;
      const step = () => {
        if (!this.isPaused) {
          carousel.scrollLeft += this.speed;
          if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
            carousel.scrollLeft = 0;
          }
        }
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    },
    pauseCarousel() { this.isPaused = true; },
    resumeCarousel() { this.isPaused = false; }
  }
};
</script>

<style scoped>
/* Masquer la scrollbar pour tous les navigateurs */
.flex::-webkit-scrollbar {
  display: none;
}
.flex {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
