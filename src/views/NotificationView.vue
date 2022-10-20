<script setup>
import NotificationBasic from "../components/NotificationBasic.vue";
import ButtonBasic from "../components/ButtonBasic.vue";
</script>

<template>
  <div
    class="bg-blue-900 rounded-xl py-3 max-w-xs sm:max-w-md m-2 px-4 lg:max-w-4xl"
  >
    <div class="flex flex-col gap-4">
      <NotificationBasic>
        <template #content>
          <div
            class="text-white rounded-md p-3 bg-blue-500 flex justify-between items-center"
          >
            <div>
              <span class="mr-2">
                <font-awesome-icon icon="fa-solid fa-circle-info" />
              </span>
              <span><b>Info state.</b>NotificationBar</span>
            </div>
            <div>
              <ButtonBasic>
                <template #content>
                  <button class="py-2 px-4 bg-blue-700 rounded-full">
                    <span class="px-2">Button</span>
                  </button>
                </template>
              </ButtonBasic>
            </div>
          </div>
        </template>
      </NotificationBasic>

      <NotificationBasic>
        <template #content>
          <div
            class="text-white rounded-md p-3 bg-green-500 flex justify-between items-center"
          >
            <div>
              <span class="mr-2">
                <font-awesome-icon icon="fa-solid fa-circle-check" />
              </span>
              <span><b>Info state.</b>NotificationBar</span>
            </div>
            <div>
              <ButtonBasic>
                <template #content>
                  <button class="py-2 px-4 bg-blue-500 rounded-full">
                    <span class="px-2">Button</span>
                  </button>
                </template>
              </ButtonBasic>
            </div>
          </div>
        </template>
      </NotificationBasic>

      <NotificationBasic>
        <template #content>
          <div
            class="text-white rounded-md p-3 bg-red-500 flex justify-between items-center"
          >
            <div>
              <span class="mr-2">
                <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />
              </span>
              <span><b>Info state.</b>NotificationBar</span>
            </div>
            <div>
              <ButtonBasic>
                <template #content>
                  <button class="py-2 px-4 bg-blue-500 rounded-full">
                    <span class="px-2">Button</span>
                  </button>
                </template>
              </ButtonBasic>
            </div>
          </div>
        </template>
      </NotificationBasic>

      <NotificationBasic>
        <template #content>
          <div
            class="text-white rounded-md p-3 bg-yellow-500 flex justify-between items-center"
          >
            <div>
              <span class="mr-2">
                <font-awesome-icon icon="fa-solid fa-circle-exclamation" />
              </span>
              <span><b>Info state.</b>NotificationBar</span>
            </div>
            <div>
              <ButtonBasic>
                <template #content>
                  <button class="py-2 px-4 bg-blue-500 rounded-full">
                    <span class="px-2">Button</span>
                  </button>
                </template>
              </ButtonBasic>
            </div>
          </div>
        </template>
      </NotificationBasic>
    </div>
  </div>
</template>
