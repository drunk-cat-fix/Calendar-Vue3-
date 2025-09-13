import { createRouter, createWebHistory } from 'vue-router'
import dayComponent from "@/views/day-component.vue";

const routes = [
    {
        path: '/',
        name: 'day',
        component:dayComponent,
    },
    {
        path: '/month',
        name: 'month',
        component: ()=>import('../views/month-component.vue'),
    },
    {
        path: '/year',
        name: 'year',
        component: ()=>import('../views/year-component.vue'),

    },
    {
        path: '/:pathMatch(.*)*', //No Page found
        name: 'default',
        redirect: '/',
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
