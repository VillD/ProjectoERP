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
  faMoneyBill,
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
  faArrowTrendUp,
  faUserGroup,
  faCartShopping,
  faCreditCard,
  faPaste,
  faTrashCan,
  faEye,
  faCheck,
  faSort,
  faClock,
  faCloud,
  faLock
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faUsers,
  faChevronUp,
  faGear,
  faMoneyBill,
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
  faArrowTrendUp,
  faUserGroup,
  faCartShopping,
  faCreditCard,
  faPaste,
  faTrashCan,
  faEye,
  faCheck,
  faSort,
  faClock,
  faCloud,
  faLock
)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
