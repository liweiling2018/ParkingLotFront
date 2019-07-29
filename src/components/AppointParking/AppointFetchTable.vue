<template>
<div class="appoint-table-container">
<Row>
    <Col span="12"><h2>订单号</h2></Col>
    <Col span="12">{{data.id}}</Col>
</Row>
<Divider></Divider>
<Row>
    <Col span="12"><h2>停车员姓名</h2> </Col>
    <Col span="12">{{data.parkingBoyName}}</Col>
</Row>
<Divider></Divider>
<Row>
    <Col span="12"><h2>停车时间</h2></Col>
    <Col span="12">{{data.startTime}}</Col>
</Row>
<Divider></Divider>
<Row>
    <Col span="12"><h2>取车时间</h2></Col>
    <Col span="12">{{data.endTime}}</Col>
</Row>
<Divider></Divider>
<Row>
    <Col span="12"><h2>费用</h2></Col>
    <Col span="12">{{data.cost}}</Col>
</Row>
<Button class="button-fetch" @click="appointPark">预约取车</Button>
</div>
</template>

<script>
import {fetch} from '../../assets/api/appointParking'
export default {
    data () {
        return {
        
        }
    },
    computed: {
        orderData () {
            return this.$store.getters.getParkingOrder
        }
    },
    props: {
        data: {}
    },
    methods: {
        reverseFetch () {
            
        },
        appointPark () {
            let vm = this
            fetch(this, this.data, function (data) {
                vm.$Message.success('预约成功')
                vm.$emit('fetchcar')
            }, function(err) {

            })
        }
    }
    
}
</script>

<style scoped>
@import url('../../assets/styles/appointPark.css');
</style>

