import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AllBooks from '@/components/AllBooks'
import Admin from '@/components/AdminCenter'
import Login from '@/components/Login'
import Detail from '@/components/BookDetail'

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
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/Detail/:name',
      name: 'Detail',
      component: Detail
    }]
})
