<template>
<div >

    <div>
        <img style="width:120px;height:100px;position: relative;float: top;bottom: 53px;" src="static\image\338da840e38ded691a195d834c6d6d5b.png"/>
    </div>

    <div >
        <DatePicker size='large' class="datePicker" v-model="appointParkTime" type="datetime" 
        format="yyyy-MM-dd HH:mm" placeholder="选择预约日期(今天或者明天)和时间"></DatePicker>
    </div>
    <div>
        <Button icon="ios-car-outline" class="button-park" @click="appointPark" type="primary" shape="circle" size="large" style="background-color:#696969;font-family: Microsoft Yahei;font-size: 14px;letter-spacing: 0.pt;">确定停车</Button>
    </div>
    <div>
        <Button size="small" icon="ios-power-outline" shape="circle" class="button" @click="exitLogin" style="border-radius: 40px;"></Button>
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
        exitLogin(){
            this.$router.push('/login_customer');
        },
        appointPark () {
            let vm = this
            let time = moment(this.appointParkTime).format('YYYY-MM-DD?HH:mm')
            parkOrder(this, this.$store.getters.getUser.id, time, function (data) {
                if (data.code == 2) {
                    vm.$Notice.open({
                        title: "预约成功",
                        desc: '等待停车员接单'
                    });
                } else if (data.code == 3) {
                    vm.$Notice.open({
                        title: "预约成功",
                        desc: '等待停车员接单'
                    });
                } else if (data.code == 4) {
                    vm.$Notice.open({
                        title: "预约失败",
                        desc: '存在未完成订单'
                    });
                }else if(data.code == 5){
                    vm.$Notice.open({
                        title: "预约失败",
                        desc: data.errMessage
                    });
                }else {
                    vm.$emit('parkOrder', data)
                }
            }, function (err) {

            })
        },
        handleSubmit () {
            
        },
        cancel () {

        },
        test () {
            alert("test")
            console.log("test")

        }


    }
}
</script>

<style scoped>
@import url("../../assets/styles/appointPark.css");
</style>



