<<template>
<div class = "register_body">
<div class="register_div" style="padding-bottom: 40px;
    border-radius: 15px;padding: 0;border-width:5px;border-style:solid;position: relative;
    top: 8%;">
    <div class="register_logo" style="color:#0B243B">客户注册</div>
    <Form   ref="formInline" :model="formInline" :rules="ruleInline" :label-width="80" label-position="right" >
        <FormItem label="用户名" label-for="username" prop="username" style="margin-right:6%">
            <Input type="text" v-model="formInline.username" placeholder="请输入用户名" element-id="username">
                 
            </Input>
        </FormItem>
        <FormItem label="密码" label-for="password" prop="password" style="margin-right:6%">
            <Input type="password" v-model="formInline.password" placeholder="请输入密码" element-id="password">
            </Input>
        </FormItem>
        <FormItem label="确认密码" label-for="password_two" prop="password_two" style="margin-right:6%">
            <Input type="password" v-model="formInline.password_two" placeholder="请再次输入密码" element-id="password_two">
            </Input>
        </FormItem>
         <FormItem label="车牌号" label-for="car_number" prop="car_number" style="margin-right:6%">
            <Input type="text" v-model="formInline.car_number" placeholder="车牌号" element-id="car_number">
                 
            </Input>
        </FormItem>
         <FormItem label="电话号码" label-for="tel" prop="tel" style="margin-right:6%">
            <Input type="text" v-model="formInline.tel" placeholder="电话号码" element-id="tel">
                 
            </Input>
        </FormItem>
        <FormItem style="margin-right:6%">
            <Button type="primary"long @click="handleSubmit('formInline')" 
            style="ackground-color: rgb(red, green, blue);border-color:#0B243B;background-color:#0B243B;margin-bottom:12%">
              <span style="font-weight:bold;">确认注册</span></Button>
            <Modal
                v-model="modal6"
                title="Title"
                :loading="loading"
                @on-ok="backToLogin">
                <p>注册成功，返回登录界面登录</p>
            </Modal>
            <Button type="primary"long @click="handleCancel('formInline')" 
            style="ackground-color: rgb(red, green, blue);border-color:#0B243B;background-color:#0B243B;margin-bottom:12%">
              <span style="font-weight:bold;">取消</span></Button>
        </FormItem>
    </Form>
</div>
</div>
</template>
<script>
// import user_login from "../../assets/api/login";
import user_register from "../../assets/api/register";
export default {
  data() {
    const validatePasswordTwo = (rule, value, callback) => {
        if (value !== this.formInline.password) {
            callback(new Error('两次输入的密码不匹配！'));
        } else {
            callback();
        }
    };
    return {
      modal6: false,
      loading: true,
      validatePasswordTwo,
      formInline: {
        username: "",
        password: "",
        password_two: "",
        car_number: "",
        tel: ""
      },
      ruleInline: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            type: "string",
            min: 6,
            message: "密码长度不能小于6位",
            trigger: "blur"
          }
        ],
        password_two: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { type: "string", min: 6,  trigger: "blur" },
          {validator:validatePasswordTwo}
        ],
        car_number: [
          { required: true, message: "请输入车牌号", trigger: "blur" }
        ],
        tel: [{ required: true, message: "请输入电话号码", trigger: "blur" }]
      }
      // ruleCustom: {
      //     passwdCheck: [{
      //         validator: (rule, value, callback) => {
      //             if (value == this.formInline.password) {
      //                 callback(new Error('The two input passwords do not match!'));
      //             } else {
      //                 callback();
      //             }
      //         },
      //         trigger: 'blur' }
      //     ],
      // }
    };
  },
  methods: {
    handleSubmit(name) {
      let vm = this;
      this.$refs[name].validate(valid => {
        if (valid) {
          let user = vm.formInline;
          user_register(
            vm,
            user,
            function(data) {
              if (data.status == 200) {
                vm.$Message.success("注册成功，跳转到登录页面");
                vm.backToLogin ();
              }
            },
            function(fail) {
              vm.$Message.error("注册失败");
            },
            function(data) {
              vm.$Message.error("注册失败");
            }
          );
        } else {
          vm.$Message.error("Fail!");
        }
      });
    },
    backToLogin () {
        setTimeout(() => {
                    this.modal6 = false;
                }, 200);
        this.$router.push('/login_customer');
    },
    handleCancel(){
      this.$router.push('/login_customer');
    }
  }
};
</script>

<style scoped>
@import url("../../assets/styles/register.css");
</style>
