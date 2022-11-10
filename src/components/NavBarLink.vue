<script setup>
import BaseIcon from './BaseIcon.vue'

const props = defineProps({
  text: {
    type: String,
    default: null
  },
  to: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: null
  }
})
</script>
<template>
  <li class="cursor-pointer hover:text-white flex justify-between">
    <!-- <div class="flex justify-between"> -->
    <span class="inline-flex justify-center w-16 h-6 items-center">
      <BaseIcon :name="props.icon" />
    </span>
    <p class="flex-grow font-light">
      <router-link :to="props.to">{{ props.text }}</router-link>
    </p>
    <!-- </div> -->
  </li>
</template>
<style scoped>
.router-link-active {
  font-weight: 700;
  color: white;
}
</style>
