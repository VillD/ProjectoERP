<script setup>
import FooterComponent from '../components/FooterComponent.vue'
import NavBar from '../components/NavBar.vue'
import NavComponent from '../components/NavComponent.vue'
</script>
<template>
  <div
    class="bg-slate-800 pt-14 xl:pl-60 w-screen transition-position lg:w-auto"
  >
    <NavComponent />
    <NavBar />
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>
