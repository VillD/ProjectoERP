<script setup>
const props = defineProps({
  name: {
    type: String,
    default: null
  }
})
</script>
<template>
  <font-awesome-icon :icon="`${props.name}`" />
</template>
