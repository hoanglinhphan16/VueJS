import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter ({
  mode: 'history',
  routes,
  scrollBehavior(to) {
    // if (savedPosition) {
    //   return savedPosition
    // }
    // return { x: 0, y: 700}
    if (to.hash) {
      return { selector: to.hash }
    }
  }
})

router.beforeEach ((to, from, next) => {
  console.log('Global route guards');
  next()
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
