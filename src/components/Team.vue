<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    <div v-for="service in services" :key="service.title" class="relative group bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transition duration-300">
      <img :src="service.img" :alt="service.title" class="w-full h-56 object-cover">
      <div class="p-4"><h3 class="text-lg font-bold text-blue-800 mb-2">{{ service.title }}</h3></div>

      <div v-show="service.showOverlay" class="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex flex-col justify-center items-center text-white text-center px-8 transition duration-500 rounded-2xl">
        <h3 class="text-2xl font-bold mb-4">{{ service.title }}</h3>
        <ul class="list-disc text-left text-sm space-y-2">
          <li v-for="item in service.descList" :key="item">{{ item }}</li>
        </ul>
        <button class="mt-6 px-5 py-2 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-100 transition" @click.stop="service.showOverlay = false">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
       
      ]
    }
  },
  computed: {
    servicesWithDescList() {
      return this.services.map(s => ({
        ...s,
        descList: s.desc.split(/(?=\s[A-ZÉÈÊÀ])/)
      }))
    }
  },
  methods: {
    toggleOverlay(service) {
      service.showOverlay = !service.showOverlay
    }
  }
}
</script>
