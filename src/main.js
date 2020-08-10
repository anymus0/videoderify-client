import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify' // path to vuetify export

import VueToast from 'vue-toast-notification'
// Import any of available themes
import 'vue-toast-notification/dist/theme-default.css'
//import 'vue-toast-notification/dist/theme-sugar.css';

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueToast)
