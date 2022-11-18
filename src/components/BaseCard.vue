<script setup>
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import { ref } from 'vue'

defineEmits(['hideModal'])
const props = defineProps({
  title: {
    type: [String, Number],
    default: null
  },
  type: {
    type: String,
    default: 'primary'
  },
  color: {
    type: String,
    default: 'primary'
  }
})
const showModal = ref(false)
</script>

<template>
  <!-- Modal button -->
  <BaseButton
    class="mr-2"
    :type="props.type"
    @click="showModal = true"
  >
    <slot></slot>
  </BaseButton>
  <!-- Modal container -->
  <div
    v-if="showModal"
    class="flex z-50 item-center flex-col justify-center fixed inset-0"
    @hideModal="showModal = false"
  >
    <div
      class="absolute inset-0 bg-gradient-to-tr from-gray-700 via-gray-900 to-gray-700 opacity-90 shadow-lg"
    ></div>

    <div
      class="flex flex-col w-10/12 sm:max-w-md z-50 m-auto bg-slate-900 rounded-2xl text-white"
    >
      <!-- Header -->
      <div class="text-2xl px-6 pt-6 flex justify-between items-center">
        <h1>{{ props.title }}</h1>
        <span
          class="cursor-pointer w-6 h-6 inline-flex justify-center items-center hover:rounded-full hover:bg-slate-800"
        >
          <BaseIcon
            name="fa-solid fa-xmark"
            class="w-2 px-2"
            @click="showModal = false"
          />
        </span>
      </div>
      <!-- Body -->
      <div class="text-base p-6">
        <slot name="body"></slot>
      </div>
      <div class="flex w-10/12 gap-4 text-base p-6">
        <BaseButton
          :type="color"
          @click="handleButtonClick"
        >
          Confirm
        </BaseButton>
        <BaseButton
          :type="color"
          outline="true"
          @click="showModal = false"
        >
          Cancel
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
