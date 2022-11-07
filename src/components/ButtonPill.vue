<script setup>
import { computed } from 'vue'
import BaseIcon from './BaseIcon.vue';
// eslint-disable-next-line no-unused-vars
let props = defineProps({
  type: {
    type: String,
    default: null
  },
  path: {
    type: String,
    default: null
  },
  label:{
    type: String,
    default:null
  },
  outline: Boolean,
  small: Boolean,
  icon: Boolean
})

const ButtonPill = computed(() => {
  let styles = {}
  const normal = `bg-${props.type} `
  const outline = `bg-transparent outline outline-${props.type} text-${props.type} outline-1`

  const normalPadding = `px-4 py-1.5`
  const smallPadding = `py-1 px-3 text-xs`

  props.small ? (styles[smallPadding] = true) : (styles[normalPadding] = true)

  props.outline ? (styles[outline] = true) : (styles[normal] = true)

  return styles
})
</script>
<template>
    <button
    type="button"
    :class="ButtonPill"
    class=" capitalize rounded-full"
  >
  <span>{{props.label}}</span>
  <BaseIcon
  :class="ButtonPill"
  />
  </button>
</template>
