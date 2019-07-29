<template>
<div class="reserve-container">
    <div class='reserve-div'>
        <AppointPark></AppointPark>
    </div>
    <Divider type="vertical" />
    <div class='reserve-div'>
        <AppointFetchTable v-show="!rightViewEmpty"></AppointFetchTable>
        <EmptyRightView v-show="rightViewEmpty"></EmptyRightView>
    </div>
</div>
    

</template>

<script>
import AppointFetchTable from "@/components/AppointParking/AppointFetchTable.vue"
import AppointPark from "@/components/AppointParking/AppointPark.vue"
import EmptyRightView from "@/components/AppointParking/EmptyRightView.vue"
export default {
    data () {
        return {
            reserved: true,
            rightViewEmpty: true
        }
    },
    components: {
        AppointFetchTable,
        AppointPark
    }
}
</script>

<style scoped>
</style>
