import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()  //Vue实例可以作为事件总线

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
