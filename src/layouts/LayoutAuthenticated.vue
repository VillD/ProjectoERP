<script setup>
import FooterComponent from '../components/FooterComponent.vue'
import NavBar from '../components/NavBar.vue'
</script>
<template>
  <div class="pt-14 xl:pl-60 w-screen transition-position lg:w-auto">
    <NavBar />
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>
