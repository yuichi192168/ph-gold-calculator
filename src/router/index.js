import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Calculators from '../views/Calculators.vue'
import GoldCalculator from '../components/GoldCalculator.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/calculators',
    name: 'Calculators',
    component: Calculators,
    children: [
      {
        path: '',
        redirect: '/calculators/gold'
      },
      {
        path: 'gold',
        name: 'GoldCalculator',
        component: GoldCalculator
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
