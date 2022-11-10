<script setup>
import { computed } from 'vue'
import BaseIcon from './BaseIcon.vue'
const props = defineProps({
  title: {
    type: String,
    default: null
  },
  color: {
    type: String,
    default: 'primary'
  },
  icon: {
    type: String,
    default: null
  },
  close: {
    type: Boolean,
    default: null
  }
})
const changeTextColor = computed(() => {
  const style = {}
  const colorBar = `bg-${props.color}`
  const change = 'text-black'
  style[colorBar] = true
  if (colorBar == 'bg-light') {
    style[change] = true
  }
  return style
})
</script>
<template>
  <div
    :class="changeTextColor"
    class="w-auto rounded-md py-5 mb-6 last:mb-0 px-3 m-2 text-white"
  >
    <!-- Left -->
    <BaseIcon :name="icon" />
    <span
      class="ml-2 grow"
      :class="changeTextColor"
      ><b>{{ props.title }}</b
      >. Notificaction Bar</span
    >

    <!-- Right -->
    <BaseIcon
      v-if="close"
      :name="icon"
      @click="closeNotificacion"
    />
  </div>
</template>
