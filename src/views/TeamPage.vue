<template>
  <section class="px-6 py-12 pt-32 bg-gray-50 min-h-screen">
    <h2 class="text-4xl md:text-5xl font-extrabold text-blue-900 text-center mt-5">
      Nos Équipes
    </h2>

    <!-- Cartes des régions -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-14">
      <div
        v-for="region in regions"
        :key="region.name"
        class="bg-white rounded-xl shadow-md hover:scale-105 transition cursor-pointer p-6 flex flex-col items-center text-center"
        @click="goToRegion(region.name)"
      >
        <iframe
          :src="region.map"
          width="100%"
          height="200"
          style="border:0;"
          allowfullscreen
          loading="lazy"
          class="rounded-lg mb-4"
        ></iframe>

        <h3 class="text-lg font-bold text-gray-900">{{ region.name }}</h3>
        <p class="text-gray-600">{{ region.desc }}</p>
      </div>
    </div>

    <!-- Section équipe affichée après clic -->
    <div v-if="selectedRegion" ref="teamSection" class="mt-16">
      <h3 class="text-3xl font-bold text-blue-800 text-center mb-8">
        Équipe SCB SYSTEMS {{ selectedRegion }}
      </h3>
      <p class="text-center text-gray-700 mb-12">
        Découvrez tous les membres de notre équipe {{ selectedRegion }}.
      </p>

      <transition-group
        name="slide-up"
        tag="div"
        class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        <div
          v-for="member in teams[selectedRegion]"
          :key="member.name"
          class="bg-white rounded-xl shadow-md cursor-pointer hover:scale-105 transition flex flex-col items-center text-center p-6"
        >
          <img
            :src="member.img"
            class="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mb-3"
          />
          <h3 class="font-bold text-gray-900 text-lg">{{ member.name }}</h3>
          <p class="text-blue-600 text-sm">{{ member.role }}</p>
          <p class="text-gray-700 text-sm mt-1">{{ member.desc }}</p>
          <div class="mt-2 text-sm space-y-1">
            <p><strong>Email:</strong> {{ member.mail }}</p>
            <p><strong>Téléphone:</strong> {{ member.phone }}</p>
            <a
              :href="member.link"
              target="_blank"
              class="text-blue-500 underline"
              >LinkedIn</a
            >
          </div>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, nextTick } from "vue";

const selectedRegion = ref(null);
const teamSection = ref(null);

const regions = [
  {
    name: "Côte d'Ivoire",
    map: "https://www.google.com/maps?q=Riviera+Palmeraie,+Abidjan,+Côte+d'Ivoire&output=embed",
    desc: "Notre équipe basée à la Riviera Palmeraie, Abidjan."
  },
  {
    name: "USA",
    map: "https://www.google.com/maps?q=Washington,+USA&output=embed",
    desc: "Notre équipe basée à Washington DC."
  },
  {
    name: "France",
    map: "https://www.google.com/maps?q=Paris,+France&output=embed",
    desc: "Notre équipe basée à Paris."
  }
];

const teams = reactive({
  "Côte d'Ivoire": [
    { 
      name: "Siriki Fofana", 
      role: "Chef de Projet", 
      desc: "Expert en développement web et mobile.", 
      img: "/images/Fofana.jpg", 
      mail: "fofana@scbsystems.com", 
      phone: "+225050000001", 
      link: "https://linkedin.com/in/fofana" 
    },
    { 
      name: "Kouamé Thibaut", 
      role: "Développeur Mobile", 
      desc: "Expert en apps mobiles.", 
      img: "/images/Thibaut.jpg", 
      mail: "kouame@scbsystems.com", 
      phone: "+225050000001", 
      link: "https://www.linkedin.com/in/kouame-thibaut-34b8b4232/" 
    },
    { 
      name: "Danielle Achi", 
      role: "Développeuse Front-End", 
      desc: "Développe l'interface web.", 
      img: "/images/Danielle.jpg", 
      mail: "danielle@scbsystems.com", 
      phone: "+225050000001", 
      link: "https://www.linkedin.com/in/danielle-achi-869229311/" 
    },
    { 
      name: "Elsa Zougouri", 
      role: "Développeuse Full-Stack", 
      desc: "Backend et frontend.", 
      img: "/images/Elsa .jpg", 
      mail: "elsa@scbsystems.com", 
      phone: "+225050000001", 
      link: "https://www.linkedin.com/in/elsa-zougouri-301743167/" 
    },
    { 
      name: "Bayala Adam", 
      role: "Graphiste", 
      desc: "Identité visuelle.", 
      img: "/images/Adam.jpg", 
      mail: "adam@scbsystems.com", 
      phone: "+225050000001", 
      link: "https://www.linkedin.com/in/bayala-kalice-adam-a35328223/" 
    },
  ],
  "USA": [

    { 
      name: "Abdul Sako", 
      role: "CEO de SCB SYSTEMS USA", 
      desc: "Président de scb systems usa.", 
      img: "/images/Abdul.png", 
      mail: "abdul@scbsystems.com", 
      phone: "+1-202-555-0101", 
      link: "https://linkedin.com/in/awa" 
      
    },
    { 
      name: "Awa Sylla", 
      role: "Directrice juridique", 
      desc: "Spécialiste droit international.", 
      img: "/images/t3.jpg", 
      mail: "awa@scbsystems.com", 
      phone: "+1-202-555-0101", 
      link: "https://linkedin.com/in/awa" 

    },
  
   
  ],
  "France": [
    { 
      name: "Franck Harding", 
      role: "Directeur Général", 
      desc: "Visionnaire et stratège.", 
      img: "/images/t1.jpg", 
      mail: "franck@scbsystems.com", 
      phone: "+33 1 45 00 00 01", 
      link: "https://linkedin.com/in/Franck" 
    },
    { 
      name: "Fanta Kamissoko", 
      role: "Chef d'exploitation", 
      desc: "Expert exploitation systèmes.", 
      img: "/images/t2.jpg", 
      mail: "fanta@scbsystems.com", 
      phone: "+33 1 45 00 00 02", 
      link: "https://linkedin.com/in/fanta" 
    },
   
   
  ]
});

const goToRegion = (regionName) => {
  selectedRegion.value = regionName;
  nextTick(() => {
    if (teamSection.value) {
      teamSection.value.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
};
</script>

<style scoped>
/* Animation qui monte */
.slide-up-enter-active {
  transition: all 0.6s ease-out;
}
.slide-up-leave-active {
  transition: all 0.4s ease-in;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(80px) scale(0.9);
}
.slide-up-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.slide-up-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(80px) scale(0.9);
}
</style>