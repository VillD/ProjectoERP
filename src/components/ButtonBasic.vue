<script setup>
// import { processSlotOutlet } from "@vue/compiler-core";
// import { computed } from "@vue/reactivity";
// import { ref } from 'vue'

import { computed } from 'vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  titleButton: { type: String, default: '' },
  type: {
    type: String,
    default: 'primary'
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
  disabled: {
    type: String,
    default: ''
  }
})

const buttonClass = computed(() => {
  let styles = {}
  const normal = `bg-${props.type}`

  const outline = `bg-transparent outline outline-${props.type} outline-${props.size}`
  props.outline ? (styles[outline] = true) : (styles[normal] = true)

  return styles
})

//`bg-${props.type}`
// const backgroundColor = ref(`bg-${props.type}`)
//const size = ref(`bg-${propsB.type}`);
</script>
<template>
  <button
    :class="buttonClass"
    class="p-4 border border-white"
  ></button>
  <div>
    <button
      type="button"
      :class="buttonClass"
      class="py-2 px-4 rounded"
    >
      <span class="px-2">{{ titleButton }}</span>
    </button>
  </div>
</template>
