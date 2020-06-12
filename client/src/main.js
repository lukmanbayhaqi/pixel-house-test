import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'
import './assets/style.css'
import VueToastify from 'vue-toastify'

Vue.config.productionTip = false
Vue.use(SuiVue)
Vue.use(VueToastify)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
