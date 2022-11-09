<script setup>
// import LayoutAuthenticated from '../layouts/LayoutAuthenticated.vue'

import BaseSetting from '../components/BaseSetting.vue'
import BaseButton from '../components/BaseButton.vue'
import BaseIcon from '../components/BaseIcon.vue'
import ButtonPill from '../components/ButtonPill.vue'
import BaseCard from '../components/BaseCard.vue'
import NotificationBar from '../components/NotificationBar.vue'

import { ref } from 'vue'

const switchs = ref([
  { value: ref(false), name: 'Outline' },
  { value: ref(false), name: 'Small' },
  { value: ref(false), name: 'Rounded' },
  { value: ref(false), name: 'Disabled' }
])

const switchsPills = ref([
  { value: ref(false), name: 'Outline' },
  { value: ref(false), name: 'Small' },
  { value: ref(false), name: 'Icon' }
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
  <div
    class="bg-slate-900/70 rounded-xl max-w-xs sm:max-w-md p-6 lg:max-w-4xl m-2 mt-0"
  >
    <h1 class="text-lg font-semibold text-white pb-2">Modal examples</h1>

    <BaseCard
      title="Primary card"
      class="mr-2"
      >Show Modal
      <template #body> This is sample modal Lorem ipsum dolor </template>
    </BaseCard>
    <BaseCard
      title="Unhandled exception"
      type="danger"
      color="danger"
      >Danger
      <template #body>This is sample modal Lorem ipsum dolor </template>
    </BaseCard>
    <BaseCard
      title="Success"
      color="success"
      type="success"
      >Success</BaseCard
    >
  </div>

  <div class="m-2">
    <h1 class="text-lg font-semibold text-white pb-2">Notifications</h1>

    <NotificationBar
      color="primary"
      title="Info state"
      icon="fa-solid fa-circle-info"
    >
    </NotificationBar>
    <NotificationBar
      color="success"
      title="Success state"
      icon="fa-solid fa-circle-check"
    >
    </NotificationBar>
    <NotificationBar
      color="warning"
      title="Warning state"
      icon="fa-solid fa-triangle-exclamation"
    >
    </NotificationBar>
    <NotificationBar
      color="danger"
      title="Danger state"
      icon="fa-solid fa-circle-exclamation"
    >
    </NotificationBar>
    <NotificationBar
      color="light"
      title="Contrast"
      icon="fa-solid fa-circle-exclamation"
    >
    </NotificationBar>
  </div>

  <div
    class="bg-slate-900/70 rounded-xl max-w-xs sm:max-w-md m-2 p-6 lg:max-w-4xl flex-wrap"
  >
    <h1 class="text-lg font-semibold text-white pb-2">Settings</h1>
    <div class="flex flex-wrap mb-6">
      <BaseSetting
        v-for="(item, k) in switchs"
        :key="k"
        v-model="item.value"
        :name-input="item.name"
      >
      </BaseSetting>
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
        <BaseIcon
          class="pr-2"
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
  <div
    class="bg-slate-900/70 rounded-xl max-w-xs sm:max-w-md mx-2 p-6 lg:max-w-4xl flex-wrap"
  >
    <h1 class="text-lg font-semibold text-white pb-2">Settings</h1>
    <div class="flex mb-6">
      <BaseSetting
        v-for="(item, k) in switchsPills"
        :key="k"
        v-model="item.value"
        :name-input="item.name"
      >
      </BaseSetting>
    </div>
    <hr class="my-6 -mx-4 border-slate-800" />
    <div class="">
      <ButtonPill
        v-for="(type, index) in buttons"
        :key="index"
        class="mr-2"
        :type="type"
        :label="type"
        :outline="switchsPills[0].value"
        :small="switchsPills[1].value"
        :icon="switchsPills[2].value"
        path="fa-solid fa-arrow-trend-up"
      >
      </ButtonPill>
    </div>
  </div>
</template>
