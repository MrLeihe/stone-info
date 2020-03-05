// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ClassInject from '@/components/abstract/class-inject.vue'
import './styles/scss/global.scss'

Vue.config.productionTip = false

// Apply a mixin globally, which affects every Vue instance created afterwards.
Vue.mixin(ClassInject)

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
