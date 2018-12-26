import Vue from 'vue'
import App from './App'

import MpvueRouterPatch from 'mpvue-router-patch'
import Hack from '@/utils/hack'

import { get, post } from '@/utils/http'
import validate from '@/utils/validate'
import Toast from '@/utils/toast'
import Loading from '@/utils/loading'
import Confirm from '@/utils/confirm'

import store from './store'

Vue.use(MpvueRouterPatch)
Vue.use(Hack)

Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$validate = validate
Vue.prototype.$store = store
Vue.prototype.$toast = Toast
Vue.prototype.$loading = Loading
Vue.prototype.$confirm = Confirm

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
