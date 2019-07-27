<template>
  <div>
    <AddParkingBoy class="add-parking-boy"></AddParkingBoy>
    <Table :columns="columns" :data="getParkingBoyList">
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="change(index)">修改</Button>
        <Button type="error" size="small" @click="freeze(index)">冻结</Button>
      </template>
    </Table>
    <Page class="page-div" :total="100" />
  </div>
</template>


<script>
import TableExpand from '@/components/ParkingBoy/TableExpand'
import AddParkingBoy from '@/components/ParkingBoy/AddParkingBoy'
export default {
  data () {
    return {
      columns: [
        {
          type: 'expand',
          width: 50,
          render: (h, params) => {
            return h(TableExpand, {
              props: {
                row: params.row
              }
            })
          }
        },
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
          key: 'state'
        },
        {
          title: '操作',
          key: 'action',
          slot: 'action'
        }
      ]
    }
  },
  computed: {
    getParkingBoyList () {
      return this.$store.getters.getParkingBoyList
    }
  },
  components: {
    AddParkingBoy,
    TableExpand
  },
  methods: {
    change () {

    },
    freeze () {

    }
  }
}
</script>

<style scoped>
@import url('../assets/styles/parkingboy.css');
</style>
