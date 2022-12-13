<script setup>
import { computed } from 'vue'
// eslint-disable-next-line no-unused-vars
let props = defineProps({
  type: {
    type: String,
    default: 'primary'
  },
  icon: {
    type: String,
    default: null
  },
  typeButton: {
    type: String,
    default: 'button'
  },
  disabled: { type: Boolean, default: false },
  outline: { type: Boolean, default: false },
  small: { type: Boolean, default: false },
  roundedFull: { type: Boolean, default: false }
})

const buttonClass = computed(() => {
  let styles = {}
  const normal = `bg-${props.type}`

  const outline = `bg-transparent outline outline-${props.type} text-${props.type} outline-1 `

  const hover = `hover:bg-${props.type} hover:text-white`

  const normalPadding = `px-3 py-2`
  const smallPadding = `py-1.5 px-2.5 text-sm`

  const roundedNormal = 'rounded'
  const roundedFull = `rounded-full`

  const disabled = `opacity-70  cursor-not-allowed`

  styles[normal] = !props.outline
  styles[outline] = props.outline

  styles[hover] = !props.disabled
  styles[disabled] = props.disabled

  styles[smallPadding] = props.small
  styles[normalPadding] = !props.small

  styles[roundedFull] = props.roundedFull
  styles[roundedNormal] = !props.roundedFull

  if (normal == 'bg-dark') {
    styles['text-light'] = true
  }
  return styles
})
</script>
<template>
  <button
    :type="typeButton"
    :class="buttonClass"
    class="transition"
  >
    <slot></slot>
  </button>
</template>
