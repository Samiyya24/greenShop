import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'home',
        component: () => import('../pages/Home.vue')
    }, {
        path: '/shop',
        name: 'shop',
        component: () => import('../pages/Shop.vue')
    }]
})

export default router