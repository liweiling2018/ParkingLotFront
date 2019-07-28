<template>
  <div>
    <AddParkingLot class="add-parking-lot"></AddParkingLot>
    <Table :columns="columns" :data="getParkingLotList">
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="change(index)">修改</Button>
        <Button type="error" size="small" @click="freeze(index)">冻结</Button>
      </template>
    </Table>
    <Page class="page-div" :total="100" />
  </div>
</template>


<script>
import AddParkingLot from '@/components/ParkingLot/AddParkingLot'
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
      ]
    }
  },
  computed: {
    getParkingLotList () {
      return this.$store.getters.getParkingLotList
    }
  },
  components: {
    AddParkingLot
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
@import url('../assets/styles/parkinglot.css');
</style>
