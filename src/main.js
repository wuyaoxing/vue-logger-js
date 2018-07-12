import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import VueRavenjs from 'vue-raven-js'
import VueLoggerjs from 'vue-logger-js'

// Vue.use(VueRavenjs, {
//   dsn: 'https://<key>@sentry.io/<project>'
// })

Vue.use(VueLoggerjs, {
  reportLevels: ['error'],
  printCallback: (level, args) => {
    console.log('printCallback:', level, ...args)
    // if (Vue.$raven && typeof Vue.$raven.context === 'function') {
    //   Vue.$raven.captureException(level, ...args)
    // }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
