<template>
<div>
<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
    <FormItem label="订单号" prop="orderId">
        <span>{{formValidate.orderId}}</span>
    </FormItem>
    <FormItem label="停车时间" prop="parkTime">
        <span>{{formValidate.parkTime}}</span>
    </FormItem>
    <FormItem label="停车员姓名" prop="parkingBoyName">
        <span>{{formValidate.parkingBoyName}}</span>
    </FormItem>
    <FormItem label="停车员电话" prop="parkingBoyPhoneNumber">
        <span>{{formValidate.parkingBoyPhoneNumber}}</span>
    </FormItem>
     <FormItem label="取车时间" prop="fetchTime">
        <span>{{formValidate.parkingBoyPhoneNumber}}</span>
    </FormItem>
     <FormItem label="费用" prop="cost">
        <span>{{formValidate.parkingBoyPhoneNumber}}</span>
    </FormItem>

</Form>
<Table border :columns="columns" :data="data6"></Table>

</div>
</template>

<script>
export default {
    data () {
        return {
            formValidate: {

            }

        }
    },
    methods: {

    }
    
}
</script>

