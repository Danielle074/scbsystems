<template>
  <div class="test-page min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
      <h1 class="text-3xl font-bold text-blue-900 mb-4">Test Vue Router</h1>
      <p class="text-gray-600 mb-4">Si vous voyez cette page, le routeur fonctionne !</p>
      <div class="bg-green-100 text-green-800 p-4 rounded mb-4">
        ✅ Vue Router opérationnel
      </div>
      <RouterLink to="/" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Retour à l'accueil
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test'
}
</script>
