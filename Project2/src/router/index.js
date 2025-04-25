import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
function isLogin(to, from, next) {
  if (localStorage.getItem('isLogin') == '1') {
    next()
  } else {
    next({ name: 'login' })
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/protected',
      name: 'protected',
      beforeEnter: isLogin,
      component: () => import('../views/ProtectedView.vue'),
    },
  ],
})

export default router
