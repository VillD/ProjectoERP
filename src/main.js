import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './index.css'

import App from './App.vue'
import router from './router'
/*Import library fromJSON fontawsome*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faUsers,
  faChevronUp,
  faGear,
  faMoneyBill1,
  faArrowRight,
  faArrowUpRightFromSquare,
  faCircleInfo,
  faCircleCheck,
  faTriangleExclamation,
  faCircleExclamation,
  faXmark,
  faDisplay,
  faArrowRightToBracket,
  faUser,
  faPenToSquare,
  faTable,
  faPlus,
  faListUl,
  faBars,
  faEllipsisVertical,
  faAngleDown,
  faCircleHalfStroke,
  faArrowTrendUp
} from '@fortawesome/free-solid-svg-icons'

import { faLock } from '@fortawesome/free-solid-svg-icons'
library.add(
  faUsers,
  faEllipsisVertical,
  faBars,
  faChevronUp,
  faGear,
  faMoneyBill1,
  faArrowRight,
  faArrowUpRightFromSquare,
  faCircleInfo,
  faCircleCheck,
  faTriangleExclamation,
  faCircleExclamation,
  faXmark,
  faDisplay,
  faArrowRightToBracket,
  faUser,
  faPenToSquare,
  faTable,
  faListUl,
  faPlus,
  faLock,
  faAngleDown,
  faCircleHalfStroke,
  faArrowTrendUp
)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
