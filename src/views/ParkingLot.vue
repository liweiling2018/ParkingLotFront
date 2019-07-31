<template>
  <div>
    <AddParkingLot class="add-parking-lot" @changeFilter="changeFilter"></AddParkingLot>
    <Table :columns="columns" :data="getParkingLotList">
      <template slot-scope="{ row }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="change(row)">修改</Button>
        <Button type="error" size="small" @click="freeze(row)">删除</Button>
        <Button v-if="row.tag != 'BLACK_CARD'" type="success" size="small" style="margin-right: 5px" @click="promote(row)">升级</Button>
      </template>
    </Table>
    <Page @on-change='pageChange' class="page-div" :total="100" />
    <Modal v-model="changing" title="修改停车场信息" @on-ok="okChange" @on-cancel="cancelChange">
      <ChangeParkingLotForm v-if="changing" :formValidate='currentParkingLot'></ChangeParkingLotForm>
    </Modal>
    <Modal v-model="freezing" title="删除停车场" @on-ok="okFreeze" @on-cancel="cancelFreeze">
      是否确认删除停车场：{{currentParkingLot.name}}
    </Modal>
    <Modal v-model="promoting" title="升级停车场" @on-ok="okPromote" @on-cancel="cancelPromote">
      是否确认升级停车场：{{currentParkingLot.name}}
    </Modal>
  </div>
</template>


<script>
import {getParkingLotByPage, getValidParkingLotByPage, deleteParkingLot, updateParkingLotTag} from '../assets/api/parkingLot'
import AddParkingLot from '@/components/ParkingLot/AddParkingLot'
import ChangeParkingLotForm from '@/components/ParkingLot/ChangeParkingLotForm'
export default {
  data () {
    return {
      columns: [
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
          title: '等级',
          key: 'tag'
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
      promoting: false,
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
    promote (row) {
      this.promoting = true
      this.currentParkingLot = row
    },
    okChange () {
      this.$root.$emit('changeParkingLot')
    },
    okFreeze () {
      let vm = this
      deleteParkingLot(this, this.currentParkingLot, function (data) {
        vm.$store.commit('deleteParkingLot', vm.currentParkingLot)
        vm.$Message.info('冻结成功')
      }, function (err) {

      })
    },
    okPromote () {
      let vm = this
      let updateTag 
      if(vm.currentParkingLot.tag == 'VIP') {
        updateTag = 'BLACK_CARD'
      }
      if(vm.currentParkingLot.tag == 'ORDINARY') {
        updateTag = 'VIP'
      }
      let data = {}
      data['id'] = vm.currentParkingLot.id
      data['tag'] = updateTag
      updateParkingLotTag(this, data, function (data) {
        vm.$Message.info('升级成功')
        vm.currentParkingLot['tag'] = updateTag
      })
    },
    cancelFreeze () {

    },
    cancelChange () {

    },
    cancelPromote () {

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
      this.pageChange(1)
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
