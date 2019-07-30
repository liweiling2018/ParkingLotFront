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
export default {
  data () {
    return {
      userState: 0
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
    }
  },
  mounted () {
  }
};
</script>