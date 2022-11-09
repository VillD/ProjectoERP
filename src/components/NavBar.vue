<script setup></script>
<template>
  <aside class="h-screen md:p-2 w-60 text-slate-200 fixed top-0 left-0">
    <!-- Container -->
    <div
      class="bg-slate-900 flex h-full flex-col md:rounded-2xl overflow-hidden"
    >
      <!-- Header -->
      <div class="h-14 flex justify-center items-center mb-4">
        <h1 class="text-xl text-white font-bold">One</h1>
      </div>
      <!-- Nav -->
      <div class="flex-1 overflow-y-auto">
        <ul class="flex flex-col gap-8">
          <li class="cursor-pointer hover:text-white hover:font-bold">
            <a
              class="flex justify-between"
              href=""
              ><span class="inline-flex justify-center w-16 h-6 items-center"
                ><font-awesome-icon icon="fa-solid fa-display"
              /></span>
              <p class="flex-grow">Dashboard</p>
            </a>
          </li>
          <li class="cursor-pointer hover:text-white hover:font-bold">
            <a
              class="flex justify-between"
              href=""
              ><span class="inline-flex justify-center w-16 h-6 items-center"
                ><font-awesome-icon icon="fa-solid fa-table"
              /></span>
              <p class="flex-grow">Tables</p></a
            >
          </li>
          <li class="cursor-pointer hover:text-white hover:font-bold">
            <a
              class="flex justify-between"
              href=""
              ><span class="inline-flex justify-center w-16 h-6 items-center"
                ><font-awesome-icon icon="fa-solid fa-pen-to-square"
              /></span>
              <p class="flex-grow">Forms</p></a
            >
          </li>
          <li class="cursor-pointer hover:text-white hover:font-bold">
            <div class="flex justify-between">
              <span class="inline-flex justify-center w-16 h-6 items-center">
                <font-awesome-icon icon="fa-solid fa-display" />
              </span>
              <p class="flex-grow"><router-link to="ui">UI</router-link></p>
            </div>
          </li>
          <!-- <div><router-view></router-view></div> -->
          <li class="cursor-pointer hover:text-white hover:font-bold">
            <a
              class="flex justify-between"
              href=""
              ><span class="inline-flex justify-center w-16 h-6 items-center"
                ><font-awesome-icon icon="fa-solid fa-user"
              /></span>
              <p class="flex-grow">Profile</p></a
            >
          </li>
          <li class="cursor-pointer hover:text-white hover:font-bold">
            <a
              class="flex justify-between"
              href=""
              ><span class="inline-flex justify-center w-16 h-6 items-center"
                ><font-awesome-icon icon="fa-solid fa-list-ul"
              /></span>
              <p class="flex-grow">Dropdown</p>
              <span class="flex-grow text-center"
                ><font-awesome-icon icon="fa-solid fa-plus" /></span
            ></a>
          </li>
          <li class="cursor-pointer hover:text-white">
            <a
              class="flex justify-between active:font-semibold"
              href=""
            >
              <span class="inline-flex justify-center w-16 h-6 items-center">
                <font-awesome-icon icon="fa-solid fa-lock" />
              </span>
              <p class="flex-grow">Login</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- Footer -->
      <div
        class="hover:text-white transition flex justify-between py-4 bg-blue-500 hover:bg-blue-600 cursor-pointer"
      >
        <span class="inline-flex justify-center w-16 h-6 items-center">
          <font-awesome-icon icon="fa-solid fa-arrow-right-to-bracket" />
        </span>
        <p class="flex-grow">Logout</p>
      </div>
    </div>
  </aside>
</template>
