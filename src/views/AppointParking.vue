<template>
<div class="reserve-container">
    <Layout>
        <Header :style="{position: 'fixed', width: '100%'}">
            <div class="reserve-logo"><h2>滴滴停车预约系统</h2> </div>
        </Header>
        <Content :style="{margin: '88px 20px 0',  minHeight: '500px'}">
            <div class="reserve-container">
                <div class='reserve-div'>
                <AppointPark></AppointPark>
                </div>
                <Divider type="vertical" />
                <div class='reserve-div'>
                    <AppointFetch></AppointFetch>
                </div>
            </div>
            
        </Content>
        <Footer class="layout-footer-center">2018-2019 &copy; FocusTeam</Footer>
    </Layout>
    
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
