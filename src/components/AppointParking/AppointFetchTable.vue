<template>
<div class="appoint-table-container">
<Row>
    <Col span="12"><h2>订单号</h2></Col>
    <Col span="12">{{1231}}</Col>
</Row>
<Divider></Divider>
<Row>
    <Col span="12"><h2>停车员姓名</h2> </Col>
    <Col span="12">{{123123}}</Col>
</Row>
<Divider></Divider>
<Row>
    <Col span="12"><h2>停车员电话</h2></Col>
    <Col span="12">{{1231}}</Col>
</Row>
<Divider></Divider>
<Row>
    <Col span="12"><h2>停车时间</h2></Col>
    <Col span="12">{{142}}</Col>
</Row>
<Divider></Divider>
<Row>
    <Col span="12"><h2>取车时间</h2></Col>
    <Col span="12">{{123123}}</Col>
</Row>
<Divider></Divider>
<Row>
    <Col span="12"><h2>费用</h2></Col>
    <Col span="12">{{1231}}</Col>
</Row>
<Button class="button-fetch" @click="appointPark">预约取车</Button>
</div>
</template>

<script>
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
    methods: {
        reverseFetch () {
            
        }
    }
    
}
</script>

<style scoped>
@import url('../../assets/styles/appointPark.css');
</style>

