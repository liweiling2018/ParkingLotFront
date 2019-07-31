<template>
  <div>
    <md-notice-bar
      mode="closable"
      icon="volumn"
      scrollable
    >
      为了确保您的账户安全，请修改默认密码
    </md-notice-bar>
    <mu-container class="grab-form-container">
      <mu-sub-header class="parking-login-header">修改默认密码</mu-sub-header>
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <mu-form-item label="" prop="old_password" :rules="passwordRules">
            <mu-text-field type="password" placeholder="旧密码" v-model="validateForm.old_password" prop="old_password"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="" prop="new_password" :rules="new_passwordRules">
            <mu-text-field type="password" placeholder="新密码" v-model="validateForm.new_password" prop="new_password"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="" prop="new_password2" :rules="new_passwordRules2">
            <mu-text-field type="password" placeholder="确认密码" v-model="validateForm.new_password2" prop="new_password2"></mu-text-field>
        </mu-form-item>
        <mu-form-item>
          <mu-button round color="primary" @click="submit">提交</mu-button>
          <mu-button round @click="clear">重置</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-container>
    <!-- <mu-snackbar :position="normal.position" :open.sync="normal.open">
      {{normal.message}}
      <mu-button flat slot="action" color="secondary" @click="normal.open = false">关闭</mu-button>
    </mu-snackbar> -->
    
  </div>
</template>


<script>
import { parkingBoyChangePass } from '../../assets/api/grabOrder'
import {NoticeBar} from 'mand-mobile'
export default {
  data () {
    return {
      passwordRules: [
        { validate: (val) => !!val, message: '请输入密码'},
        { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度应该在3-10之间'}
      ],
      new_passwordRules: [
        { validate: (val) => !!val, message: '请输入密码'},
        { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度应该在3-10之间'}
      ],
      new_passwordRules2: [
        { validate: (val) => !!val, message: '请再次输入密码'},
        { validate: (val) => val == this.validateForm.new_password, message: '两次密码必须一致'},
      ],
      validateForm: {
        old_password: '',
        new_password: '',
        new_password2: ''
      },
      normal: {
        position: 'bottom',
        message: '请修改默认密码',
        open: false,
        timeout: 3000
      }
    }
  },
  components: {
     [NoticeBar.name]: NoticeBar,
  },
  methods: {
    submit () {
      let vm = this
      this.$refs.form.validate().then((result) => {
        let user = {username: localStorage.getItem('username'), password: vm.validateForm.new_password};
        parkingBoyChangePass(vm, user, function (data) {
          if (data.status == 200) {
            localStorage.setItem('username', user.username)
            localStorage.setItem('password', user.password)
            vm.$emit('parkingBoyChangePassSuccess')             
          }
        }, function (err) {

        })
      });
    },
    clear () {
      this.$refs.form.clear();
      this.validateForm = {
        password: '',
        new_password: '',
        new_password2: ''
      };
    },
    openNormalSnackbar () {
      if (this.normal.timer) clearTimeout(this.normal.timer);
      this.normal.open = true;
      this.normal.timer = setTimeout(() => {
        this.normal.open = false;
      }, this.normal.timeout);
    }
  },
  mounted () {
    this.openNormalSnackbar()
  }
};
</script>

<style scoped>
.grab-form-container {
  margin-top: 20px;
}
</style>
