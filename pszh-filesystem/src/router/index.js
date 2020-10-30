import Vue from 'vue'
import Router from 'vue-router'
import main from '../view/main.vue'
import home from '../view/main/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:home
    },
    {
      path:'/main',
      name:'main',
      components:main
    }
  ]
})
