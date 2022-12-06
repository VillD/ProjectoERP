<script setup>
import FooterComponent from '../components/FooterComponent.vue'
import AsideMenu from '../components/AsideMenu.vue'
import NavComponent from '../components/NavBar.vue'
</script>
<template>
  <div
    class="bg-slate-800 pt-14 xl:pl-60 w-screen transition-position lg:w-auto"
  >
    <NavComponent />
    <AsideMenu />
    <router-view class="min-h-screen"></router-view>
    <FooterComponent />
  </div>
</template>
