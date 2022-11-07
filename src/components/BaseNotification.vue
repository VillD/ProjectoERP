<script setup>
import { computed } from 'vue'
import BaseIcon from './BaseIcon.vue'
const props = defineProps({
  title: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: null
  },
  color: {
    type: String,
    default: null
  },
  icon: String
})
const componentClass = computed(() => {
  const styles = {}
  const normal = `bg-${props.type}`
  if (props.color) styles[normal] = true
  return styles
})
</script>
<template>
  <div
    :class="componentClass"
    class="text-white rounded-md p-3 justify-between items-center max-w-xs flex"
  >
    <BaseIcon :name="icon" />
    <span><slot /> NotificationBar</span>
  </div>
</template>
