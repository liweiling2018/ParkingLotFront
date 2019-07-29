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
        <AppointFetchTable v-show="!rightViewEmpty"></AppointFetchTable>
        <EmptyRightView v-show="rightViewEmpty"></EmptyRightView>
                </div>
            </div>
            
        </Content>
        <Footer class="layout-footer-center">2018-2019 &copy; FocusTeam</Footer>
    </Layout>
    
</div>
    

</template>

<script>
import AppointFetchTable from "@/components/AppointParking/AppointFetchTable.vue"
import AppointPark from "@/components/AppointParking/AppointPark.vue"
import EmptyRightView from "@/components/AppointParking/EmptyRightView.vue"
export default {
    data () {
        return {
            reserved: true
        }
    },
    components: {
        AppointFetchTable,
        AppointPark
    },
    mounted () {
        if (this.$store.getters.getUser.type != 1) {
            this.$router.push('/login')
            this.$Message.error('请使用客户账户登录')
        }
    }
}
</script>

<style scoped>
@import url('../assets/styles/reservePark.css');
</style>
