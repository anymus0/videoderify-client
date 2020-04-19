// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import '@fortawesome/fontawesome-free/css/all.css'
import '@/scss/bundle.scss'

Vue.use(Vuetify)

const opts = {
  icons: {
    iconfont: 'fa'
  }
}

export default new Vuetify(opts)
