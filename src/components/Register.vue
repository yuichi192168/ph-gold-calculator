<template>
  <div class="auth-container">
    <div class="auth-box">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required placeholder="Choose a username">
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required placeholder="Choose a password">
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <router-link to="/login">Login here</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserRegister',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    register() {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      if (users.find(u => u.username === this.username)) {
        alert('Username already exists')
        return
      }
      users.push({ username: this.username, password: this.password })
      localStorage.setItem('users', JSON.stringify(users))
      alert('Registration successful! Please login.')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 150px);
}

.auth-box {
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

h2 {
  color: #A27035;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
  font-size: 28px;
}

form div {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #A27035;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
}

input {
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid #B88B4A;
  border-radius: 10px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
}

input:focus {
  border-color: #A27035;
  outline: none;
  box-shadow: 0 0 15px rgba(162, 112, 53, 0.3);
}

input::placeholder {
  color: rgba(162, 112, 53, 0.5);
}

button {
  width: 100%;
  padding: 14px;
  margin-top: 10px;
  background: #B88B4A;
  color: white;
  border: 2px solid #A27035;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
}

button:hover {
  background: #A27035;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(162, 112, 53, 0.4);
}

p {
  margin-top: 20px;
  color: #A27035;
  font-weight: 500;
}

a {
  color: #A27035;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  color: #DDCA7D;
}
</style>
