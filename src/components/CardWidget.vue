<script setup>
import BaseIcon from './BaseIcon.vue'
import ButtonPill from './ButtonPill.vue'

const props = defineProps({
  pillText: {
    type: String,
    default: null
  },
  pillIcon: {
    type: String,
    default: null
  },
  title: {
    type: [String, Number],
    default: null
  },
  color: {
    type: String,
    default: 'primary'
  },
  iconWidget: {
    type: String,
    default: null
  }
})
</script>
<template>
  <!-- header -->
  <ButtonPill
    :label="pillText"
    :path="pillIcon"
    icon="true"
    :type="color"
    small
    class="mb-3 text-white"
  />
  <!-- footer -->
  <div class="justify-between items-center flex">
    <div class="">
      <span class="text-lg text-slate-400 block">
        {{ props.title }}
      </span>
      <span class="text-3xl font-semibold text-white"><slot></slot></span>
    </div>
    <BaseIcon
      class="w-10 h-10"
      :class="`text-${props.color}`"
      :name="iconWidget"
    />
  </div>
</template>
