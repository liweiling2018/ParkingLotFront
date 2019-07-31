<<template>
<div class="login_div">
    <div class="login_logo">客户登录</div>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="80" label-position="right">
        <FormItem label="用户名" label-for="username" prop="username">
            <Input type="text" v-model="formInline.username" placeholder="用户名" element-id="username">
                 
            </Input>
        </FormItem>
        <FormItem label="密码" label-for="password" prop="password">
            <Input type="password" v-model="formInline.password" placeholder="请输入密码" element-id="password">
            </Input>
        </FormItem>
        <FormItem>
            <Button type="default" ghost long @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
        <FormItem>
            <Button type="default" ghost long @click="onRegister">注册</Button>
        </FormItem>
    </Form>
</div>
</template>
<script>
import user_login from "../../assets/api/login";
import Register from "./Register.vue";
    export default {
        data () {
            return {
                formInline: {
                    username: '',
                    password: ''
                },
                ruleInline: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                        ,
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        components:{
            Register
        },
        methods: {            
            handleSubmit(name) {
                let vm=this;
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        let user=vm.formInline
                        user_login(vm, user, function(data){
                           if(data.status == 200 && data.data.type == 1) {
                               vm.$store.commit('setUser', data.data)
                                localStorage.setItem('username', user.username)
                                localStorage.setItem('password', user.password)
                                vm.$router.push('/appointMobile');
                                
                            }
                        }, function (fail) {
                            vm.$Message.error('登录失败，用户名或密码错误');
                        }, function(data){
                             vm.$Message.error('登录失败，用户名或密码错误');
                        })
                    } else {
                        vm.$Message.error('Fail!');
                    }
                })
            },
            onRegister(){
                this.$router.push(`/register`);
            }
        }
    }
</script>

<style scoped>
@import url('../../assets/styles/login.css');
</style>
