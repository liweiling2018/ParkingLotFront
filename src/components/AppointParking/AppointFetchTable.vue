<template>
<div>
<Table border :columns="columns" :data="orderData">
    <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="reverseFetch">预约取车</Button>    
    </template>
</Table>
</div>
</template>

<script>
export default {
    data () {
        return {
            columns: [
                    {
                        title: '订单号',
                        key: 'orderId'
                    },
                    {
                        title: '停车员姓名',
                        key: 'age'
                    },
                    {
                        title: '停车员电话',
                        key: 'address'
                    },
                    {
                        title: '停车时间',
                        key: 'parkTime'
                    },
                    {
                        title: '取车时间',
                        key: 'fetchTime'
                    },
                    {
                        title: '费用',
                        key: 'cost'
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],

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

