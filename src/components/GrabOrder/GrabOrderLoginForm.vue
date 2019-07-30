<template>
<div>
<mu-container class="grab-form-container">
  <mu-form ref="form" :model="validateForm" class="mu-demo-form">
    <mu-form-item label="username"  prop="username" :rules="usernameRules">
      <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
    </mu-form-item>
    <mu-form-item label="password" prop="password" :rules="passwordRules">
        <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
    </mu-form-item>
    <mu-form-item>
      <mu-button color="primary" @click="submit">提交</mu-button>
      <mu-button @click="clear">重置</mu-button>
    </mu-form-item>
  </mu-form>
</mu-container>
</div>

</template>

<script>
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
      }
    }
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
          vm.$store.commit('setUser', data.data)
          localStorage.setItem('username', user.username)
          localStorage.setItem('password', user.password)
          vm.$emit('parkingBoyLoginSuccess')
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
<style>
.grab-form-container {
  margin-top: 20px;
}
</style>