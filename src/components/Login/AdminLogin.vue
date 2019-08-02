<<template>
<div>
    <div style="display:inline-block;margin:15% 5% 0 5%;"> 
        <p style="font-size:30px;font:bold;">滴滴停车</p>
    </div>
    <div class="login_div" style="padding-bottom: 40px;
        border-radius: 15px;padding: 0;border-width:5px;border-style:solid;margin-top:3%;">
        <div class="login_logo" style="margin-left:28%;">管理员登录</div>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="130" label-position="right">
            <FormItem label="" label-for="username" prop="username" style="margin-left:-38%;margin-right:12%;">
                <Input type="text" v-model="formInline.username" placeholder="用户名" element-id="username" >
                    <Icon type="md-person" slot="prefix"/>
                </Input>
            </FormItem>
            <FormItem label="" label-for="password" prop="password" style="margin-left:-38%;margin-right:12%;">
                <Input type="password" v-model="formInline.password" placeholder="请输入密码" element-id="password">
                    <Icon type="md-lock" slot="prefix"/>
                </Input>
            </FormItem>
            <FormItem style="margin-left:-38%;margin-right:12%;opacity: 0.8;background-color: rgb(red, green, blue);">
                <Button type="default" ghost long @click="handleSubmit('formInline')" style="background-color:black;">登录</Button>
            </FormItem>
        </Form>
    </div>
</div>
</template>
<script>
import user_login from "../../assets/api/login";
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
              if (data.status == 200 && data.data.type == 0) {
                vm.$store.commit("setUser", data.data);
                localStorage.setItem("username", user.username);
                localStorage.setItem("password", user.password);
                vm.$router.push("/");
              } else {
                vm.$Message.error("登录失败，用户名或密码错误");
              }
            },
            function(fail) {
              vm.$Message.error("登录失败，用户名或密码错误");
            },
            function(err) {
              vm.$Message.error("登录失败，用户名或密码错误");
            }
          );
        } else {
          vm.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>

<style scoped>
@import url("../../assets/styles/login.css");
</style>
