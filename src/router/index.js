import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { useAppStore } from '@/stores/app'
const IndexView = () => import('../views/IndexView.vue')
const LoginView = () => import('../views/LoginView.vue')

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: IndexView,
            meta: {
                title: '',
            },
            // beforeEnter(to, from, next) {
            //   if (useAppStore().token) {
            //     next()
            //   } else {
            //     next('/login')
            //   }
            // },
        },
        {
            path: '/home',
            name: 'home',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/HomeView.vue'),
        },
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
