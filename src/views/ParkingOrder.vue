<template>
  <div>
    <Table :columns="columns" :data="parkingOrderList"></Table>
    <Page @on-change='pageChange' class="page-div" :total="100" />
  </div>
</template>


<script>
import { getParkingOrderByPage } from '../assets/api/parkingorder'

export default {
  data () {
    return {
      columns: [
        {
          title: '订单号',
          key: 'orderNum'
        },
        {
          title: '客户姓名',
          key: 'userName'
        },
        {
          title: '停车员姓名',
          key: 'parkingBoyName'
        },
        {
          title: '停车员电话',
          key: 'parkingBoyTel'
        },
        {
          title: '停车场名字',
          key: 'parkingLotName'
        },
        {
          title: '停车时间',
          key: 'startTime'
        },
        {
          title: '取车时间',
          key: 'endTime'
        },
        {
          title: '费用',
          key: 'cost'
        },
        {
          title: "状态",
          key: "state"
        }
      ],
      parkingOrderList: []
    }
  },
  methods: {
    pageChange (page) {
      let vm = this
      getParkingOrderByPage(this, page, function (data) {
        vm.parkingOrderList = data
      }, function (err) {
      })
    }
  },
  mounted () {
    this.pageChange(1)
  }
}
</script>

