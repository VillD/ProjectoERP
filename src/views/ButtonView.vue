<script setup>
import BaseSetting from '../components/BaseSetting.vue'
import BaseButton from '../components/BaseButton.vue'
import { ref } from 'vue'

// let isOutline = ref()
// let isSmall = ref()
// let isDisabled = ref()
// let isRounded = ref()

const switchs = ref([
  { value: ref(false), name: 'Outline' },
  { value: ref(false), name: 'Small' },
  { value: ref(false), name: 'Disabled' },
  { value: ref(false), name: 'Rounded' }
])

const buttons = ref(['white', 'primary', 'success', 'warning', 'danger'])
</script>
<template>
  <h1 class="text-lg font-semibold text-white pb-2">Settings</h1>
  <div class="flex flex-wrap">
    <BaseSetting
      v-for="(item, k) in switchs"
      :key="k"
      v-model="item.value"
      :name-input="item.name"
    >
    </BaseSetting>
  </div>
  <div
    class="bg-slate-900/70 rounded-xl max-w-xs sm:max-w-md m-2 p-4 lg:max-w-4xl"
  >
    <div class="flex">
      <BaseButton
        v-for="(button, index) in buttons"
        :key="index"
        :type="button.type"
        :outline="switchs[0].value"
        :small="switchs[1].value"
        :disabled="switchs[2].value"
        :rounded-full="switchs[3].value"
        title-button="Button"
      ></BaseButton>
    </div>
  </div>
</template>
