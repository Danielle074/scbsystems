<template>
  <section class="relative py-20 px-6 md:px-10 overflow-hidden">
    <!-- Effets décoratifs -->
    <div class="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-2xl animate-pulse"></div>
    <div class="absolute bottom-0 right-0 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>

    <!-- Titre et texte principal À propos -->
    <div class="max-w-3xl mx-auto text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-blue-900 mb-6 drop-shadow-lg animate-fade-in">À propos de SCB
        SYSTEMS</h2>
      <p class="text-lg md:text-xl text-gray-700 mb-4 animate-fade-in">
        SCB Systems accompagne tous les secteurs d'activité, du primaire au secondaire, en passant par le tertiaire et
        le quaternaire.<br>
        Nos solutions aident les entreprises à prendre des décisions durables pour assurer leur croissance dans cette
        ère technologique.<br>
        Notre expertise diversifiée nous permet d'être les meilleurs garants de votre réussite.
      </p>
    </div>

    <!-- Cartes en grille -->
    <div class="flex flex-col md:flex-row justify-center items-stretch gap-8 mt-2">
      <div
        class="bg-white rounded-xl shadow-lg p-6 w-full md:w-1/3 hover:scale-105 transition duration-300 flex flex-col items-center">
        <img :src="ttsImage" alt="" class="h-20 mb-4">
        <h3 class="text-xl font-semibold text-blue-800 mb-2">Le personnel technique</h3>
        <p class="text-gray-600 text-center">Que vous soyez en démarrage ou en restructuration, nous sommes là pour
          vous. Notre devise : analyser, identifier, conseiller, exécuter. Notre mission est de créer des relations,
          et non des transactions. Nous vous promettons d'être présents à chaque étape de votre projet, en cas de
          questions ou de problèmes.</p>
      </div>
      <div
        class="bg-white rounded-xl shadow-lg p-6 w-full md:w-1/3 hover:scale-105 transition duration-300 flex flex-col items-center">
        <img :src="oeImage" alt="" class="h-20 mb-4">
        <h3 class="text-xl font-semibold text-blue-800 mb-2">Notre expertise</h3>
        <p class="text-gray-600 text-center">Nous sommes un groupe de ressources en gestion d'ingénierie et en science
          des données, d'analystes, de défenseurs et de stratèges qui s'efforcent de partager notre expérience et nos
          connaissances pour vous aider à réussir votre entreprise.</p>
      </div>
    </div>
  </section>
    <!-- Footer -->
    <Footer />
</template>

<script>
import ttsImage from '/images/tts.png'
import oeImage from '/images/oe.png'

export default {
  name: 'About',
  data() {
    return {
      ttsImage: ttsImage,
      oeImage: oeImage
    }
  }
}
</script>