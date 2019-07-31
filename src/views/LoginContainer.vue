<template>
<div class="layout login_body">
  <!-- <Carousel class="login-container" v-model="value1">
    <CarouselItem>
        <div class="demo-carousel login_border"><CustomerLogin></CustomerLogin></div>
    </CarouselItem> -->
    <!-- <CarouselItem>
      <div class="demo-carousel"><AdminLogin></AdminLogin></div>
        
    </CarouselItem> 
  </Carousel> -->
  <AdminLogin></AdminLogin>
</div>
</template>
<script>
import AdminLogin from '@/components/Login/AdminLogin'
// import CustomerLogin from '@/components/Login/CustomerLogin'
export default {
  data () {
    return {
        value1: 0
    }
  },
  components: {
    AdminLogin,
    // CustomerLogin
  }
}
</script>

<style scoped>
@import url('../assets/styles/login.css');
</style>
