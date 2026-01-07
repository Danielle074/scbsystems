<template>
  <div>
    <Header />
    <div class="min-h-screen bg-gray-100 pt-32 px-6">
      <h1 class="text-4xl font-bold text-blue-900 text-center mb-8">Tableau de Bord</h1>
      <p class="text-center text-gray-700">Contenu du tableau de bord à venir...</p>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'Dashboard',
  components: {
    Header
  }
}
</script>