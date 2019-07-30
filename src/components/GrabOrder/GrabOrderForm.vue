<template>
<mu-container>
  <mu-form ref="form" :model="validateForm" class="mu-demo-form">
    <mu-form-item label="username" help-text="help text" prop="username" :rules="usernameRules">
      <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
    </mu-form-item>
    <mu-form-item label="password" prop="password" :rules="passwordRules">
        <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
    </mu-form-item>
    <mu-form-item prop="isAgree" :rules="argeeRules">
      <mu-checkbox label="agreed to the user agreement" v-model="validateForm.isAgree"></mu-checkbox>
    </mu-form-item>
    <mu-form-item>
      <mu-button color="primary" @click="submit">submit</mu-button>
      <mu-button @click="clear">reset</mu-button>
    </mu-form-item>
  </mu-form>
</mu-container>
</template>

<script>
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
      argeeRules: [{ validate: (val) => !!val, message: 'Must agree with user agreement'}],
      validateForm: {
        username: '',
        password: '',
        isAgree: false
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate().then((result) => {
        console.log('form valid: ', result)
      });
    },
    clear () {
      this.$refs.form.clear();
      this.validateForm = {
        username: '',
        password: '',
        isAgree: false
      };
    }
  }
};
</script>
<style>
.mu-demo-form {
  width: 100%;
  max-width: 460px;
}
</style>