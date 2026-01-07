<template>
  <div id="app">
    <!-- Si layout activé, on rend Layout, sinon on rend directement la page -->
    <Layout v-if="$route.meta.layout !== false">
      <router-view />
    </Layout>

    <router-view v-else />
  </div>
</template>

<script>
import Layout from './components/Layout.vue'

export default {
  name: 'App',
  components: { Layout }
}
</script>


<style>
.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 30%, transparent 50%);
  z-index: 20;
  pointer-events: none;
}

nav {
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.4);
  transition: background-color 0.3s ease;
}

nav:hover {
  background-color: rgba(0, 0, 0, 0.6);
}

.nav-link {
  position: relative;
  transition: color 0.3s;
  cursor: pointer;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -4px;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #3B82F6 40%, #60A5FA 100%);
  border-radius: 2px;
  transition: width 0.3s;
}

.nav-link:hover {
  color: #3B82F6;
}

.nav-link:hover::after {
  width: 80%;
}

.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(0.5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-scroll {
  display: flex;
  width: max-content;
  animation: scroll 40s linear infinite;
}

.team-card {
  position: relative;
  overflow: hidden;
}

.team-card .desc {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.7);
  color: white;
  font-size: 12px;
  padding: 8px;
  opacity: 0;
  transition: opacity 0.3s;
}

.team-card:hover .desc {
  opacity: 1;
}
</style>