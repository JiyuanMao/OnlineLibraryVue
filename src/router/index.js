import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AllBooks from '@/components/AllBooks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/AllBooks',
      name: 'AllBooks',
      component: AllBooks
    }]
})
