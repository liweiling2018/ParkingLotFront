<template>
<div class="reserve-container">
    <div v-if="reserved" class='reserve-div'>
        <AppointPark></AppointPark>
    </div>
    <div v-if="!reserved" class='reserve-div'>
        <AppointFetchTable></AppointFetchTable>
    </div>
</div>
    

</template>

<script>
import AppointFetchTable from "@/components/AppointParking/AppointFetchTable.vue"
import AppointPark from "@/components/AppointParking/AppointPark.vue"
export default {
    data () {
        return {
            reserved: false
        }
    },
    components: {
        AppointFetchTable,
        AppointPark
    }
}
</script>

<style scoped>
@import url('../assets/styles/reservePark.css');
</style>
