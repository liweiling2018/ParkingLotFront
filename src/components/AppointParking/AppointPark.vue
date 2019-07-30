<template>
<div>
    <div>
        <DatePicker size='large' class="datePicker" v-model="appointParkTime" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择预约日期(今天或者明天)和时间" style="width: 200px"></DatePicker>
    </div>
    <div>
        <Button class="button" @click="appointPark">预约停车</Button>
    </div>
</div>
</template>

<script>
import {parkOrder} from '../../assets/api/appointParking'
import moment from 'moment'
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
            let time = moment(this.appointParkTime).format('YYYY-MM-DD?HH:mm')
            parkOrder(this, this.$store.getters.getUser.id, time, function (data) {
                if (data.code == 3) {
                    vm.$Message.error('暂时匹配不到合适的停车员')
                } else if (data.code == 4) {
                    vm.$Message.error('存在未完成订单')
                }
                else {
                    vm.$emit('parkOrder', data)
                }
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



