<template>
<div>
  <mu-list @change="selectOrder" textline="three-line">
    <mu-sub-header>订单列表</mu-sub-header>
    <div v-for="(item, index) in orderList" :key="index">
      <mu-list-item :value="item" avatar button :ripple="true">
        <mu-list-item-action>
          <mu-avatar>
            <mu-icon value="P"></mu-icon>
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>{{item.orderNum}}</mu-list-item-title>
          <mu-list-item-sub-title>{{item.startTime}}</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
    </div>
    
  </mu-list>
</div>
</template>

<script>

import { getOrderMessageById } from '../../assets/api/grabOrder'
export default {
  data () {
    return {
      refreshing: false,
      loading: false,
    }
  },
  methods: {
    selectOrder (value) {
      let vm = this
      getOrderMessageById(this, value.id, function (data) {
        vm.$emit('selectOrder', data)
      }, function (err) {

      })
    },
    refresh () {
      this.refreshing = true;
      this.$refs.container.scrollTop = 0;
      setTimeout(() => {
        this.refreshing = false;
        this.text = this.text === 'List' ? 'Menu' : 'List';
        this.num = 10;
      }, 2000)
    },
    load () {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.num += 10;
      }, 2000)
    }
  },
  components: {
    
  },
  props: {
    orderList: Array
  }
}
</script>