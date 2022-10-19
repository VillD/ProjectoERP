<script setup>
import CardBasic from './CardBasic.vue';</script>
<template>

    <div class="m-2">
        <CardBasic class="max-w-xs sm:max-w-md flex justify-between">
            <template #header>
                <div>
                    <span>
                        <img class=" w-12" src="src/assets/avatar.svg" alt="">
                    </span>
                </div>
            </template>
            <template #body>
                <div>
                    <h1 class=" text-xl">Nelson Jerde</h1>
                    <p class=" text-slate-400 text-base">May 18, 2021 @ geovanni.kessler</p>
                </div>
            </template>
            <template #footer>
                <div class=" self-center flex items-center bg-yellow-600 w-min rounded-full text-sm cursor-pointer">
                        <span class="pt-1 pb-1 pl-4 pr-2">
                            <font-awesome-icon icon="fa-solid fa-arrow-right" />
                        </span>
                        <p class="pt-1 pb-1 pr-4">49%</p>
                    </div>
            </template>
        </CardBasic>
    </div>
</template>