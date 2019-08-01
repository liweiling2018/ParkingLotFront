import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import LoginContainer from '@/views/LoginContainer'
import AppointParking from '@/views/AppointParking'
import Register from '@/components/Login/Register'
import appointParkingMobile from "@/views/AppointParkingMobile"
import GrabOrder from '@/views/GrabOrder'
import LoginCustomer from '@/views/LoginCustomer'


Vue.use(Router)

export default new Router({
    routes: [{
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
        },
        {
            path: '/appointMobile',
            name: 'appointParkingMobile',
            component: appointParkingMobile
        },
        {
            path: '/register',
            name: "Register",
            component: Register
        },
        {
            path: '/grab',
            name: "Grab",
            component: GrabOrder
        },
        {
            path: '/login_customer',
            name: "LoginCustomer",
            component: LoginCustomer
        }
    ]
})