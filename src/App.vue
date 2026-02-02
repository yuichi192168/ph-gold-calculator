<template>
  <div id="app">
    <!-- Falling Gold Animation -->
    <div class="gold-particles">
      <div v-for="n in 30" :key="n" class="gold-particle" :style="getParticleStyle()">
        <img src="/gold-bar.png" alt="Gold Bar" class="gold-bar-icon" />
      </div>
    </div>
    
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/calculators">Calculators</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    getParticleStyle() {
      const left = Math.random() * 100
      const delay = Math.random() * 10
      const duration = 5 + Math.random() * 10
      const size = 20 + Math.random() * 30
      return {
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        width: `${size}px`,
        height: `${size * 0.6}px`
      }
    }
  }
}
</script>

<style>
:root {
  --primary-gold: #DDCA7D;
  --secondary-gold: #B88B4A;
  --dynamic-hue: 40;
}

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.gold-particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.gold-particle {
  position: absolute;
  top: -50px;
  animation: fall linear infinite;
  opacity: 0.9;
}

.gold-bar-icon {
  display: block;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 8px rgba(221, 202, 125, 0.8)) drop-shadow(0 0 15px rgba(184, 139, 74, 0.6));
}

@keyframes fall {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.9;
  }
  90% {
    opacity: 0.9;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}

#app::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(135deg, 
      hsla(var(--dynamic-hue), 55%, 35%, 0.95) 0%, 
      hsla(var(--dynamic-hue), 50%, 45%, 0.9) 50%, 
      var(--primary-gold, rgba(221, 202, 125, 0.85)) 100%),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect fill="%23A27035" width="100" height="100"/><circle fill="%23B88B4A" cx="50" cy="50" r="40" opacity="0.3"/><circle fill="%23DDCA7D" cx="25" cy="25" r="20" opacity="0.2"/><circle fill="%23A27035" cx="75" cy="75" r="30" opacity="0.25"/></svg>');
  background-size: cover, 100px 100px;
  background-position: center, center;
  background-attachment: fixed;
  z-index: -1;
  transition: background 0.5s ease;
}

nav {
  position: relative;
  z-index: 10;
  margin-bottom: 30px;
  background-color: var(--secondary-gold, #B88B4A);
  padding: 15px 30px;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  gap: 20px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 10;
}

nav a:hover {
  background-color: rgba(221, 202, 125, 0.3);
  color: var(--primary-gold, #DDCA7D);
}

nav a.router-link-exact-active {
  background-color: rgba(221, 202, 125, 0.4);
  color: var(--primary-gold, #DDCA7D);
}
</style>
