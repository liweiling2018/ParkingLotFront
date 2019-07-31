<template>
  <div>
    <mu-sub-header>订单详情</mu-sub-header>
    <div>
      订单编号：
      <mu-text-field v-model="orderMessage.id" disabled></mu-text-field>
    </div>
    <div>
      处理人员：
      <mu-text-field v-model="orderMessage.parkingBoyName" disabled></mu-text-field>
    </div>
    <div>
      开始时间：
      <mu-text-field v-model="orderMessage.startTime" disabled></mu-text-field>
    </div>
    <div>
      结束时间：
      <mu-text-field v-model="orderMessage.endTime" disabled></mu-text-field>
    </div>
    <div>
      订单费用：
      <mu-text-field v-model="orderMessage.cost" disabled></mu-text-field>
    </div>
    <div>
      订单状态：
      <mu-text-field v-model="orderMessage.state" disabled></mu-text-field>
    </div>
    <mu-button class="grab-button" v-if='orderMessage.state == "未处理"' @click="grabOrder" fab color="#515a6e">
      <mu-icon value="add"></mu-icon>
    </mu-button>
  </div>
</template>

<script>
import { grabOrder } from '../../assets/api/grabOrder'
export default {
  data () {
    return {
    }
  },
  props: {
    orderMessage: {}
  },
  methods: {
    grabOrder () {
      let vm = this
      grabOrder(vm, vm.$store.getters.getUser.id, vm.orderMessage.id ,function (data) {
        vm.$emit('grabOrderSuccess')
      }, function (err) {

      })
    }
  }
}
</script>

<style>

.grab-button {
  margin-top: 150px;
}
</style>