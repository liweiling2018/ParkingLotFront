<<template>
<div class="login_div">
    <div class="login_logo">客户注册</div>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="80" label-position="right">
        <FormItem label="用户名" label-for="username" prop="username">
            <Input type="text" v-model="formInline.username" placeholder="请输入用户名" element-id="username">
                 
            </Input>
        </FormItem>
        <FormItem label="密码" label-for="password" prop="password">
            <Input type="password" v-model="formInline.password" placeholder="请输入密码" element-id="password">
            </Input>
        </FormItem>
        <FormItem label="确认密码" label-for="password_two" prop="password_two">
            <Input type="password" v-model="formInline.password_two" placeholder="请再次输入密码" element-id="password_two">
            </Input>
        </FormItem>
         <FormItem label="车牌号" label-for="car_number" prop="car_number">
            <Input type="text" v-model="formInline.car_number" placeholder="车牌号" element-id="car_number">
                 
            </Input>
        </FormItem>
         <FormItem label="电话号码" label-for="tel" prop="tel">
            <Input type="text" v-model="formInline.tel" placeholder="电话号码" element-id="tel">
                 
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary"long @click="handleSubmit('formInline')">确认注册</Button>
            <Modal
                v-model="modal6"
                title="Title"
                :loading="loading"
                @on-ok="backToLogin">
                <p>注册成功，返回登录界面登录</p>
            </Modal>
        </FormItem>
    </Form>
</div>
</template>
<script>
// import user_login from "../../assets/api/login";
import user_register from "../../assets/api/register";
export default {
  data() {
    return {
      modal6: false,
      loading: true,
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
          { type: "string", min: 6, trigger: "blur" }
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
                vm.$router.push("/login");
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
        this.modal6 = false;
        this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
@import url("../../assets/styles/login.css");
</style>
