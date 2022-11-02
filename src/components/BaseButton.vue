<script setup>
import { computed } from 'vue'
// eslint-disable-next-line no-unused-vars
let props = defineProps({
  titleButton: { type: String, default: '' },
  type: {
    type: String,
    default: 'danger'
  },
  size: {
    type: Number,
    default: 2
  },
  disabled: Boolean,
  outline: Boolean,
  small: Boolean,
  roundedFull: Boolean
})

const buttonClass = computed(() => {
  let styles = {}
  const normal = `bg-${props.type} px-3 py-2`
  const outline = `bg-transparent outline outline-${props.type} text-${props.type}`

  const small = `p-5`
  const roundedFull = `rounded-full text-${props.type}`
  const disabled = `bg-slate-500 text-${props.type}`

  props.outline ? (styles[outline] = true) : (styles[normal] = true)
  if (props.small) styles[small] = true
  props.roundedFull ? (styles[roundedFull] = true) : (styles[normal] = true)
  props.disabled ? (styles[disabled] = true) : (styles[normal] = true)
  if (props.roundedFull) styles[roundedFull] = true

  return styles
})
//`bg-${props.type}`
// const backgroundColor = ref(`bg-${props.type}`)
//const size = ref(`bg-${propsB.type}`);
</script>
<template>
  <button
    type="button"
    :class="buttonClass"
  >
    <span class="px-2">{{ titleButton }}</span>
  </button>
</template>
