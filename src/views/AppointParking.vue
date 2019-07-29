<template>
<div class="reserve-container">
    <div v-if="reserved" class='reserve-div'>
        <AppointPark></AppointPark>
    </div>
    <div v-if="!reserved" class='reserve-div'>
        <AppointFetch></AppointFetch>
    </div>
</div>
    

</template>

<script>
import AppointFetch from "@/components/AppointParking/AppointFetchForm.vue"
import AppointPark from "@/components/AppointParking/AppointPark.vue"
export default {
    data () {
        return {
            reserved: true
        }
    },
    components: {
        AppointFetch,
        AppointPark
    }
}
</script>

<style scoped>
@import url('../assets/styles/reservePark.css');
</style>
