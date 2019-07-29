<template>
<div>
<div id="right-view" class="g-right">
    <img src="static\icon.png" alt="" srcset="">
    <span class="empty-text">请预约停车哦！</span>
</div>
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


<style scoped>
@import url('../../assets/styles/emptyRightView.css');
</style>

