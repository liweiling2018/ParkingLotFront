<template>
  <div>
    <AddParkingBoy class="add-parking-boy"></AddParkingBoy>
    <Table :columns="columns" :data="getParkingBoyList">
      <template slot-scope="{ row }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="promote(row)">升级</Button>
        <Button type="primary" size="small" style="margin-right: 5px" @click="change(row)">修改</Button>
        <Button type="error" size="small" @click="freeze(row)">冻结</Button>
      </template>
    </Table>
    <Page @on-change='pageChange' class="page-div" :total="100" />
    <Modal v-model="changing" title="修改停车员信息" @on-ok="okChange" @on-cancel="cancelChange">
      <ChangeParkingBoyForm v-show="changing" :formValidate='currentParkingBoy'></ChangeParkingBoyForm>
    </Modal>
    <Modal v-model="freezing" title="冻结停车员" @on-ok="okFreeze" @on-cancel="cancelFreeze">
      是否确认冻结停车员：{{currentParkingBoy.name}}
    </Modal>
    <Modal v-model="promoting" title="升级停车员" @on-ok="okPromote" @on-cancel="cancelPromote">
      是否确认升级停车员：{{currentParkingBoy.name}}
    </Modal>
  </div>
</template>


<script>
import {getParkingBoyByPage, deleteParkingBoy, updateParkingBoyTag} from '../assets/api/parkingboy'
import TableExpand from '@/components/ParkingBoy/TableExpand'
import AddParkingBoy from '@/components/ParkingBoy/AddParkingBoy'
import ChangeParkingBoyForm from '@/components/ParkingBoy/ChangeParkingBoyForm'
export default {
  data () {
    return {
      columns: [
        // {
        //   type: 'expand',
        //   width: 50,
        //   render: (h, params) => {
        //     return h(TableExpand, {
        //       props: {
        //         row: params.row
        //       }
        //     })
        //   }
        // },
        {
          title: 'Id',
          key: 'id'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '电话号码',
          key: 'phone'
        },
        {
          title: '状态',
          key: 'status'
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
      promoting: false,
      changing: false,
      freezing: false,
      currentParkingBoy: {}
    }
  },
  computed: {
    getParkingBoyList () {
      return this.$store.getters.getParkingBoyList
    }
  },
  components: {
    AddParkingBoy,
    TableExpand,
    ChangeParkingBoyForm
  },
  methods: {
    change (row) {
      this.changing = true
      this.currentParkingBoy = row
    },
    promote (row) {
      if(row.tag == 'BLACK_CARD') {
        this.$Message.info('已是最高等级!')
      }else {
        this.promoting = true
        this.currentParkingBoy = row
      }
    },
    freeze (row) {
      this.freezing = true
      this.currentParkingBoy = row
    },
    okChange () {
      this.$root.$emit('changeParkingBoy')
    },
    okFreeze () {
      let vm = this
      deleteParkingBoy(this, this.currentParkingBoy, function (data) {
        vm.$store.commit('deleteParkingBoy', vm.currentParkingBoy)
        vm.$Message.info('冻结成功')
      }, function (err) {
        console.log(err)

      })
    },
    okPromote () {
      let vm = this
      let updateTag
      if(vm.currentParkingBoy.tag == 'VIP') {
        updateTag = 'BLACK_CARD'
      }
      if(vm.currentParkingBoy.tag == 'ORDINARY') {
        updateTag = 'VIP'
      }
      let data = {}
      data['id'] = vm.currentParkingBoy.id
      data['tag'] = updateTag

      updateParkingBoyTag(vm, data, function (data) {
        vm.$Message.info('升级成功')
        vm.currentParkingBoy['tag'] = updateTag
      }, function (err) {
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
      getParkingBoyByPage(this, page, function (data) {
        vm.$store.commit('setParkingBoy', data)
      }, function (err) {
      })
    }
  },
  mounted () {
    this.pageChange(1)
  }
}
</script>

<style scoped>
@import url('../assets/styles/parkingboy.css');
</style>
