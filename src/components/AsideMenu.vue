<!-- eslint-disable no-unused-vars -->
<script setup>
import AsideMenuLink from './AsideMenuLink.vue'
import { reactive } from 'vue'
let items = reactive([
  {
    to: '/dashboard/home',
    icon: 'fa-solid fa-display',
    label: 'Dashboard',
    drop: false
  },
  {
    to: '/dashboard/table',
    label: 'Tables',
    icon: 'fa-solid fa-table',
    drop: false
  },
  {
    to: '/dashboard/form',
    label: 'Forms',
    icon: 'fa-solid fa-pen-to-square',
    drop: false
  },
  {
    to: '/dashboard/ui',
    label: 'UI',
    icon: 'fa-solid fa-display',
    drop: false
  },
  {
    to: '/dashboard/profile',
    label: 'Profile',
    icon: 'fa-solid fa-user',
    drop: false
  },
  {
    to: '/login',
    label: 'Login',
    icon: 'fa-solid fa-lock',
    drop: false
  },
  {
    label: 'Dropdown',
    icon: 'fa-solid fa-plus',
    drop: false,
    children: [
      {
        to: '/login',
        label: 'Item One'
      },
      {
        to: '/login',
        label: 'Item Two'
      }
    ]
  }
])
</script>
<template>
  <aside
    class="h-screen w-60 z-50 text-slate-200 fixed top-0 -left-60 md:py-2 md:pl-2 lg:left-0 lg:hidden xl:flex xl:flex-col"
  >
    <!-- Container -->
    <div
      class="bg-slate-900 flex h-full flex-col md:rounded-2xl overflow-hidden"
    >
      <!-- Header -->
      <div class="h-14 flex justify-center items-center mb-4">
        <h1 class="text-base text-white font-extrabold">One</h1>
      </div>
      <!-- Nav -->
      <div class="flex-1 overflow-y-auto">
        <ul class="flex flex-col">
          <template
            v-for="(item, k) in items"
            :key="k"
          >
            <!-- Items -->
            <AsideMenuLink
              class="py-4"
              :text="item.label"
              :icon="item.icon"
              :to="item.to"
              @click="item.drop = !item.drop"
            >
            </AsideMenuLink>
            <!-- Children -->
            <ul
              v-if="item.children"
              :class="item.drop ? '' : 'hidden'"
              class="bg-slate-800/50"
            >
              <AsideMenuLink
                v-for="(child, j) in item.children"
                :key="j"
                :text="child.label"
                :to="child.to"
                class="py-3 px-6 hover:text-white"
              />
            </ul>
          </template>
        </ul>
      </div>
      <!-- Footer -->
      <div
        class="hover:text-white transition flex justify-between py-4 bg-blue-500 hover:bg-blue-600 cursor-pointer"
      >
        <AsideMenuLink
          text="Logout"
          icon="fa-solid fa-arrow-right-to-bracket"
          class="font-normal"
        />
      </div>
    </div>
  </aside>
</template>
