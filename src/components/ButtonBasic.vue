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
  outline: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: String,
    default: ''
  },
  disabled: Boolean
})

const buttonClass = computed(() => {
  let styles = {}
  const normal = `bg-${props.type}`

  const outline = `bg-transparent outline outline-${props.type} outline-${props.size} text-${props.type}`
  props.outline ? (styles[outline] = true) : (styles[normal] = true)

  return styles
})
//`bg-${props.type}`
// const backgroundColor = ref(`bg-${props.type}`)
//const size = ref(`bg-${propsB.type}`);
</script>
<template>
  <div>
    <button
      type="button"
      :class="buttonClass"
      class="rounded px-3 py-2"
    >
      <span class="px-2">{{ titleButton }}</span>
    </button>
  </div>
</template>
