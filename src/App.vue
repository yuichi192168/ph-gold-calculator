<template>
  <div id="app">
    <!-- Falling Gold Animation -->
    <div class="gold-particles">
      <div v-for="n in 30" :key="n" class="gold-particle" :style="getParticleStyle()">
        <img src="/gold-bar.png" alt="Gold Bar" class="gold-bar-icon" />
      </div>
    </div>
    
    <header class="navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <router-link to="/" class="brand-link">
            <img src="/gold-bar.png" alt="Gold Calculator" class="brand-icon" />
            <span class="brand-text">Gold Calculator</span>
          </router-link>
        </div>
        <nav class="nav-menu" :class="{ 'mobile-open': mobileMenuOpen }">
          <router-link to="/" class="nav-link">
            <span>Home</span>
          </router-link>
          <router-link to="/calculators" class="nav-link">
            <span>Calculators</span>
          </router-link>
          <router-link to="/login" class="nav-link">
            <span>Login</span>
          </router-link>
          <router-link to="/register" class="nav-link">
            <span>Register</span>
          </router-link>
        </nav>
        <button class="mobile-menu-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
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
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
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

/* Modern Navbar Styles */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.nav-brand .brand-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--primary-gold, #DDCA7D);
  font-weight: bold;
  font-size: 24px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.nav-brand .brand-icon {
  width: 40px;
  height: 24px;
  margin-right: 12px;
  filter: drop-shadow(0 0 8px rgba(221, 202, 125, 0.8));
}

.nav-brand .brand-text {
  color: var(--primary-gold, #DDCA7D);
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  font-size: 16px;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(221, 202, 125, 0.2), rgba(184, 139, 74, 0.2));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nav-link:hover::before {
  opacity: 1;
}

.nav-link:hover {
  color: var(--primary-gold, #DDCA7D);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(162, 112, 53, 0.3);
}

.nav-link.router-link-exact-active {
  background: linear-gradient(135deg, rgba(221, 202, 125, 0.3), rgba(184, 139, 74, 0.2));
  color: var(--primary-gold, #DDCA7D);
  box-shadow: 0 4px 15px rgba(162, 112, 53, 0.2);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--primary-gold, #DDCA7D);
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Add padding to main content to account for fixed navbar */
#app {
  padding-top: 70px;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    flex-direction: column;
    padding: 20px;
    gap: 10px;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav-menu.mobile-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    width: 100%;
    justify-content: center;
    padding: 15px 20px;
  }
}
</style>
