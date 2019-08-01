<template>
  <div>
    <mu-list>
      <mu-sub-header>用户信息</mu-sub-header>
      <mu-list-item button :ripple="false">
        <mu-list-item-action>
          <mu-icon value="account_box"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>用户名: {{userMessage.name}}</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false">
        <mu-list-item-action>
          <mu-icon value="grade"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>年龄: {{userMessage.age}}</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false">
        <mu-list-item-action>
          <mu-icon value="send"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>联系方式: {{userMessage.phone}}</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false">
        <mu-list-item-action>
          <mu-icon value="bookmark"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>Tag: {{userMessage.tag}}</mu-list-item-title>
      </mu-list-item>
    </mu-list>
    <mu-flex class="exit-button" justify-content="center" align-items="center">
      <mu-button @click="exit" round color="#515a6e">退出登录</mu-button>
    </mu-flex>
  </div>
</template>

<script>
import { parkingBoyLogin, parkingBoyLoginOut } from '../../assets/api/grabOrder'
export default {
  data () {
    return {
      userMessage: {}
    }
  },
  methods: {
    exit() {
      localStorage.setItem('username', '')
      localStorage.setItem('password', '')
      this.$store.commit('setUser', {})
      this.$emit('parkingBoyExit')
    }
  },
  mounted () {
    let vm = this
    let user = {username: localStorage.getItem('username'), password: localStorage.getItem('password')}
    parkingBoyLogin(vm, user, function (data) {
      if (data.status == 200) {
         vm.userMessage = data.data
      }
    }, function (fail) {}, function (err) {

    })
  }
}
</script>

<style>
.demo-list-wrap {
  width: 100%;
  max-width: 360px;
}
.exit-button {
  margin-top: 200px;
}
</style>