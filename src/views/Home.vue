<template>
  <div class="home">
    <div class="home-box">
      <h1>Welcome to Plantado Gold Rate Calculator</h1>
      <p>Your trusted tool for calculating gold prices in the Philippines.</p>
      <div class="features">
        <div class="feature">
          <img src="/gold-bar.png" alt="Gold Rates" class="feature-icon" />
          <span>Philippines Gold Rates</span>
        </div>
        <div class="feature">
          <img src="/gold-bar.png" alt="Karat Options" class="feature-icon" />
          <span>Multiple Karat Options</span>
        </div>
        <div class="feature">
          <img src="/gold-bar.png" alt="Calculations" class="feature-icon" />
          <span>Accurate Calculations</span>
        </div>
      </div>
      <router-link to="/register" class="btn">Get Started</router-link>
      <p class="login-link">Already have an account? <router-link to="/login">Login here</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 150px);
}

.home-box {
  max-width: 600px;
  margin: 0 auto;
  padding: 50px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  text-align: center;
}

h1 {
  color: #A27035;
  font-size: 2em;
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
}

p {
  font-size: 1.2em;
  margin-bottom: 30px;
  color: #A27035;
  font-weight: 500;
}

.features {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #A27035;
  font-weight: 500;
}

.feature-icon {
  width: 60px;
  height: 36px;
  filter: drop-shadow(0 0 8px rgba(221, 202, 125, 0.6));
  transition: transform 0.3s ease;
}

.feature:hover .feature-icon {
  transform: scale(1.1);
}

.btn {
  background: #B88B4A;
  color: white;
  padding: 15px 40px;
  text-decoration: none;
  border-radius: 10px;
  font-weight: bold;
  display: inline-block;
  border: 2px solid #DDCA7D;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #DDCA7D;
  color: #A27035;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(221, 202, 125, 0.5);
}

.login-link {
  margin-top: 25px;
  font-size: 1em;
}

.login-link a {
  color: #A27035;
  text-decoration: none;
  font-weight: bold;
}

.login-link a:hover {
  color: #DDCA7D;
}
</style>
