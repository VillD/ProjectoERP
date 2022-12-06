<script setup>
import CardWidget from '../components/CardWidget.vue'
import BaseIcon from '../components/BaseIcon.vue'
import CardTransaction from '../components/CardTransaction.vue'
import CardClient from '../components/CardClient.vue'
</script>

<template>
  <div class="p-6 xl:max-w-6xl xl:mx-auto">
    <div class="flex items-center text-white mb-6">
      <span
        class="w-12 h-12 rounded-full bg-slate-900/70 mr-3 inline-flex justify-center items-center"
      >
        <BaseIcon
          class="w-6 h-6"
          name="fa-solid fa-arrow-trend-up"
        />
      </span>
      <h1 class="text-3xl">Overview</h1>
    </div>

    <div class="flex mb-6 gap-6 flex-col lg:flex-row">
      <div class="bg-slate-900/70 rounded-2xl flex-1 p-6">
        <CardWidget
          pill-text="12%"
          pill-icon="fa-solid fa-chevron-up"
          color="success"
          icon-widget="fa-solid fa-user-group"
          title="Clients"
        >
          512
        </CardWidget>
      </div>

      <div class="bg-slate-900/70 rounded-2xl flex-1 p-6">
        <CardWidget
          pill-icon="fa-solid fa-arrow-trend-up"
          pill-text="12%"
          color="danger"
          icon-widget="fa-solid fa-cart-shopping"
          title="Sales"
        >
          $7,770
        </CardWidget>
      </div>

      <div class="bg-slate-900/70 rounded-2xl flex-1 p-6">
        <CardWidget
          pill-icon="fa-solid fa-arrow-trend-up"
          pill-text="12%"
          color="warning"
          icon-widget="fa-solid fa-arrow-trend-up"
          title="Perfomance"
        >
          256%
        </CardWidget>
      </div>
    </div>

    <div class="lg:flex lg:gap-6 mb-6">
      <div class="lg:mb-6 flex flex-col lg:w-1/2">
        <div
          class="flex bg-slate-900/70 rounded-2xl p-6 justify-between items-center mb-6 hover:shadow-lg transition-shadow"
        >
          <CardTransaction
            amount="375.53"
            iconWidget="fa-solid fa-money-bill"
            date="3 days ago"
            business="via Turcotte"
            name="Home Loan Account"
            typeTransaction="Deposit"
            color="success"
          />
        </div>

        <div
          class="flex bg-slate-900/70 rounded-2xl p-6 justify-between items-center mb-6 hover:shadow-lg transition-shadow"
        >
          <CardTransaction
            iconWidget="fa-solid fa-credit-card"
            amount="971.34"
            date="5 days ago"
            business="via Fahey - Keebler"
            name="Savings Account"
            typeTransaction="Payment"
            color="primary"
          />
        </div>

        <div
          class="flex bg-slate-900/70 rounded-2xl p-6 justify-between items-center mb-6 hover:shadow-lg transition-shadow"
        >
          <CardTransaction
            amount="470.26"
            iconWidget="fa-solid fa-paste"
            date="3 days ago"
            business="via Murazik - Graham"
            name="Checking Account"
            typeTransaction="Invoice"
            color="warning"
          />
        </div>

        <div
          class="flex bg-slate-900/70 rounded-2xl p-6 justify-between items-center mb-6 hover:shadow-lg transition-shadow"
        >
          <CardTransaction
            amount="374.63"
            iconWidget="fa-solid fa-paste"
            date="7 days ago"
            business="via Collier - Hintz"
            name="Auto Loan Account"
            typeTransaction="Withdrawal"
            color="danger"
          />
        </div>
      </div>

      <div class="mb-6 flex flex-col lg:w-1/2">
        <div
          class="flex bg-slate-900/70 rounded-2xl p-6 justify-between items-center mb-6 hover:shadow-lg transition-shadow"
        >
          <CardClient
            name="Howell Hand"
            user="percy64"
            date="Mar 3, 2021"
            progrees="70"
            color="success"
            iconPill="fa-solid fa-arrow-trend-up"
          />
        </div>

        <div
          class="flex bg-slate-900/70 rounded-2xl p-6 justify-between items-center mb-6 hover:shadow-lg transition-shadow"
        >
          <CardClient
            name="Hope Howe"
            user="dare.concepcion"
            date="Dec 1, 2021"
            progrees="68"
            color="success"
            iconPill="fa-solid fa-arrow-trend-up"
          />
        </div>

        <div
          class="flex bg-slate-900/70 rounded-2xl p-6 justify-between items-center mb-6 hover:shadow-lg transition-shadow"
        >
          <CardClient
            name="Nelson Jerde"
            user="geovanni.kessler"
            date="May 18, 2021"
            progrees="49"
            color="warning"
            iconPill="fa-solid fa-arrow-trend-up"
          />
        </div>

        <div
          class="flex bg-slate-900/70 rounded-2xl p-6 justify-between items-center mb-6 hover:shadow-lg transition-shadow"
        >
          <CardClient
            name="Kim Weimann"
            user="macejkovic.dashawn"
            date="May 4, 2021"
            progrees="38"
            color="danger"
            iconPill="fa-solid fa-arrow-trend-up"
          />
        </div>
      </div>
    </div>
  </div>
</template>
