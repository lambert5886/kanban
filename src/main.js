import Vue from 'vue'
import App from './App'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

import '@/style/common.css'
import '@/style/reset.css'
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios, axios_instance);
var axios_instance = axios.create({
	
  transformRequest: [function (data) {
    data = Qs.stringify(data);
    return data;
  }],

  headers:{'Content-Type':'application/x-www-form-urlencoded'}
})
Vue.use(iView)

console.log(process, 'process')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  
  render: h => h(App)
})
