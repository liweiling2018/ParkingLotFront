<<template>
<div class = "register_body" style="padding-top: 130px">
  <div>
   <img style="width:140px;height:70px"src="static\image\b9edfd56fc5ca566fb877e6039ce4eb2.png"/>
 </div>
<div class="register_div" style="padding-bottom: 40px;border-radius: 15px;padding: 0;border-width:1.4px;border-style:solid;position: relative;top: 4%;">

    <Form   ref="formInline" :model="formInline" :rules="ruleInline" :label-width="30" label-position="right" >
        <FormItem  label-for="username" prop="username" style="margin-right:10%;margin-top:45px;">
            <Input type="text" v-model="formInline.username" placeholder="请输入用户名" element-id="username">
                   <Icon type="ios-contact-outline" slot="prefix"/>
            </Input>
        </FormItem>
        <FormItem  label-for="password" prop="password" style="margin-right:10%">
            <Input type="password" v-model="formInline.password" placeholder="请输入密码" element-id="password">
                   <Icon type="ios-lock" slot="prefix"/>
            </Input>
        </FormItem>
        <FormItem  label-for="password_two" prop="password_two" style="margin-right:10%">
            <Input type="password" v-model="formInline.password_two" placeholder="请再次输入密码" element-id="password_two">
                  <Icon type="md-eye-off" slot="prefix"/>
            </Input>
        </FormItem>
         <FormItem  label-for="car_number" prop="car_number" style="margin-right:10%">
            <Input type="text" v-model="formInline.car_number" placeholder="车牌号" element-id="car_number">
              <Icon type="md-car" slot="prefix"/>
            </Input>
        </FormItem>
         <FormItem  label-for="tel" prop="tel" style="margin-right:10%">
            <Input type="text" v-model="formInline.tel" placeholder="电话号码" element-id="tel">
                        <Icon type="md-call" slot="prefix"/>
            </Input>
        </FormItem>
        <FormItem style="margin-right:10%;">
            <Button type="primary"long @click="handleSubmit('formInline')" 
            style="ackground-color: rgb(red, green, blue);border-color:#0B243B;background-color:#696969;margin-bottom:12%;width:100px;float:left;margin-top:25px;">
              <span style="font-family: Microsoft Yahei;font-size: 13px;letter-spacing: 0.3pt;">确认</span></Button>
            <Modal
                v-model="modal6"
                title="Title"
                :loading="loading"
                @on-ok="backToLogin">
                <p>注册成功，返回登录界面登录</p>
            </Modal>
            <Button type="primary"long @click="handleCancel('formInline')" 
            style="ackground-color: rgb(red, green, blue);border-color:#0B243B;background-color:#696969;margin-bottom:12%;width:100px;float:right;margin-top:25px;">
              <span style="font-family: Microsoft Yahei;font-size: 13px;letter-spacing: 0.3pt;">取消</span></Button>
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
              }else{
                vm.$Message.error(data.msg);
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
