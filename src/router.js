import Vue from 'vue'
import Router from 'vue-router'
const Accessible =()=> ({component: import('./views/Accessible.vue')})
const Animation =()=> ({component: import('./views/Animation.vue')})
const XYZ =()=> ({component: import('./views/XYZ.vue')})

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Accessible
    },
    {
      path: '/animation',
      component: Animation
    },
    {
      path: '/xyz',
      component: XYZ
    }
  ]
})
