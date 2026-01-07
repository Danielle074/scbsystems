<template>
  <div class="relative group bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transition duration-300"
       @click="showOverlay = true">
    <!-- Image du service -->
    <img :src="img" :alt="title" class="w-full h-56 object-cover">

    <!-- Titre -->
    <div class="p-4">
      <h3 class="text-lg font-bold text-blue-800 mb-2">{{ title }}</h3>
    </div>

    <!-- Overlay description -->
    <div v-show="showOverlay" class="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex flex-col justify-center items-center text-white text-center px-8 transition duration-500 rounded-2xl">
      <h3 class="text-2xl font-bold mb-4">{{ title }}</h3>
      <ul class="list-disc text-left text-sm space-y-2">
        <li v-for="(item, index) in descList" :key="index">{{ item }}</li>
      </ul>
      <button class="mt-6 px-5 py-2 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-100 transition"
              @click.stop="showOverlay = false">
        Fermer
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    title: { type: String, required: true },
    img: { type: String, required: true },
    desc: { type: String, required: true }
  },
  data() {
    return {
      showOverlay: false
    }
  },
  computed: {
    descList() {
      // Sépare la description en phrases ou points pour lister
      return this.desc.split(/(?=\s[A-ZÉÈÊÀ])/)
    }
  }
}
</script>
