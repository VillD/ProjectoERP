<script setup>
import BaseTable from './BaseTable.vue'
import { reactive } from 'vue'
const columns = ['id', 'Name', 'Company', 'City', 'Progress', 'Created']
const entries = reactive([
  {
    name: 'Daniel Hand',
    company: 'Laptop-Green',
    city: 'Trujillo',
    progress: 60,
    created: 'Jun 3, 2021'
  },
  {
    name: 'Olen Hand',
    company: 'Table-Green',
    city: 'Laredo',
    progress: 20,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Michel Hand',
    company: 'Chaid-Green',
    city: 'Florencia',
    progress: 50,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Lorenz Hand',
    company: 'Phone-Green',
    city: 'Larco',
    progress: 40,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Waldo Hand',
    company: 'Cielo-Green',
    city: 'Union',
    progress: 20,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Hugo Hand',
    company: 'Inka-Green',
    city: 'Emelyside',
    progress: 10,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Jhon Rodriguez',
    company: 'Coca-Green',
    city: 'Emelyside',
    progress: 30,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Leo Pacora',
    company: 'Coca-Green',
    city: 'Emelyside',
    progress: 30,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Alex Picardo',
    company: 'Coca-Green',
    city: 'Emelyside',
    progress: 30,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Paquito Benite',
    company: 'Coca-Green',
    city: 'Emelyside',
    progress: 30,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Rosa Miro',
    company: 'Coca-Green',
    city: 'Emelyside',
    progress: 30,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Rosa Miro',
    company: 'Coca-Green',
    city: 'Emelyside',
    progress: 30,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Rosa Miro',
    company: 'Coca-Green',
    city: 'Emelyside',
    progress: 30,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Rosa Miro',
    company: 'Coca-Green',
    city: 'Emelyside',
    progress: 30,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Paquito Benite',
    company: 'Coca-Green',
    city: 'Emelyside',
    progress: 30,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Rosa Miro',
    company: 'Coca-Green',
    city: 'Emelyside',
    progress: 30,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Rosa Miro',
    company: 'Coca-Green',
    city: 'Emelyside',
    progress: 30,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Rosa Miro',
    company: 'Coca-Green',
    city: 'Emelyside',
    progress: 30,
    created: 'Mar 3, 2021'
  },
  {
    name: 'Rosa Miro',
    company: 'Coca-Green',
    city: 'Emelyside',
    progress: 30,
    created: 'Mar 3, 2021'
  }
])
function addId() {
  for (let i = 0; i < entries.length; i++) {
    entries[i].id = i
  }
}
addId()
</script>
<template>
  <BaseTable
    :columns="columns"
    :entries="entries"
    :num-entries="[5, 10, 15, 20]"
    :search="true"
    :checkable="true"
  />
</template>
