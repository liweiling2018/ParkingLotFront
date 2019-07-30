<template>
<div>
<GrabOrderLoginForm @parkingBoyLoginSuccess="parkingBoyLoginSuccess" v-if="userState == 0"></GrabOrderLoginForm>
<GrabOrderChangePassForm @parkingBoyChangePassSuccess='parkingBoyChangePassSuccess' v-if="userState == 1"></GrabOrderChangePassForm>
<ParkingBoyMessage @parkingBoyExit="parkingBoyExit" v-if="userState == 2"></ParkingBoyMessage>
</div>

</template>

<script>
import GrabOrderLoginForm from './GrabOrderLoginForm'
import GrabOrderChangePassForm from './GrabOrderChangePassForm'
import ParkingBoyMessage from './ParkingBoyMessage'
import { parkingBoyLogin } from '../../assets/api/grabOrder'
export default {
  data () {
    return {
      userState: -1
    }
  },
  components: {
    GrabOrderLoginForm,
    GrabOrderChangePassForm,
    ParkingBoyMessage
  },
  methods: {
    parkingBoyLoginSuccess () {
      if (this.$store.getters.getUser.password == '123456') {
        this.userState = 1
      } else {
        this.userState = 2
      }
    },
    parkingBoyChangePassSuccess () {
      this.userState = 0
    },
    parkingBoyExit () {
      this.userState = 0
    },
    login (vm, user) {
      parkingBoyLogin(vm, user, function (data) {
        if (data.status == 200 ) {
          vm.$store.commit('setUser', data.data)
          localStorage.setItem('username', user.username)
          localStorage.setItem('password', user.password)
          vm.$emit('parkingBoyLoginSuccess')
          vm.userState = 2
        }
        else {
          vm.userState = 0
        }
      }, function (fail) {}, function (err) {

      })
    }
  },
  mounted () {
    let vm = this
    let user = {username: localStorage.getItem('username'), password: localStorage.getItem('password')}
    this.login(vm, user)
  }
};
</script>