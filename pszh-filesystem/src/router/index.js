import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/main',
      name:'main',
      component:() => import('../view/main/file.vue'),
      children:[
        {
          path:'menuone-1',
          name:'menuone-1',
          component:() => import('../components/content/main/menuone/menuone-1.vue')
        },
        {
          path:'menuone-2',
          name:'menuone-2',
          component:() => import('../components/content/main/menuone/menuone-2.vue')
        },
        {
          path:'menuone-3',
          name:'menuone-3',
          component:() => import('../components/content/main/menuone/menuone-3.vue')
        },
        {
          path:'menuone-4',
          name:'menuone-4',
          component:() => import('../components/content/main/menuone/menuone-4/menuone-4-1.vue')
        },
        {
          path:'menutwo-1',
          name:'menutwo-1',
          component:() => import('../components/content/main/menutwo/menutwo-1.vue')
        },
        {
          path:'menutwo-2',
          name:'menutwo-2',
          component:() => import('../components/content/main/menutwo/menutwo-2.vue')
        },
        {
          path:'menutwo-3',
          name:'menutwo-3',
          component:() => import('../components/content/main/menutwo/menutwo-3.vue')
        },
        {
          path:'menuthree-1',
          name:'menuthree-1',
          component:() => import('../components/content/main/menuthree/menuthree-1.vue')
        },
        {
          path:'menuthree-2',
          name:'menuthree-2',
          component:() => import('../components/content/main/menuthree/menuthree-2.vue')
        },
        {
          path:'menuthree-3',
          name:'menuthree-3',
          component:() => import('../components/content/main/menuthree/menuthree-3.vue')
        },
        {
          path:'menufour-1',
          name:'menufour-1',
          component:() => import('../components/content/main/menufour/menufour-1.vue')
        },
        {
          path:'menufour-2',
          name:'menufour-2',
          component:() => import('../components/content/main/menufour/menufour-2.vue')
        },
        {
          path:'menufour-3',
          name:'menufour-3',
          component:() => import('../components/content/main/menufour/menufour-3.vue')
        },
        {
          path:'menufour-4',
          name:'menufour-4',
          component:() => import('../components/content/main/menufour/menufour-4/menufour-4-1.vue')
        }
      ]
    },
    {
      path:'/home',
      name:'home',
      component:() => import('../view/home.vue'),
    }
    
  ]
})
