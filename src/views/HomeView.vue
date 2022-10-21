<script setup>
import CardBasic from "../components/CardBasic.vue";
import ButtonBasic from "../components/ButtonBasic.vue";
import { ref } from "vue";

const emit = defineEmits(["hideModal"]);

const showModal = ref(false);
// const handleButtonClick = () => {
//   emit("hideModal");
// };

// let modal = ref(false)
// const openModal = ({
//   hidden: modal.value
// });
</script>

<template>
  <div class="">
    <div class="flex w-10/12 text-base mb-2 max-w-xs sm:max-w-md m-2">
      <ButtonBasic>
        <template #content>
          <button
            @click="showModal = true"
            class="bg-blue-500 p-2 text-white rounded-md"
            type="button"
          >
            Show Modal
          </button>
        </template>
      </ButtonBasic>
    </div>

    <div
      v-if="showModal"
      @hideModal="showModal = false"
      class="flex z-50 item-center flex-col justify-center fixed inset-0"
    >
      <div class="absolute inset-0 bg-slate-200 opacity-90"></div>

      <CardBasic class="flex flex-col max-w-xs sm:max-w-md z-50 m-auto">
        <template #header>
          <div class="text-2xl">
            <h1>Please confirm action</h1>
          </div>
        </template>
        <template #body>
          <div class="text-base pt-4 pb-10">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              illum repudiandae saepe ipsam voluptatem error nihil, enim commodi
              vel dolor repellendus sapiente iusto neque sequi maiores, nesciunt
              iure expedita at.
            </p>
          </div>
        </template>
        <template #footer>
          <div class="flex w-10/12 gap-4 text-base">
            <button
              @click="handleButtonClick"
              class="bg-blue-500 p-2 w-1/3 rounded-md"
              type="button"
            >
              Confirm
            </button>
            <button
              class="border-blue-500 w-1/3 p-2 border-2 rounded-md"
              type="button"
              @click="showModal = false"
            >
              Cancel
            </button>
          </div>
        </template>
      </CardBasic>
    </div>
  </div>
</template>
