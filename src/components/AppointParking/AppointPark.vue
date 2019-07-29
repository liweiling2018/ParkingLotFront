<template>
<div>
    <DatePicker v-model="appointParkTime" type="datetime" :options="isValidDate" format="yyyy-MM-dd HH:mm" placeholder="选择预约日期(今天或者明天)和时间" style="width: 200px"></DatePicker>
    <Button @click="appointPark">预约停车</Button>
</div>
</template>

<script>
export default {
    name: "appointParking",
    data() {
        return {
            appointParkTime: "",
            appointing: false
        }
    },
    methods: {
        isValidDate () {

        },
        appointPark () {
            this.appointing = true
        },
        handleSubmit () {
            
        },
        cancel () {

        }


    }
}
</script>

