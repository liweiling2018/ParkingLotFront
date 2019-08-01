<template>
<div class='grab-content-container'>
<Welcome v-if="isLogin == -1"></Welcome>
<div v-if='isLogin != -1' class='grab-content-container'>
  <mu-appbar class="order-top" style="width: 100%; padding-left: 35px" color="#515a6e">
    滴滴停车抢单系统
    <mu-button icon slot="right" @click="refresh()">
      <mu-icon value="refresh"></mu-icon>
    </mu-button>
  </mu-appbar>
    <md-activity-indicator class="loading-div" v-if='loading2'
      :size="50"
      :text-size="26"
      vertical
    >正在获取数据，请稍后</md-activity-indicator>
  <div v-if="isLogin == 0"> 
    <GrabOrderLoginForm @parkingBoyChangePassSuccess='parkingBoyChangePassSuccess' @parkingBoyLoginSuccess="parkingBoyLoginSuccess"></GrabOrderLoginForm>
  </div>
  <div v-if='isLogin == 1' class='grab-content-container' >
    <div v-if="!showingOrderMessage && loading2 == false" class='order-content'>
      <component @parkingBoyExit="parkingBoyExit" @selectOrder='selectOrder' :filterId='currentPageId' :orderList="orderList" :is="GrabOrderListPages[currentPageId].component"></component>
    </div>
    <div v-if="showingOrderMessage" class="order-content">
      <OrderMessage @grabOrderSuccess="grabOrderSuccess" :orderMessage="orderMessage"></OrderMessage>
    </div>
    <mu-bottom-nav @change="changePage" class="order-bottom">
      <mu-bottom-nav-item  @click="search" icon="search" title="搜索订单"></mu-bottom-nav-item>
      <mu-bottom-nav-item icon="list" title="已接订单"></mu-bottom-nav-item>
      <mu-bottom-nav-item icon="done" title="已完成订单" ></mu-bottom-nav-item>
      <mu-bottom-nav-item icon="face" title="用户" ></mu-bottom-nav-item>
    </mu-bottom-nav>
     
  </div>
</div> 
</div>
  

</template>

<script>
import GrabOrderList from '@/components/GrabOrder/GrabOrderList'
import OrderMessage from '@/components/GrabOrder/OrderMessage'
import GrabOrderLoginForm from '@/components/GrabOrder/GrabOrderLoginForm'
import ParkingBoyMessage from '@/components/GrabOrder/ParkingBoyMessage'
import { getOrdersWithFilter, parkingBoyLogin } from '../assets/api/grabOrder'
import Welcome from '@/components/GrabOrder/Welcome'
import {ActivityIndicator} from 'mand-mobile'
export default {
  data () {
    return {
      currentPageId: 0,
      showingOrderMessage: false,
      GrabOrderListPages: [
        { name: '0', component: GrabOrderList },
        { name: '1', component: GrabOrderList },
        { name: '2', component: GrabOrderList },
        { name: '3', component: ParkingBoyMessage },
      ],
      orderList: [],
      normal: {
        position: 'bottom',
        message: '请先进行登录',
        open: false,
        timeout: 3000
      },
      orderMessage: {},
      loading2: false,
      isLogin: -1,
    }
  },
  components: {
    GrabOrderList,
    OrderMessage,
    GrabOrderLoginForm,
    ParkingBoyMessage,
    Welcome,
    [ActivityIndicator.name]: ActivityIndicator,
  },
  methods: {
    changePage (page) {
      if (page == 3) {
        this.currentPageId = page
        this.showingOrderMessage = false
        return
      }
      let vm = this
      this.orderList = []
      this.currentPageId = page
      this.showingOrderMessage = false
      this.loading2 = true
      getOrdersWithFilter(this, vm.$store.getters.getUser.id, page, function (data) {
          vm.orderList = data
          vm.loading2 = false
      }, function (err) {
        vm.loading2 = false
      })
    },
    selectOrder (data) {
      this.orderMessage = data;
      this.showingOrderMessage = true
    },
    grabOrderSuccess (data) {
      if (data.status == 200) {
        data.orderMessage.state = '已预约'
        data.orderMessage.parkingBoyName = localStorage.getItem('username')
        this.orderMessage = data.orderMessage
        this.showingOrderMessage = true
      }
      else {
        this.changePage(0)
      }
    },
    parkingBoyLoginSuccess () {
      this.isLogin = 1
      this.changePage(0)
    },
    parkingBoyChangePassSuccess () {
      this.isLogin = 1
      this.changePage(0)
    },
    parkingBoyExit () {
      localStorage.setItem('username', '')
      localStorage.setItem('password', '')
      this.isLogin = 0
    },
    search () {
    },
    refresh () {
      this.changePage(this.currentPageId)
    }
  },
  mounted () {
    // console.log(navigator.userAgent.indexOf('Mobile'))
    let vm = this
    let user = {username: localStorage.getItem('username'), password: localStorage.getItem('password')}
    if(user.password == '123456') {
      vm.isLogin = 0
    } else {
      parkingBoyLogin(vm, user, function (data) {
        if (data.status == 200 ) {
          vm.$store.commit('setUser', data.data)
          localStorage.setItem('username', user.username)
          localStorage.setItem('password', user.password)
          setTimeout(()=> {
            vm.isLogin = 1
            vm.changePage(0)},
            2000)
          
        }
        else {
          setTimeout(()=> {
            vm.isLogin = 0},
            2000)
        }
      }, function (fail) {
        setTimeout(()=> {
            vm.isLogin = 0},
            2000)
      }, function (err) {
        setTimeout(()=> {
            vm.isLogin = 0},
            2000)
      })
    }
    
  }
}
</script>

<style scoped>
@import url('../assets/styles/graborder.css');
</style>
