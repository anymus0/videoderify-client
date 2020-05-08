import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import VuetifyToast from 'vuetify-toast-snackbar' // notification plugin

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// Notification settings
Vue.use(VuetifyToast, {
  x: 'right', // default
  y: 'bottom', // default
  color: 'info', // default
  timeout: 5000, // default
  dismissable: true, // default
  autoHeight: false, // default
  multiLine: false, // default
  vertical: false, // default
  shorts: {
    custom: {
      color: 'purple'
    }
  }
})
