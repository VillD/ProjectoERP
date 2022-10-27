<script setup>
import ButtonBasic from '../components/ButtonBasic.vue'
import SettingBasic from '../components/SettingBasic.vue'
</script>
<template>
  <div
    class="bg-slate-900/70 rounded-xl max-w-xs sm:max-w-md m-2 p-4 lg:max-w-4xl"
  >
    <h1 class="text-lg font-semibold text-white pb-2">Settings</h1>
    <div class="flex flex-wrap">
      <SettingBasic>
        <template #content>
          <div class="flex pb-2">
            <label
              for=""
              class="flex mr-6"
            >
              <input
                type="checkbox"
                name=""
                class="appearance-none p-1 flex rounded-full items-center w-12 h-6 bg-slate-500 before:block before:h-5 before:w-5 before:bg-white before:rounded-full checked:flex-row-reverse checked:bg-blue-500"
              />
              <!-- <span
                class=""
              >
              </span> -->
              <span class="pl-2">Outline</span>
            </label>
          </div>
        </template>
      </SettingBasic>

      <SettingBasic>
        <template #content>
          <div class="flex pb-2">
            <label
              for=""
              class="flex mr-6"
            >
              <input
                type="checkbox"
                name=""
                class="appearance-none p-1 flex rounded-full items-center w-12 h-6 bg-slate-500 before:block before:h-5 before:w-5 before:bg-white before:rounded-full checked:flex-row-reverse checked:bg-blue-500"
              />
              <span class="pl-2">Small</span>
            </label>
          </div>
        </template>
      </SettingBasic>

      <SettingBasic>
        <template #content>
          <div class="flex pb-2">
            <label
              for=""
              class="flex mr-6"
            >
              <input
                type="checkbox"
                name=""
                id=""
                class="appearance-none p-1 flex rounded-full items-center w-12 h-6 bg-slate-500 before:block before:h-5 before:w-5 before:bg-white before:rounded-full checked:flex-row-reverse checked:bg-blue-500"
              />
              <!-- class="absolute opacity-0 -z-10"
              <span
                class="p-1 flex rounded-full items-center w-12 h-6 bg-slate-500 before:block before:h-5 before:w-5 before:bg-white before:rounded-full"
              >
              </span> -->
              <span class="pl-2">Rounded</span>
            </label>
          </div>
        </template>
      </SettingBasic>

      <SettingBasic>
        <template #content>
          <div class="flex pb-2">
            <label
              for=""
              class="flex mr-6"
            >
              <input
                type="checkbox"
                name=""
                id=""
                class="appearance-none p-1 flex rounded-full items-center w-12 h-6 bg-slate-500 before:block before:h-5 before:w-5 before:bg-white before:rounded-full checked:flex-row-reverse checked:bg-blue-500"
              />

              <span class="pl-2">Disabled</span>
            </label>
          </div>
        </template>
      </SettingBasic>
    </div>

    <div class="m-5">
      <ButtonBasic
        type="danger"
        title-button="Button"
      ></ButtonBasic>
    </div>

    <!-- <div class="flex gap-4 py-5 pr-4 flex-wrap">
      <ButtonBasic>
        <template #content>
          <div class="">
            <button class="bg-slate-500 py-2 px-4 rounded">
              <span class="text-white px-2">Button</span>
            </button>
          </div>
        </template>
      </ButtonBasic>

      <ButtonBasic>
        <template #content>
          <div class="">
            <button
              :class="[buttonOutline ? 'bg-white' : 'bg-transparent']"
              class="py-2 px-4 rounded"
            >
              <span class="px-2">Button</span>
            </button>
          </div>
        </template>
      </ButtonBasic>

      <ButtonBasic>
        <template #content>
          <div class="">
            <button class="bg-blue-500 py-2 px-4 rounded">
              <span class="px-2 text-white">Button</span>
            </button>
          </div>
        </template>
      </ButtonBasic>

      <ButtonBasic>
        <template #content>
          <div class="">
            <button class="bg-green-400 py-2 px-4 rounded">
              <span class="px-2 text-white">Button</span>
            </button>
          </div>
        </template>
      </ButtonBasic>

      <ButtonBasic>
        <template #content>
          <div class="">
            <button class="bg-red-500 py-2 px-4 rounded">
              <span class="px-2 text-white">Button</span>
            </button>
          </div>
        </template>
      </ButtonBasic>

      <ButtonBasic>
        <template #content>
          <div class="">
            <button class="bg-yellow-500 py-2 px-4 rounded text-white">
              <span class="px-2">Button</span>
            </button>
          </div>
        </template>
      </ButtonBasic>
    </div>

    <div class="flex gap-4 py-5 pr-4 flex-wrap">
      <ButtonBasic>
        <template #content>
          <div class="">
            <button class="bg-slate-500 py-2 px-4 rounded text-white">
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
              <span class="px-2">Button</span>
            </button>
          </div>
        </template>
      </ButtonBasic>

      <ButtonBasic>
        <template #content>
          <div class="">
            <button class="bg-white py-2 px-4 rounded">
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
              <span class="px-2">Button</span>
            </button>
          </div>
        </template>
      </ButtonBasic>

      <ButtonBasic>
        <template #content>
          <div class="">
            <button class="bg-blue-500 py-2 px-4 rounded text-white">
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
              <span class="px-2">Button</span>
            </button>
          </div>
        </template>
      </ButtonBasic>

      <ButtonBasic>
        <template #content>
          <div class="">
            <button class="bg-green-400 py-2 px-4 rounded text-white">
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
              <span class="px-2">Button</span>
            </button>
          </div>
        </template>
      </ButtonBasic>

      <ButtonBasic>
        <template #content>
          <div class="">
            <button class="bg-red-500 py-2 px-4 rounded text-white">
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
              <span class="px-2">Button</span>
            </button>
          </div>
        </template>
      </ButtonBasic>

      <ButtonBasic>
        <template #content>
          <div class="">
            <button class="bg-yellow-500 py-2 px-4 rounded text-white">
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
              <span class="px-2">Button</span>
            </button>
          </div>
        </template>
      </ButtonBasic>
    </div>

    <div class="flex gap-4 py-5">
      <ButtonBasic>
        <template #content>
          <div class="bg-slate-500 rounded-md">
            <button class="flex p-2.5 text-white">
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
            </button>
          </div>
        </template>
      </ButtonBasic>

      <ButtonBasic>
        <template #content>
          <div class="bg-white rounded-md">
            <button class="flex p-2.5">
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
            </button>
          </div>
        </template>
      </ButtonBasic>

      <ButtonBasic>
        <template #content>
          <div class="bg-blue-500 rounded-md">
            <button class="flex p-2.5 text-white">
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
            </button>
          </div>
        </template>
      </ButtonBasic>

      <ButtonBasic>
        <template #content>
          <div class="bg-green-400 rounded-md">
            <button class="flex p-2.5 text-white">
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
            </button>
          </div>
        </template>
      </ButtonBasic>

      <ButtonBasic>
        <template #content>
          <div class="bg-red-500 rounded-md">
            <button class="flex p-2.5 text-white">
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
            </button>
          </div>
        </template>
      </ButtonBasic>

      <ButtonBasic>
        <template #content>
          <div class="bg-yellow-500 rounded-md">
            <button class="flex p-2.5 text-white">
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
            </button>
          </div>
        </template>
      </ButtonBasic>
    </div> -->
  </div>
</template>
