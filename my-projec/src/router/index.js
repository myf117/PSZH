import Vue from 'vue'
import Router from 'vue-router'
import home from '../view/home.vue'
import about from '../view/about.vue'
import production from '../view/production.vue';
import wit from '../view/wit.vue';
import comm from '../view/communication.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      name:'home',
      component:home
    },
    {
      path:'/about',
      name:'about',
      component:about
    },
    {
      path:'/wit',
      name:'wit',
      component:wit
    },
    {
      path:'/production',
      name:'production',
      component:production
    },
    {
      path:'/comm',
      name:'comm',
      component:comm
    }
  ]
})
