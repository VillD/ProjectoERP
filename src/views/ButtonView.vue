<script setup>
import { ref } from "vue";
import ButtonBasic from "../components/ButtonBasic.vue";
import SettingBasic from "../components/SettingBasic.vue";

let button = ref(true)

const buttonOutline = () =>{
  button.value = !button.value
}

</script>
<template>
  <div
    class="bg-blue-900 rounded-xl max-w-xs sm:max-w-md m-2 pl-4 lg:max-w-4xl"
  >
    <h1 class="text-lg font-semibold text-white pt-4 pb-2">Settings</h1>
    <div class="flex flex-wrap">
      <SettingBasic>
        <template #content>
          <div class="flex pb-2">
            <label for="" class="flex mr-6">
              <input
                @click="buttonOutline"
                type="checkbox"
                name=""
                id=""
                class="appearance-none p-1 flex rounded-full items-center w-12 h-6 bg-slate-500 before:block before:h-5 before:w-5 before:bg-white before:rounded-full checked:flex-row-reverse"
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
            <label for="" class="flex mr-6">
              <input
                type="checkbox"
                name=""
                id=""
                class="appearance-none p-1 flex rounded-full items-center w-12 h-6 bg-slate-500 before:block before:h-5 before:w-5 before:bg-white before:rounded-full checked:flex-row-reverse"
              />
              <span class="pl-2">Small</span>
            </label>
          </div>
        </template>
      </SettingBasic>

      <SettingBasic>
        <template #content>
          <div class="flex pb-2">
            <label for="" class="flex mr-6">
              <input
                type="checkbox"
                name=""
                id=""
                class="appearance-none p-1 flex rounded-full items-center w-12 h-6 bg-slate-500 before:block before:h-5 before:w-5 before:bg-white before:rounded-full checked:flex-row-reverse"
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
            <label for="" class="flex mr-6">
              <input
                type="checkbox"
                name=""
                id=""
                class="appearance-none p-1 flex rounded-full items-center w-12 h-6 bg-slate-500 before:block before:h-5 before:w-5 before:bg-white before:rounded-full checked:flex-row-reverse"
              />
              
              <span class="pl-2">Disabled</span>
            </label>
          </div>
        </template>
      </SettingBasic>
    </div>

    <div class="flex gap-4 py-5 pr-4 flex-wrap">
      <ButtonBasic>
        <template #content>
          <div class="">
            <button class="bg-slate-500 py-2 px-4 rounded">
              <span class="px-2">Button</span>
            </button>
          </div>
        </template>
      </ButtonBasic>

      <ButtonBasic>
        <template #content>
          <div class="" >
            <button :class="[buttonOutline ?'bg-white': 'bg-transparent']" 
                    class=" py-2 px-4 rounded">
              <span class="px-2">Button 1</span>
            </button>
          </div>
        </template>
      </ButtonBasic>

      <ButtonBasic>
        <template #content>
          <div class="">
            <button class="bg-blue-500 py-2 px-4 rounded">
              <span class="px-2">Button</span>
            </button>
          </div>
        </template>
      </ButtonBasic>

      <ButtonBasic>
        <template #content>
          <div class="">
            <button class="bg-green-500 py-2 px-4 rounded">
              <span class="px-2">Button</span>
            </button>
          </div>
        </template>
      </ButtonBasic>

      <ButtonBasic>
        <template #content>
          <div class="">
            <button class="bg-red-500 py-2 px-4 rounded">
              <span class="px-2">Button</span>
            </button>
          </div>
        </template>
      </ButtonBasic>

      <ButtonBasic>
        <template #content>
          <div class="">
            <button class="bg-yellow-500 py-2 px-4 rounded">
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
            <button :class="['bg']" class="bg-slate-500 py-2 px-4 rounded">
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
            <button class="bg-blue-500 py-2 px-4 rounded">
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
            <button class="bg-green-500 py-2 px-4 rounded">
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
            <button class="bg-red-500 py-2 px-4 rounded">
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
            <button class="bg-yellow-500 py-2 px-4 rounded">
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
          <div class="bg-green-500 rounded-md">
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
          <div class="bg-red-500 rounded-md">
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
          <div class="bg-yellow-500 rounded-md">
            <button class="flex p-2.5">
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
            </button>
          </div>
        </template>
      </ButtonBasic>
    </div>
  </div>
</template>
