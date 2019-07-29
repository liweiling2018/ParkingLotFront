<template>
<div>
    <div>
        <DatePicker size='large' class="datePicker" v-model="appointParkTime" type="datetime" :options="isValidDate" format="yyyy-MM-dd HH:mm" placeholder="选择预约日期(今天或者明天)和时间" style="width: 200px"></DatePicker>
    </div>
    <div>
        <Button class="button" @click="appointPark">预约停车</Button>
    </div>
</div>
</template>

<script>
import {parkOrder} from '../../assets/api/appointParking'
export default {
    name: "appointParking",
    data() {
        return {
            appointParkTime: "",
        }
    },
    methods: {
        isValidDate () {

        },
        appointPark () {
            let vm = this
            parkOrder(this, this.$store.getters.getUser.id, function (data) {
                vm.$emit('parkOrder', data)
            }, function (err) {

            })
        },
        handleSubmit () {
            
        },
        cancel () {

        }


    }
}
</script>

<style scoped>
@import url("../../assets/styles/appointPark.css");
</style>



