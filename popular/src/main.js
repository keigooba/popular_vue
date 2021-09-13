import Vue from 'vue'
import Chakra, { CThemeProvider } from '@chakra-ui/vue'
import App from './App.vue'
import router from './routers'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

Vue.use(Chakra)
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_SENDERID,
  appId: process.env.VUE_APP_APPID,
}
firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(CThemeProvider, [h(App)])
}).$mount('#app')
