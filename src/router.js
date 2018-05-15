import Vue from 'vue'
import Router from 'vue-router'
const Accessible =()=> ({component: import('./views/Accessible.vue')})
const Animation =()=> ({component: import('./views/Animation')})

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
    }
  ]
})
