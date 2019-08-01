<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
            <!-- <img class='home-logo' src="../../static/icon.png" alt="" srcset=""> -->
            <span class="home-logo-title">滴滴停车</span>
          </div>
          <div class="layout-nav">
            <Avatar class="home-user-icon" icon="ios-person" size="large" />
            <span class="home-user-name">Hi! {{$store.getters.getUser.userName}}</span>
            <MenuItem v-for="(item, index) in headMenuItemList" :key = index :name="item.name">
              <Icon :type="item.iconType"></Icon>
              {{item.text}}
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu @on-select="selectSliderMenu" active-name="1" theme="light" width="auto">
            <MenuItem v-for="(item, index) in sliderMenuItemList" :key="index" :name="item.name">{{item.text}}</MenuItem>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Content class="content" :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <component :is="sliderMenuItemList[currentSliderItemIndex].component"></component>
          </Content>
          <Footer class="layout-footer-center">2018-2019 &copy; FocusTeam</Footer>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import ParkingLot from '@/views/ParkingLot'
import ParkingBoy from '@/views/ParkingBoy'
import ParkingOrder from '@/views/ParkingOrder'
import ParkingLotDashBoard from "@/views/ParkingLotDashBoard"
import login from '../assets/api/login'
export default {
  data () {
    return {
      headMenuItemList: [
      ],
      sliderMenuItemList: [
        { name:'1', text: '停车场管理', component: ParkingLot},
        { name:'2', text: '停车员管理', component: ParkingBoy },
        { name:'3', text: '订单管理', component: ParkingOrder},
        { name:'4', text: '停车场DashBoard', component: ParkingLotDashBoard},
      ],
      currentSliderItemIndex: 0 
    }
  },
  methods: {
    selectSliderMenu (name) {
      this.currentSliderItemIndex = parseInt(name) - 1
    }
  },
  mounted () {
    let vm = this
    if (localStorage.getItem('username') == null) {
      vm.$router.push('/login')
    } else if (this.$store.getters.getUser.type && this.$store.getters.getUser.type != 0) {
      vm.$router.push('/login')
      vm.$Message.error('请使用管理员账号登录')
    } else {
      let user = {username: localStorage.getItem('username'), password: localStorage.getItem('password')}
      login(this, user, function (data) {
        if (data.data.type != 0) {
          vm.$router.push('/login')
          vm.$Message.error('请使用管理员账号登录')
        }
        vm.$store.commit('setUser', data.data)
      }, function(fail) {
        vm.$router.push('/login')
      }, function(err) {
        vm.$router.push('/login')
      })
    }
  }
}
</script>


<style scoped>
@import url('../assets/styles/home.css');
</style>
