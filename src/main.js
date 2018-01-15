import Vue from 'vue'
import App from './App'
import router from './router'
import anmatie from 'animate.css'
import wowjs from 'wow.js'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
