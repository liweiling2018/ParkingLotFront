import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import LoginContainer from '@/views/LoginContainer'
import AppointParking from '@/views/AppointParking'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'LoginContainer',
      component: LoginContainer
    },
    {
      path: '/appoint',
      name: 'AppointParking',
      component: AppointParking
    }
  ]
})
