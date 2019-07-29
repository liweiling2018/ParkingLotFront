<template>
  <Carousel class="login-container" v-model="value1">
    <CarouselItem>
        <div class="demo-carousel"><AdminLogin></AdminLogin></div>
    </CarouselItem>
    <CarouselItem>
        <div class="demo-carousel">用户登录</div>
    </CarouselItem>
  </Carousel>
</template>
<script>
import AdminLogin from '@/components/Login/AdminLogin'
export default {
  data () {
    return {
        value1: 0
    }
  },
  components: {
    AdminLogin
  }
}
</script>

<style scoped>
@import url('../assets/styles/login.css');
</style>
