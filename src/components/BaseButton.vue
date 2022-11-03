<script setup>
import { computed } from 'vue'
// eslint-disable-next-line no-unused-vars
let props = defineProps({
  type: {
    type: String,
    default: null
  },
  label: {
    type: [String, Number],
    default: null
  },
  icon: {
    type: String,
    default: null
  },
  disabled: Boolean,
  outline: Boolean,
  small: Boolean,
  roundedFull: Boolean
})

const buttonClass = computed(() => {
  let styles = {}
  const normal = `bg-${props.type}`
  const outline = `bg-transparent outline outline-${props.type} text-${props.type} outline-1`

  const normalPadding = `px-3 py-2`
  const smallPadding = `p-1 text-sm`

  const roundedNormal = 'rounded'
  const roundedFull = `rounded-full`

  const disabled = `bg-${props.type}/50 text-${props.type}/50  cursor-not-allowed outline-${props.type}/50`

  props.small ? (styles[smallPadding] = true) : (styles[normalPadding] = true)

  props.outline ? (styles[outline] = true) : (styles[normal] = true)

  props.roundedFull
    ? (styles[roundedFull] = true)
    : (styles[roundedNormal] = true)

  props.disabled ? (styles[disabled] = true) : (styles[normal] = true)
  return styles
})
</script>
<template>
  <button
    type="button"
    :class="buttonClass"
    class=""
  >
    <slot></slot>
  </button>
</template>
