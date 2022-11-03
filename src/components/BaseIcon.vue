<script setup>
const props = defineProps({
  name: {
    type: String,
    default: null
  },
  w: {
    type: Number,
    default: null
  },
  h: {
    type: Number,
    default: null
  }
})
</script>
<template>
  <font-awesome-icon :icon="`${props.name}`" />
</template>
