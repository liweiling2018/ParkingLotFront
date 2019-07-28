<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import login from '../src/assets/api/login'
export default {
  name: 'App',
  mounted () {
    // let vm = this
    // if (localStorage.getItem('user') == null) {
    //   vm.$router.push('/login')
    // } else {
    //   login(this, localStorage.getItem('user'), function (data) {
    //     vm.$router.push('/')
    //   }, function(fail) {
    //     vm.$router.push('/login')
    //   }, function(err) {
    //     vm.$router.push('/login')
    //   })
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
html, body {
  height: 100%;
}
</style>
