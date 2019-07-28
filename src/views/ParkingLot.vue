<template>
  <div>
    <AddParkingLot class="add-parking-lot" @changeFilter="changeFilter"></AddParkingLot>
    <Table :columns="columns" :data="getParkingLotList">
      <template slot-scope="{ row }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="change(row)">修改</Button>
        <Button type="error" size="small" @click="freeze(row)">冻结</Button>
      </template>
    </Table>
    <Page @on-change='pageChange' class="page-div" :total="100" />
    <Modal v-model="changing" title="修改停车场信息" @on-ok="okChange" @on-cancel="cancelChange">
      <ChangeParkingLotForm v-if="changing" :formValidate='currentParkingLot'></ChangeParkingLotForm>
    </Modal>
    <Modal v-model="freezing" title="冻结停车员" @on-ok="okFreeze" @on-cancel="cancelFreeze">
      是否确认冻结停车场：{{currentParkingLot.name}}
    </Modal>
  </div>
</template>


<script>
import {getParkingLotByPage, getValidParkingLotByPage, deleteParkingLot} from '../assets/api/parkingLot'
import AddParkingLot from '@/components/ParkingLot/AddParkingLot'
import ChangeParkingLotForm from '@/components/ParkingLot/ChangeParkingLotForm'
export default {
  data () {
    return {
      columns: [
        {
          title: 'Id',
          key: 'id'
        },
        {
          title: '名字',
          key: 'name'
        },
        {
          title: '容量',
          key: 'capacity'
        },
        {
          title: '剩余量',
          key: 'remine'
        },
        {
          title: '操作',
          key: 'action',
          slot: 'action'
        }
      ],
      changing: false,
      freezing: false,
      filter: false,
      currentParkingLot: {}
    }
  },
  components: {
    AddParkingLot,
    ChangeParkingLotForm
  },
  computed: {
    getParkingLotList () {
      return this.$store.getters.getParkingLotList
    }
  },
  methods: {
    change (row) {
      this.currentParkingLot = row
        this.changing = true
        
    },
    freeze (row) {
        this.freezing = true
        this.currentParkingLot = row
    },
    okChange () {
      this.$root.$emit('changeParkinglot')
    },
    okFreeze () {
      let vm = this
      deleteParkingLot(this, this.currentParkingLot, function (data) {
        vm.$Message.info('冻结成功')
      })
    },
    cancelFreeze () {

    },
    cancelChange () {

    },
    pageChange (page) {
      let vm = this
      if(this.filter) {
        getValidParkingLotByPage(this, page, function (data) {
          vm.$store.commit('setParkingLot', data)
        }, function (err) {
        })
      }else {
        getParkingLotByPage(this, page, function (data) {
          vm.$store.commit('setParkingLot', data)
        }, function (err) {
        })
      }
    },
    changeFilter (state) {
      this.filter = state
    }
  },
  mounted () {
    this.pageChange(1)
  }
}
</script>

<style scoped>
@import url('../assets/styles/parkinglot.css');
</style>
