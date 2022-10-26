<script setup>
import HomeView from "./views/HomeView.vue";
import CardUser from "./components/CardUser.vue";
import LoginComponent from "./components/LoginComponent.vue";
import ButtonView from "./views/ButtonView.vue";
import NotificationView from "./views/NotificationView.vue";
import ModaView from "./views/ModaView.vue";
import AsideComponent from "./components/AsideComponent.vue";
import NavComponent from "./components/NavComponent.vue";
</script>

<template>
  <div class="bg-slate-800">
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />
    </header>

    <HomeView />
    <CardUser />
    <LoginComponent />
    <ButtonView />
    <NotificationView />
    <ModaView />
    <AsideComponent />
    <NavComponent />
  </div>
</template>
