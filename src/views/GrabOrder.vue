<template>
<div>
  <mu-appbar style="width: 100%;" color="primary">
    <mu-button icon slot="left">
      <mu-icon value="m"></mu-icon>
    </mu-button>
    滴滴停车抢单系统
    <mu-button flat slot="right">LOGIN</mu-button>
  </mu-appbar>
  <div>
    <GrabOrderForm></GrabOrderForm>
  </div>
</div>   

</template>

<script>
import GrabOrderForm from '@/components/GrabOrder/GrabOrderForm'
export default {
  data () {
    return {

    }
  },
  components: {
    GrabOrderForm
  },
  mounted () {
    console.log(navigator.userAgent.indexOf('Mobile'))
  }
}
</script>

<style scoped>
@import url('../assets/styles/graborder.css');
</style>
