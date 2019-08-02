<template>
<div>
<GrabOrderChangePassForm @parkingBoyChangePassSuccess='parkingBoyChangePassSuccess' v-if="!hasChangePass"></GrabOrderChangePassForm>
<mu-container v-if="hasChangePass" class="grab-form-container">
  <mu-sub-header class="parking-login-header">停车员登录</mu-sub-header>
  <mu-form ref="form" :model="validateForm" class="mu-demo-form">
    <mu-form-item label=""  prop="username" :rules="usernameRules">
      <mu-text-field v-model="validateForm.username" placeholder='username' prop="username"></mu-text-field>
    </mu-form-item>
    <mu-form-item label="" prop="password"  :rules="passwordRules">
        <mu-text-field type="password" placeholder='password' v-model="validateForm.password" prop="password"></mu-text-field>
    </mu-form-item>
    <mu-form-item>
      <mu-button round color="primary" @click="submit">登录</mu-button>
      <mu-button round @click="clear">重置</mu-button>
    </mu-form-item>
  </mu-form>
</mu-container>
</div>

</template>

<script>
import GrabOrderChangePassForm from './GrabOrderChangePassForm'
import { parkingBoyLogin } from '../../assets/api/grabOrder'
export default {
  data () {
    return {
      usernameRules: [
        { validate: (val) => !!val, message: 'Username must be filled in'},
        { validate: (val) => val.length >= 3, message: 'Username length greater than 3'}
      ],
      passwordRules: [
        { validate: (val) => !!val, message: 'Password must be filled in'},
        { validate: (val) => val.length >= 3 && val.length <= 10, message: 'Password length must be greater than 3 and less than 10'}
      ],
      validateForm: {
        username: '',
        password: '',
      },
      hasChangePass: true
    }
  },
  components: {
    GrabOrderChangePassForm
  },
  methods: {
    submit () {
      let vm = this
      this.$refs.form.validate().then((result) => {
        vm.login(vm, vm.validateForm)
      });
    },
    clear () {
      this.$refs.form.clear();
      this.validateForm = {
        username: '',
        password: '',
      };
    },
    login (vm, user) {
      parkingBoyLogin(vm, user, function (data) {
        if (data.status == 200 ) { 
          if (user.password == '123456') {
            vm.$store.commit('setUser', data.data)
            localStorage.setItem('username', user.username)
            vm.hasChangePass = false
          } else {
            vm.$store.commit('setUser', data.data)
            localStorage.setItem('username', user.username)
            localStorage.setItem('password', user.password)
            vm.$emit('parkingBoyLoginSuccess')
          } 
        } else {
          vm.$Notice.open({
              title: "登录失败",
              desc: '用户名或密码错误'
            });
        }
      }, function (fail) {
        vm.$Notice.open({
              title: "登录失败",
              desc: '用户名或密码错误'
            });
      }, function (err) {
        vm.$Notice.open({
              title: "登录失败",
              desc: '用户名或密码错误'
            });
      })
    },
    parkingBoyChangePassSuccess () {
      this.$emit('parkingBoyChangePassSuccess')
    }
  },
  mounted () {
    let vm = this
    let user = {username: localStorage.getItem('username'), password: localStorage.getItem('password')}
    this.login(vm, user)
  }
};
</script>
<style>
.grab-form-container {
  padding: 20px;
}
.mu-form {
  margin-top: 50px;
}
</style>