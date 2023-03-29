import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import LoginView from '../views/LoginView.vue'
import { useAppStore } from '@/stores/app'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexView,
      meta: {
        title: '在线客服',
      },
      beforeEnter(to, from, next) {
        if (useAppStore().token) {
          next()
        } else {
          next('/login')
        }
      },
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: {
        title: '登陆',
      },
    },
  ],
})

export default router
