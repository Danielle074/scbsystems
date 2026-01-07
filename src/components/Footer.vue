<template>
  <footer class="relative bg-blue-900 text-white pt-16 pb-8">
    <div class="absolute top-0 left-0 w-full overflow-hidden leading-none">
      <svg class="block w-full h-16" viewBox="0 0 1440 80" fill="none">
        <path fill="#3B82F6" d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,58.7C840,53,960,43,1080,37.3C1200,32,1320,32,1380,32L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
      </svg>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col md:flex-row md:justify-between items-center gap-8">
        <div class="flex flex-col items-center md:items-start">
          <img src="/images/footer-logo-removebg-preview.png" alt="SCB Logo" class="h-16 mb-4">
          <p class="text-gray-200 max-w-xs text-center md:text-left">
            SCB SYSTEMS, leader africain de l'ingénierie, de la technologie et de la gestion des connaissances.
          </p>
        </div>

        <div class="flex flex-col items-center md:items-end gap-2">
          <h4 class="font-bold text-lg mb-2">Liens rapides</h4>
          <ul class="flex flex-col gap-1">
            <li><RouterLink to="/" class="hover:text-blue-300 transition">Accueil</RouterLink></li>
            <li><RouterLink to="/a-propos" class="hover:text-blue-300 transition">À propos</RouterLink></li>
            <li><RouterLink to="/services" class="hover:text-blue-300 transition">Services</RouterLink></li>
            <li><RouterLink to="/contact" class="hover:text-blue-300 transition">Contact</RouterLink></li>
          </ul>
        </div>

        <div class="flex flex-col items-center gap-2">
          <h4 class="font-bold text-lg mb-2">Suivez-nous</h4>
          <div class="flex gap-4">
            <a href="https://www.linkedin.com/company/scb-systems/" target="_blank" class="text-2xl hover:text-blue-300 transition">
              <i class='bx bxl-linkedin'></i>
            </a>
            <a href="#" class="text-2xl hover:text-blue-300 transition">
              <i class='bx bxl-facebook'></i>
            </a>
            <a href="#" class="text-2xl hover:text-blue-300 transition">
              <i class='bx bxl-twitter'></i>
            </a>
            <a href="#" class="text-2xl hover:text-blue-300 transition">
              <i class='bx bxl-instagram'></i>
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-blue-700 mt-8 pt-4 text-center text-sm text-gray-400">
        &copy; 2025 SCB SYSTEMS. Tous droits réservés.
      </div>
    </div>
  </footer>
</template>

<script>
export default { 
  name: "Footer"
}
</script>