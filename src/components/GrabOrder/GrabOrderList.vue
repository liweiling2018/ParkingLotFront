<template>
<div>
  <mu-button icon slot="right" @click="refresh()">
    <mu-icon value="refresh"></mu-icon>
  </mu-button>
  <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
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
  </mu-load-more>
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
    }
  },
  components: {
    
  },
  props: {
    orderList: Array
  }
}
</script>