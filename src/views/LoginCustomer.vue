<<template>

<div class="layout login_body" style="padding-top: 130px;background:white no-repeat;opacity: 0.81;">
 <div>
   <img style="width:120px;height:100px"src="static\image\parking.png"/>
 </div>
<div class="login_div" style="padding-bottom: 40px;
    border-radius: 15px;padding: 0;border-width:1.4px;border-style:solid;position: relative;
    top: 3%; margin-div: 50px;">
    <div class="login_logo" style="margin-left:30%;color:#0B243B;">User</div>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="80" label-position="right">
        <FormItem label="" label-for="username" prop="username" style="margin-left:-20%;margin-right:8%;font-family: georgia, serif">
            <Input type="text" v-model="formInline.username" placeholder="用户名" element-id="username">
                 <Icon type="ios-contact" slot="prefix" />
            </Input>
        </FormItem>
        <FormItem label="" label-for="password" prop="password" style="margin-left:-20%;margin-right:8%">
            <Input type="password" v-model="formInline.password" placeholder="请输入密码" element-id="password">
                <Icon type="md-lock" slot="prefix"/>
            </Input>
        </FormItem>
        <FormItem style="margin-left:-20%;margin-right:8%;background-color: rgb(red, green, blue);margin-top:2px;margin-bottom:7px">
            <Button type="default" ghost long @click="handleSubmit('formInline')" 
            style="ackground-color: rgb(red, green, blue);border-color:#0B243B;background-color:#696969;">登录</Button>
        </FormItem>
        <FormItem style="margin-left:-20%;margin-right:8%;background-color: rgb(red, green, blue);">
            <Button type="default" ghost long @click="onRegister" 
            style="ackground-color: rgb(red, green, blue);border-color:#0B243B;background-color:#696969;margin-bottom:12%">注册</Button>
        </FormItem>
    </Form>

    </div>
    <pre style="margin:35% 8% ;text-align:center;font-family: Microsoft Yahei;font-size: 13px;letter-spacing: 0.3pt;" >
    登录注册代表同意用户协议
   隐私政策和中国移动认证服务条款</pre>
</div>
  
</template>
<script>
import user_login from "../assets/api/login";
import Register from "../components/Login/Register";
import { InputItem, Field } from "mand-mobile";
export default {
  data() {
    return {
      formInline: {
        username: "",
        password: ""
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
        ]
      }
    };
  },
  components: {
    Register,
    [InputItem.name]: InputItem,
    [Field.name]: Field
  },
  methods: {
    handleSubmit(name) {
      let vm = this;
      this.$refs[name].validate(valid => {
        if (valid) {
          let user = vm.formInline;
          user_login(
            vm,
            user,
            function(data) {
              if (data.status == 200 && data.data.type == 1) {
                vm.$store.commit("setUser", data.data);
                localStorage.setItem("username", user.username);
                localStorage.setItem("password", user.password);
                vm.$router.push("/appointMobile");
              } else if (data.status==404 &&data.msg=="NOT_FOUND"){
                vm.$Message.error("登录失败，用户名或密码错误");
              }
              else{
              vm.$Message.error("登录失败，用户名或密码错误");
              }
              
            },
            function(fail) {
              vm.$Message.error("登录失败，用户名或密码错误");
            },
            function(data) {
              vm.$Message.error("登录失败，用户名或密码错误");
            }
          );
        } else {
          vm.$Message.error("Fail!");
        }
      });
    },
    onRegister() {
      this.$router.push(`/register`);
    }
  }
};
</script>

<style scoped>
/* @import url('../../assets/styles/login.css'); */
@import url("../assets/styles/login.css");
</style>
