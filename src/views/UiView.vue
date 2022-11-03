<script setup>
import BaseSetting from '../components/BaseSetting.vue'
import BaseButton from '../components/BaseButton.vue'
import BaseIcon from '../components/BaseIcon.vue'

import { ref } from 'vue'

const switchs = ref([
  { value: ref(false), name: 'Outline' },
  { value: ref(false), name: 'Small' },
  { value: ref(false), name: 'Rounded' },
  { value: ref(false), name: 'Disabled' }
])

const buttons = ref([
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
  'light',
  'dark'
])
</script>
<template>
  <div class="flex flex-wrap"></div>
  <div
    class="bg-slate-900/70 rounded-xl max-w-xs sm:max-w-md m-2 p-6 lg:max-w-4xl flex-wrap"
  >
    <h1 class="text-lg font-semibold text-white pb-2">Settings</h1>
    <div class="flex mb-6">
      <BaseSetting
        v-for="(item, k) in switchs"
        :key="k"
        v-model="item.value"
        :name-input="item.name"
      >
      </BaseSetting>
    </div>
    <hr class="my-6 -mx-4 border-slate-800" />
    <div class="flex">
      <BaseButton
        v-for="(type, index) in buttons"
        :key="index"
        class="mr-2"
        label="Button"
        :type="type"
        :outline="switchs[0].value"
        :small="switchs[1].value"
        :rounded-full="switchs[2].value"
        :disabled="switchs[3].value"
      >
      </BaseButton>
    </div>
    <hr class="my-6 -mx-4 border-slate-800" />
    <div class="">
      <BaseButton
        v-for="(type, index) in buttons"
        :key="index"
        class="mr-2"
        label="Button"
        :type="type"
        :outline="switchs[0].value"
        :small="switchs[1].value"
        :rounded-full="switchs[2].value"
        :disabled="switchs[3].value"
      >
        <BaseIcon
          class="mr-4"
          name="fa-solid fa-arrow-up-right-from-square"
        />
        Button
      </BaseButton>
    </div>
    <hr class="my-6 -mx-4 border-slate-800" />
    <div class="">
      <BaseButton
        v-for="(type, index) in buttons"
        :key="index"
        class="mr-2"
        :type="type"
        :outline="switchs[0].value"
        :small="switchs[1].value"
        :rounded-full="switchs[2].value"
        :disabled="switchs[3].value"
      >
        <BaseIcon name="fa-solid fa-arrow-up-right-from-square" />
      </BaseButton>
    </div>
  </div>
</template>
