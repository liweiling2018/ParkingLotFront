<template>
<div class="reserve-container">
    <Layout>
        <!-- <Header :style="{position: 'fixed', width: '100%'}" style="background-color:#696969">
            <div class="reserve-logo" style="background-color:#9"><h2>滴滴停车预约系统</h2> </div>
        </Header> -->
        <Content :style="{margin: '88px 20px 0',  minHeight: '500px'}">
            <div class="reserve-container">
                <div class='reserve-div'>
                <AppointPark @parkOrder="parkOrder"></AppointPark>
                </div>
                <Divider type="vertical" />
                <div class='reserve-div'>
        <AppointFetchTable @fetchcar="fetchcar" :data="order" v-if="!rightViewEmpty"></AppointFetchTable>
        <EmptyRightView v-if="rightViewEmpty"></EmptyRightView>
                </div>
            </div>
        </Content>
        <Footer class="layout-footer-center">2018-2019 &copy; FocusTeam</Footer>
    </Layout>
    
</div>
    

</template>

<script>
import login from '../assets/api/login'
import {getAllReverseOrder} from '../assets/api/appointParking'
import AppointFetchTable from "@/components/AppointParking/AppointFetchTable.vue"
import AppointPark from "@/components/AppointParking/AppointPark.vue"
import EmptyRightView from "@/components/AppointParking/EmptyRightView.vue"
export default {
    data () {
        return {
            reserved: true,
            rightViewEmpty: true,
            order: {}
        }
    },
    components: {
        AppointFetchTable,
        AppointPark,
        EmptyRightView
    },
    methods: {
        parkOrder (data) {
            this.order = data
            this.rightViewEmpty = false
        },
        fetchcar () {
            this.order = {}
            this.rightViewEmpty = true
        }
    },
    mounted () {
        let vm = this
        if (localStorage.getItem('username') == null) {
        vm.$router.push('/login')
        } else if (this.$store.getters.getUser.type && this.$store.getters.getUser.type != 1) {
        vm.$router.push('/login')
        vm.$Message.error('请使用客户账号登录')
        } else {
        let user = {username: localStorage.getItem('username'), password: localStorage.getItem('password')}
        login(this, user, function (data) {
            if(data.data.type != 1) {
                vm.$router.push('/login')
                vm.$Message.error('请使用客户账号登录')
            }
            vm.$store.commit('setUser', data.data)
            getAllReverseOrder(vm, vm.$store.getters.getUser.id, function (data) {
                if (data.id !== -1) {
                    vm.rightViewEmpty = false
                    vm.order = data
                }
            }, function (err) {

            })
        }, function(fail) {
            vm.$router.push('/login')
        }, function(err) {
            vm.$router.push('/login')
        })
        }
        console.log(this.$store.getters.getUser)

        
    }
}
</script>

<style scoped>
@import url('../assets/styles/reservePark.css');
</style>
