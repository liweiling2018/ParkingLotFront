<template>
<div>
  <mu-appbar class="order-top" style="width: 100%;" color="#515a6e">
    滴滴停车抢单系统
  </mu-appbar>
  <div data-mu-loading-color="secondary" data-mu-loading-overlay-color="rgba(0, 0, 0, .7)" v-loading="loading2">
    <div v-if="!showingOrderMessage" class='order-content'>
      <component @selectOrder='selectOrder' :orderList="orderList" :is="GrabOrderListPages[currentPageId].component"></component>
    </div>
    <div v-if="showingOrderMessage" class="order-content">
      <OrderMessage @grabOrderSuccess="grabOrderSuccess" :orderMessage="orderMessage"></OrderMessage>
    </div>
    <mu-bottom-nav @change="changePage" class="order-bottom">
      <mu-bottom-nav-item icon="search" title="搜索订单"></mu-bottom-nav-item>
      <mu-bottom-nav-item icon="list" title="已接订单"></mu-bottom-nav-item>
      <mu-bottom-nav-item icon="done" title="已完成订单" ></mu-bottom-nav-item>
      <mu-bottom-nav-item icon="face" title="用户" ></mu-bottom-nav-item>
    </mu-bottom-nav>
  </div>
  
  <mu-snackbar :position="normal.position" :open.sync="normal.open">
      {{normal.message}}
      <mu-button flat slot="action" color="secondary" @click="normal.open = false">关闭</mu-button>
    </mu-snackbar>
</div>   

</template>

<script>
import GrabOrderForm from '@/components/GrabOrder/GrabOrderForm'
import GrabOrderList from '@/components/GrabOrder/GrabOrderList'
import OrderMessage from '@/components/GrabOrder/OrderMessage'
import { getOrdersWithFilter, parkingBoyLogin } from '../assets/api/grabOrder'
export default {
  data () {
    return {
      currentPageId: 0,
      showingOrderMessage: false,
      GrabOrderListPages: [
        { name: '0', component: GrabOrderList },
        { name: '1', component: GrabOrderList },
        { name: '2', component: GrabOrderList },
        { name: '3', component: GrabOrderForm },
      ],
      orderList: [],
      normal: {
        position: 'bottom',
        message: '请先进行登录',
        open: false,
        timeout: 3000
      },
      orderMessage: {},
      loading2: false
    }
  },
  components: {
    GrabOrderForm,
    GrabOrderList,
    OrderMessage
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

      })
    },
    openNormalSnackbar () {
      if (this.normal.timer) clearTimeout(this.normal.timer);
      this.normal.open = true;
      this.normal.timer = setTimeout(() => {
        this.normal.open = false;
      }, this.normal.timeout);
    },
    selectOrder (data) {
      this.orderMessage = data;
      this.showingOrderMessage = true
    },
    grabOrderSuccess () {
      this.changePage(0)
    }
  },
  mounted () {
    // console.log(navigator.userAgent.indexOf('Mobile'))
    let vm = this
    let user = {username: localStorage.getItem('username'), password: localStorage.getItem('password')}
    parkingBoyLogin(vm, user, function (data) {
      if (data.status == 200 ) {
        vm.$store.commit('setUser', data.data)
        localStorage.setItem('username', user.username)
        localStorage.setItem('password', user.password)
        vm.changePage(0)
      } else {
        vm.openNormalSnackbar()
      }
    }, function (fail) {}, function (err) {

    })
  }
}
</script>

<style scoped>
@import url('../assets/styles/graborder.css');
</style>
