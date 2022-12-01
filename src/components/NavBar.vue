<!-- eslint-disable no-unused-vars -->
<script setup>
import { reactive } from 'vue'
import BaseIcon from './BaseIcon.vue'
import NavBarLink from './NavBarLink.vue'
import UserAvatar from './UserAvatar.vue'
let items = reactive([
  {
    label: 'Sample Menu',
    icon: 'fa-solid fa-bars',
    secondIcon: 'fa-solid fa-angle-down',
    drop: false,
    children: [
      {
        to: '/login',
        label: 'Item One',
        icon: 'fa-solid fa-clock'
      },
      {
        to: '/login',
        label: 'Item Two',
        icon: 'fa-solid fa-cloud'
      },
      {
        to: '/login',
        label: 'Item Last',
        icon: ''
      }
    ]
  },
  {
    label: 'Jhon Doe',
    icon: 'fa-solid fa-plus',
    secondIcon: 'fa-solid fa-angle-down',
    drop: false,
    children: [
      {
        to: '/login',
        label: 'My profile',
        icon: ''
      },
      {
        to: '/login',
        label: 'Settings',
        icon: ''
      },
      {
        to: '/login',
        label: 'Messages',
        icon: ''
      },
      {
        to: '/login',
        label: 'Log Out',
        icon: ''
      }
    ]
  }
])
const emit = defineEmits(['showAside'])
</script>

<template>
  <nav
    class="max-w-full h-14 bg-slate-800 xl:pl-60 top-0 left-0 right-0 fixed z-30 w-screen"
  >
    <div class="flex lg:items-stretch xl:max-w-6xl xl:mx-auto">
      <div class="flex flex-1 h-14 xl:justify-between">
        <!-- Icon Hamburger -->
        <div class="flex px-3 items-center text-white xl:hidden">
          <BaseIcon name="fa-solid fa-bars" />
        </div>
        <!-- Icon Hamburger -->
        <!--Input Search-->
        <div
          class="flex my-2 mx-3 items-center text-white hover:text-slate-400"
        >
          <div class="relative">
            <input
              class="border-gray-600 h-12 px-3 py-2 focus:outline-none bg-transparent"
              placeholder="Serach"
              type="text"
            />
          </div>
        </div>
        <!--Input Search-->

        <!-- Menu de navegacion(SAMPLE MENU, PROFILE MENU, icons) -->
        <div
          class="hidden items-center lg:overflow-visible lg:flex lg:flex-1 lg:justify-end"
        >
          <div class="relative">
            <NavBarLink
              :icon="items[0].icon"
              :text="items[0].label"
              :second-icon="items[0].secondIcon"
              class="flex items-center lg:px-2 lg:py-2 hover:text-slate-400 text-white transition"
              @click="items[0].drop = !items[0].drop"
            />
            <template
              v-for="(item, k) in items"
              :key="k"
            >
              <ul
                v-if="item.children"
                :class="item.drop ? '' : 'hidden'"
                class="bg-slate-800 absolute rounded-lg border w-4/5 border-slate-700 top-12 left-4"
              >
                <NavBarLink
                  v-for="(child, j) in item.children"
                  :key="j"
                  :text="child.label"
                  :icon="child.icon"
                  class="text-white text-sm py-2 last:border-slate-700 last:border-t hover:text-slate-400 transition"
                />
              </ul>
            </template>
          </div>

          <div
            class="flex lg:py-2 w-1/5 justify-between text-white hover:text-slate-400 transition"
          >
            <span class="w-6 h-6 ml-6 cursor-pointer"
              ><UserAvatar username="Daniel"></UserAvatar
            ></span>
            <NavBarLink
              :text="items[1].label"
              :second-icon="items[1].secondIcon"
              class="lg:flex lg:px-3 lg:justify-between w-9/12 cursor-pointer"
              @click="items[1].drop = !items[1].drop"
            />
            <div class="relative">
              <template
                v-for="(item, k) in items"
                :key="k"
              >
                <ul
                  v-if="item.children"
                  :class="item.drop ? '' : 'hidden'"
                  class="bg-slate-800 absolute rounded-lg border w-4/5 border-slate-700 top-12 left-4"
                >
                  <NavBarLink
                    v-for="(child, j) in item.children"
                    :key="j"
                    :text="child.label"
                    :icon="child.icon"
                    class="text-white text-sm py-2 last:border-slate-700 last:border-t hover:text-slate-400 transition"
                  />
                </ul>
              </template>
            </div>
          </div>
          <ul class="flex text-white items-center justify-end">
            <NavBarLink
              icon="fa-solid fa-circle-half-stroke"
              class="hover:text-slate-400 transition w-1/3 mr-4"
            />
            <NavBarLink
              icon="fa-solid fa-arrow-right-to-bracket"
              class="hover:text-slate-400 transition w-1/3"
            />
          </ul>
        </div>
        <!-- Menu de navegacion(SAMPLE MENU, PROFILE MENU, icons) -->
      </div>
      <div class="flex items-center flex-none h-14 text-white lg:hidden">
        <div class="px-3 xl:hidden">
          <BaseIcon name="fa-solid fa-ellipsis-vertical" />
        </div>
      </div>
    </div>
  </nav>
</template>
