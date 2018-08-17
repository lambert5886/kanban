import Vue from 'vue'
import App from './App'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

import '@/style/common.css'
import '@/style/reset.css'

Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  
  render: h => h(App)
})
