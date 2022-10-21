<script setup></script>
<template>
  <nav class="h-14 bg-slate-400">
    <div class="flex">
      <div class="flex items-center flex-1 h-14">
        <div class="flex px-3">
          <span>
            <font-awesome-icon icon="fa-solid fa-bars" />
          </span>
        </div>
        <div class="px-3 flex my-2 mx-3 items-center">
          <div>
            <input
              class="border-gray-600 h-12 px-3 py-2 focus:outline-none"
              placeholder="Serach"
              type="search"
            />
          </div>
        </div>
      </div>
      <div class="flex items-center flex-none h-14">
        <div class="px-3">
          <span>
            <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>
