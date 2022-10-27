<script setup></script>
<template>
  <nav class="max-w-full h-14 bg-slate-800 xl:pl-60">
    <div class="flex md:max-w-md lg:max-w-4xl xl:max-w-6xl xl:mx-auto">
      <div class="flex flex-1 h-14 xl:justify-between">
        <!-- Icon Hamburger -->
        <div class="flex px-3 items-center text-white xl:hidden">
          <span>
            <font-awesome-icon icon="fa-solid fa-bars" />
          </span>
        </div>
        <!-- Icon Hamburger -->
        <!--Input Search-->
        <div
          class="flex my-2 mx-3 items-center text-white hover:text-slate-400"
        >
          <div class="relative">
            <input
              class="border-gray-600 h-12 px-3 py-2 focus:outline-none bg-transparent"
              placeholder="Serach"
              type="text"
            />
          </div>
        </div>
        <!--Input Search-->

        <!-- Menu de navegacion(SAMPLE MENU, PROFILE MENU, icons) -->
        <div class="flex items-center">
          <div
            class="flex lg:px-3 lg:py-2 text-white hover:text-slate-400 cursor-pointer"
          >
            <div class="flex items-center">
              <span class="flex items-center justify-center w-6 h-6"
                ><font-awesome-icon icon="fa-solid fa-bars"
              /></span>
              <span class="px-2">Sample Menu</span>
              <span class="flex items-center justify-center w-6 h-6"
                ><font-awesome-icon icon="fa-solid fa-angle-down"
              /></span>
            </div>
            <div></div>
          </div>
          <div
            class="flex lg:px-3 lg:py-2 text-white hover:text-slate-400 cursor-pointer"
          >
            <span class="flex items-center justify-center w-6 h-6"
              ><img
                class=""
                src="src/assets/avatar.svg"
                alt=""
            /></span>
            <span class="px-2">Jhon Doe</span>
            <span class="flex items-center justify-center w-6 h-6"
              ><font-awesome-icon icon="fa-solid fa-angle-down"
            /></span>
          </div>
          <ul class="flex text-white">
            <li class="hover:text-slate-400 cursor-pointer lg:px-3 lg:py-2">
              <a
                href=""
                class="flex items-center justify-center w-6 h-6"
                ><font-awesome-icon icon="fa-solid fa-circle-half-stroke"
              /></a>
            </li>
            <li class="hover:text-slate-400 cursor-pointer lg:px-3 lg:py-2">
              <a
                href=""
                class="flex items-center justify-center w-6 h-6"
                ><font-awesome-icon icon="fa-solid fa-arrow-right-to-bracket"
              /></a>
            </li>
          </ul>
        </div>
        <!-- Menu de navegacion(SAMPLE MENU, PROFILE MENU, icons) -->
      </div>
      <div class="flex items-center flex-none h-14 text-white">
        <div class="px-3 xl:hidden">
          <span>
            <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>
