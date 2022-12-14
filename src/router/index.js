import { createRouter, createWebHistory } from 'vue-router'

import LayoutDashboard from '../layouts/LayoutDashboard.vue'

import UiView from '@/views/UiView.vue'

import LoginView from '@/views/LoginView.vue'
// src/components/LoginComponent.vue

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: LoginView
    },
    {
      path: '/dashboard',
      component: LayoutDashboard,
      children: [
        {
          path: 'home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'ui',
          component: UiView
        },
        {
          path: 'form',
          component: () => import('@/views/FormsView.vue')
        },
        {
          path: 'login',
          component: () => import('@/views/LoginView.vue')
        },
        {
          path: 'profile',
          component: () => import('@/views/ProfileView.vue')
        },
        {
          path: 'table',
          component: () => import('@/views/TablesView.vue')
        }
      ]
    }
  ]
})

export default router
