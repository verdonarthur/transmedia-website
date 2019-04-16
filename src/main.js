import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import Buefy from 'buefy'

Vue.use(Buefy, { defaultIconPack: 'fa' })
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
