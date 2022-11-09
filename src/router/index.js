import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import UiView from '@/views/UiView.vue'
import NavBar from '@/components/NavBar.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: UiView
    },
    {
      // meta: {
      //   title: 'Tables'
      // },
      path: '/navBar',
      name: 'NavBar',
      component: NavBar,
      children: [
        {
          path: 'ui',
          name: 'UI',
          component: UiView
        }
      ]
    }
  ]
})

export default router
