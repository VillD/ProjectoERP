<script setup>
import ButtonPill from './ButtonPill.vue'
import UserAvatar from './UserAvatar.vue'
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  progrees: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  iconPill: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="w-full justify-between items-center md:flex md:flex-1">
    <!-- header -->
    <div class="justify-center flex mb-6 md:mb-0">
      <div
        class="flex justify-center items-center md:mr-6 w-12 h-12 bg-slate-800 rounded-full"
      >
        <UserAvatar :username="name" />
      </div>
    </div>

    <div class="flex flex-col flex-1 mb-6 md:mb-0 items-center md:items-start">
      <span class="text-xl space-x-1 text-white">{{ props.name }}</span>
      <p class="text-slate-400">{{ props.date }} @ {{ props.user }}</p>
    </div>

    <!-- footer -->
    <div class="text-center md:text-right text-white">
      <ButtonPill
        :class="`bg-${color}`"
        :label="`${props.progrees}%`"
        :path="props.iconPill"
        icon
      />
    </div>
  </div>
</template>
