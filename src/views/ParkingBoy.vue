<template>
  <div>
    <AddParkingBoy class="add-parking-boy"></AddParkingBoy>
    <Table :columns="columns" :data="getParkingBoyList"></Table>
    <Page class="page-div" :total="100" />
  </div>
</template>


<script>
import AddParkingBoy from '@/components/ParkingBoy/AddParkingBoy'
export default {
  data () {
    return {
      columns: [
        {
          title: '',
          key: 'display'
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
          key: 'action'
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
    AddParkingBoy
  }
}
</script>

<style scoped>
@import url('../assets/styles/parkingboy.css');
</style>
