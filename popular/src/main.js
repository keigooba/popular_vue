import Vue from 'vue'
import Chakra, { CThemeProvider } from '@chakra-ui/vue'
import App from './App.vue'
import router from './routers'

Vue.use(Chakra)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(CThemeProvider, [h(App)])
}).$mount()
