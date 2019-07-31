<<template>
<div class="layout login_body">
  <!-- <span style="font-size:50px;font:bold;text-decoration:underline;">滴滴停车系统</span> -->
 <div style="display:inline-block;margin-top:10%;border-radius: 15px;padding: 3%;border-width:1px;border-style:solid;"> 
   <span style="font-size:30px;font:bold;">滴滴停车系统</span>
   </div>
<div class="login_div" style="padding-bottom: 40px;
    border-radius: 15px;padding: 0;border-width:5px;border-style:solid;position: relative;
    top: 7%;">
    <div class="login_logo" style="margin-left:30%;">客户登录</div>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="80" label-position="right">
        <FormItem label="" label-for="username" prop="username" style="margin-left:-20%;margin-right:8%">
            <Input type="text" v-model="formInline.username" placeholder="用户名" element-id="username">
                 
            </Input>
        </FormItem>
        <FormItem label="" label-for="password" prop="password" style="margin-left:-20%;margin-right:8%">
            <Input type="password" v-model="formInline.password" placeholder="请输入密码" element-id="password">
            </Input>
        </FormItem>
        <FormItem style="margin-left:-20%;margin-right:8%">
            <Button type="default" ghost long @click="handleSubmit('formInline')" style="background-color: skyblue;">登录</Button>
        </FormItem>
        <FormItem style="margin-left:-20%;margin-right:8%;opacity: 0.8;background-color: rgb(red, green, blue);">
            <Button type="default" ghost long @click="onRegister" style="background-color: skyblue;">注册</Button>
        </FormItem>
    </Form>
    </div>
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
