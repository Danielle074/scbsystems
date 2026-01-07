<template>
  <header class="header-container relative h-screen overflow-hidden">
    
    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" 
         alt="Header background" class="absolute top-0 left-0 w-full h-full object-cover filter brightness-75"/>

    <div class="header-content text-center md:text-left relative z-10">
      <h1 class="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
        Nos<br>Services
      </h1>

      <p class="text-white text-lg md:text-xl leading-relaxed mt-6 mb-4" style="text-shadow: 0 4px 18px rgba(0,0,0,0.35);">
        Nous couvrons divers secteurs d'activité :<br>
        <span class="font-semibold text-blue-200">{{ typedText }}<span class="blinking-cursor">|</span></span>
      </p>

      <div v-show="extraVisible" class="transition duration-1000 text-white text-lg md:text-xl leading-relaxed">
        À chaque phase de leur cycle de vie,<br>
        nous proposons des <span class="text-blue-300 font-bold">outils d'innovation</span>,<br>
        de <span class="text-green-300 font-bold">gestion des risques</span> et de
        <span class="text-purple-300 font-bold">prise de décision sur mesure</span>,<br>
        pour <span class="underline decoration-blue-400">améliorer l'efficacité</span> et
        <span class="underline decoration-green-400">augmenter les bénéfices</span> —<br>
        <span class="italic text-blue-100">le tout livré par notre équipe spécialisée dans votre langue préférée.</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      sectors: [
        "sciences de la vie",
        "technologies de l'information",
        "gestion des risques",
        "gestion des connaissances",
        "gouvernance numérique",
        "gestion de l'ingénierie",
        "services par drone"
      ],
      typedText: "",
      extraVisible: false,
      i: 0,
      j: 0,
      deleting: false
    }
  },
  mounted() { this.typeEffect() },
  methods: {
    typeEffect() {
      if (this.i < this.sectors.length) {
        if (!this.deleting && this.j <= this.sectors[this.i].length) {
          this.typedText = this.sectors[this.i].substring(0, this.j++);
        } else if (this.deleting && this.j >= 0) {
          this.typedText = this.sectors[this.i].substring(0, this.j--);
        }

        if (this.j === this.sectors[this.i].length + 1) {
          this.deleting = true;
          setTimeout(this.typeEffect, 1500);
          return;
        } else if (this.j === -1) {
          this.deleting = false;
          this.i++;
        }

        setTimeout(this.typeEffect, this.deleting ? 60 : 120);
      } else {
        this.extraVisible = true;
      }
    }
  }
}
</script>

<style>
.animate-gradient { background-size: 300%; animation: gradientMove 6s ease infinite; }
@keyframes gradientMove { 0% { background-position:0% 50%; } 50% { background-position:100% 50%; } 100% { background-position:0% 50%; } }
.blinking-cursor { display:inline-block; margin-left:5px; animation: blink 1s infinite; }
@keyframes blink { 0%,50% { opacity:1 } 51%,100% { opacity:0 } }
</style>
