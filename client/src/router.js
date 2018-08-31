import Vue from 'vue'
import Router from 'vue-router'
import mainPage from './views/mainPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    }
  ]
})
