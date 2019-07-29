<template>
<div>
<div id="right-view" class="g-right">
    <div class="empty-detail-wrapper">
        <div class="empty-icon">
            <svg class="icon-empty-task-detail empty-task-detail">
                <use xlink:href="#empty-task-detail"></use>
            </svg>
            <svg class="icon-empty-task-detail-pointer fill-theme">
                <use xlink:href="#empty-task-detail-pointer"></use>
            </svg>
        </div>
        <span class="empty-detail-view">请预约停车哦！</span>
    </div>
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

