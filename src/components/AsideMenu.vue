<!-- eslint-disable no-unused-vars -->
<script setup>
import AsideMenuLink from './AsideMenuLink.vue'
import { ref, computed } from 'vue'
let itemMenu = [
  {
    to: '/dashboard/home',
    icon: 'fa-solid fa-display',
    label: 'Dashboard',
  },
  {
    to: '/dashboard/table',
    label: 'Tables',
    icon: 'fa-solid fa-table',
  },
  {
    to: '/dashboard/form',
    label: 'Forms',
    icon: 'fa-solid fa-pen-to-square',
  },
  {
    to: '/dashboard/ui',
    label: 'UI',
    icon: 'fa-solid fa-display',
  },
  {
    to: '/dashboard/profile',
    label: 'Profile',
    icon: 'fa-solid fa-user',
  },
  {
    to: '/login',
    label: 'Login',
    icon: 'fa-solid fa-lock',
  },
  {
    to: '/login',
    label: 'Dropdown',
    icon: 'fa-solid fa-plus',
    desplejable: ref(false),
    menu: [
      {
        to: '/login',
        label: 'Item One'
      },
      {
        to: '/login',
        label: 'Item Two'
      }
    ],
    
  }
]
const deplejar = ()=>{
  let otro = itemMenu[6].desplejable.value
  console.log( otro)
  otro = !otro
  console.log(otro)
  return  otro
}

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
        <ul class="flex flex-col gap-8">
          <AsideMenuLink
            v-for="(item, k) in itemMenu"
            :key="k"
            :text="item.label"
            :icon="item.icon"
            :to="item.to"
            @click="deplejar"
          >
          
        </AsideMenuLink>
        <div class=" w-6 h-6 bg-slate-300" @click="deplejar"></div>
        <div id="dropdownItems">
          
          <AsideMenuLink
            v-for="(drop, k) in itemMenu[6].menu"
            :key="k"
            :text="drop.label"
            :to="drop.to"
          />
        </div>
        
          
        </ul>
      </div>
      <!-- Footer -->
      <div
        class="hover:text-white transition flex justify-between py-4 bg-blue-500 hover:bg-blue-600 cursor-pointer"
      >
        <span class="inline-flex justify-center w-16 h-6 items-center">
          <font-awesome-icon icon="fa-solid fa-arrow-right-to-bracket" />
        </span>
        <p class="flex-grow">Logout</p>
      </div>
    </div>
  </aside>
</template>
