<script setup>
import { computed, ref } from 'vue'
import BaseButton from './BaseButton.vue'
// import UserAvatar from './UserAvatar.vue'
import BaseCard from './BaseCard.vue'
import BaseIcon from './BaseIcon.vue'
import TableCheckbox from './TableCheckbox.vue'
import UserAvatar from './UserAvatar.vue'

const props = defineProps({
  columns: {
    type: Array,
    default: null
  },
  entries: {
    type: Array,
    default: null
  },
  options: {
    type: Array,
    default: null
  },
  checkable: Boolean,
  search: {
    type: Boolean,
    default: false
  }
})
const searchText = ref('')

const currentEntries = ref(5)

const checkedRows = ref([])

const sortKey = ref('')
const sortOrders = ref(props.columns.reduce((o, key) => ((o[key] = 1), o), {}))

let elmInPage = ref(5)

const totalPaginas = computed(() => {
  return Math.ceil(props.entries.length / currentEntries.value)
})

const searching = computed((page) => {
  let { entries } = props
  if (searchText.value) {
    entries = entries.filter((item) => {
      return Object.keys(item).some((key) => {
        return (
          String(item[key])
            .toLowerCase()
            .indexOf(searchText.value.toLowerCase()) > -1
        )
      })
    })
  }
  const key = sortKey.value

  if (key) {
    const order = sortOrders.value[key]
    entries = entries.slice().sort((a, b) => {
      a = a[key]
      b = b[key]

      return (a === b ? 0 : a > b ? 1 : -1) * order
    })
  }

  if (currentEntries.value == 5) {
    return entries.slice(0, 5)
  } else if (currentEntries.value == 10) {
    return entries.slice(0, 10)
  } else if (currentEntries.value == 15) {
    return entries.slice(0, 15)
  } else if (currentEntries.value == 20) {
    return entries.slice(0, 20)
  }

  // item.name.toLowerCase().indexOf(searchText.value.toLowerCase()) != -1
  return entries
})
function sortBy(key) {
  sortKey.value = key
  sortOrders.value[key] *= -1
}

const remove = (arr, cb) => {
  const newArr = []
  arr.forEach((item) => {
    if (!cb(item)) {
      newArr.push(item)
    }
  })
  return newArr
}

const checked = (isChecked, client) => {
  if (isChecked) {
    checkedRows.value.push(client)
  } else {
    checkedRows.value = remove(
      checkedRows.value,
      (row) => row.name === client.name
    )
  }
}
</script>

<template>
  <div class="flex justify-between px-3 py-6">
    <div class="items-center">
      <span class="mr-2">Show:</span>
      <select
        v-model="currentEntries"
        class="bg-slate-700/70 rounded-lg p-1"
      >
        <option
          v-for="option in options"
          :key="option"
        >
          {{ option }}
        </option>
      </select>
    </div>

    <div
      v-if="search"
      class="w-1/4"
    >
      <input
        v-model="searchText"
        type="text"
        class="bg-slate-700/70 rounded-lg py-1 px-2 w-full"
        placeholder="Search here"
      />
    </div>
  </div>
  <div
    v-if="checkedRows.length"
    class="p-3 bg-gray-100/50 dark:bg-slate-800"
  >
    <span
      v-for="(checkedRow, index) in checkedRows"
      :key="index"
      class="inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"
    >
      {{ checkedRow.name }}
    </span>
  </div>
  <div class="text-white"></div>
  <table
    v-if="searching.length"
    class="w-full"
  >
    <thead>
      <tr>
        <th v-if="checkable" />
        <th />
        <th
          v-for="th in columns"
          :key="th"
          class="cursor-pointer"
          @click="sortBy(th)"
        >
          {{ th }}
          <BaseIcon
            class="ml-1 text-xs"
            name="fa-solid fa-sort"
          />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(td, k) in searching"
        :key="k"
      >
        <td
          v-if="checkable"
          class="flex justify-center items-center h-full"
        >
          <TableCheckbox @checked="checked($event, td)" />
        </td>
        <td class="border-b-0 lg:w-6 before:hidden">
          <UserAvatar
            :username="td.name"
            class="w-24 h-24 mx-auto lg:w-6 lg:h-6"
          />
        </td>
        <td>{{ td.name }}</td>
        <td>{{ td.company }}</td>
        <td>{{ td.city }}</td>
        <td>
          <progress
            :value="td.progress"
            max="100"
          ></progress>
        </td>
        <td>{{ td.created }}</td>
        <td class="flex justify-around pr-0">
          <BaseCard><font-awesome-icon icon="fa-solid fa-eye" /></BaseCard>
          <BaseCard type="danger"
            ><font-awesome-icon icon="fa-solid fa-trash-can"
          /></BaseCard>
        </td>
      </tr>
    </tbody>
  </table>
  <div
    class="p-3 lg:px-6 border-t border-slate-800 justify-between items-center block md:flex"
  >
    <div class="grow-0">
      <BaseButton
        v-for="other in totalPaginas"
        :key="other"
        class="mr-3"
        type="dark"
        >{{ other }}</BaseButton
      >
    </div>
    <div>
      <span>Page 1 of 4</span>
    </div>
  </div>
</template>
<style>
thead {
  @apply hidden lg:table-header-group;
}

tr {
  @apply max-w-full block relative border-b-4 border-gray-100
    lg:table-row lg:border-b-0 dark:border-slate-800;
}

tr:last-child {
  @apply border-b-0;
}

td:not(:first-child) {
  @apply lg:border-l lg:border-t-0 lg:border-r-0 lg:border-b-0 lg:border-gray-100 lg:dark:border-slate-700;
}

th {
  @apply lg:text-left lg:p-3;
}

td {
  @apply flex justify-between text-right py-3 px-4 align-top border-b border-gray-100
    lg:table-cell lg:text-left lg:p-3 lg:align-middle lg:border-b-0 dark:border-slate-800;
}

td:last-child {
  @apply border-b-0;
}

tbody tr,
tbody tr:nth-child(odd) {
  @apply lg:hover:bg-gray-100 lg:dark:hover:bg-slate-700/70;
}

tbody tr:nth-child(odd) {
  @apply lg:bg-gray-50 lg:dark:bg-slate-800;
}

td:before {
  content: attr(data-label);
  @apply font-semibold pr-3 text-left lg:hidden;
}
progress {
  @apply h-3 rounded-full overflow-hidden;
}

progress::-webkit-progress-bar {
  @apply bg-blue-200;
}

progress::-webkit-progress-value {
  @apply bg-blue-500;
}

progress::-moz-progress-bar {
  @apply bg-blue-500;
}

progress::-ms-fill {
  @apply bg-blue-500 border-0;
}
</style>
