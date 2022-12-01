<script setup>
import BaseIcon from './BaseIcon.vue'
// import AsideMenu from './AsideMenu.vue';
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

const linkStyle = props.icon ? 'w-16 h-6' : ''
</script>
<template>
  <li class="cursor-pointer hover:text-white flex justify-between">
    <span
      :class="linkStyle"
      class="inline-flex justify-center items-center"
    >
      <BaseIcon :name="props.icon" />
    </span>
    <p class="flex-grow font-light">
      <router-link
        v-if="to"
        :to="props.to"
        >{{ props.text }}</router-link
      >
      <span v-else>{{ props.text }}</span>
    </p>
  </li>
</template>
<style>
.router-link-active {
  font-weight: 700;
  color: white;
}
</style>
