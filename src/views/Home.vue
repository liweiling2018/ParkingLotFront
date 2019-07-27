<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
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
export default {
  data () {
    return {
      headMenuItemList: [
      ],
      sliderMenuItemList: [
        { name:'1', text: '停车场管理', component: ParkingLot},
        { name:'2', text: '停车员管理', component: ParkingBoy }
      ],
      currentSliderItemIndex: 0 
    }
  },
  methods: {
    selectSliderMenu (name) {
      this.currentSliderItemIndex = parseInt(name) - 1
    }
  },
  mounted() {
    console.log(process.env.NODE_ENV)
    console.log(this.$store.getters.getConfig)
  }
}
</script>


<style scoped>
@import url('../assets/styles/home.css');
</style>
