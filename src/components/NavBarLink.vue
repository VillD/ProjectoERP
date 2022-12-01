<script setup>
import BaseIcon from './BaseIcon.vue'
const props = defineProps({
  text: {
    type: String,
    default: null
  },
  to: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: null
  },
  secondIcon: {
    type: String,
    default: null
  }
})
const styleIcon = props.icon ? 'w-16 h-6' : ''
</script>
<template>
  <li class="cursor-pointer flex justify-between">
    <span
      :class="styleIcon"
      class="inline-flex justify-center items-center"
    >
      <BaseIcon :name="props.icon" />
    </span>
    <p class="flex-grow">
      <router-link
        v-if="to"
        :to="props.to"
        >{{ props.text }}</router-link
      >
      <span v-else>{{ props.text }}</span>
    </p>
    <span
      v-if="props.secondIcon"
      :class="styleIcon"
      class="inline-flex justify-center items-center"
    >
      <BaseIcon :name="props.secondIcon" />
    </span>
  </li>
</template>
