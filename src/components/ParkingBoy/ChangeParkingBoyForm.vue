<template>

<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
    <FormItem label="Name" prop="name">
        <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
    </FormItem>
    <FormItem label="Age" prop="age">
        <Input v-model="formValidate.age" placeholder="Enter your age"></Input>
    </FormItem>
    <FormItem label="Phone" prop="phone">
        <Input v-model="formValidate.phone" placeholder="Enter your age"></Input>
    </FormItem>
    <FormItem label="Sex" prop="sex">
        <RadioGroup v-model="formValidate.sex">
            <Radio label="male">Male</Radio>
            <Radio label="female">Female</Radio>
        </RadioGroup>
    </FormItem>
</Form>
</template>
<script>
import { updateParkingBoy } from '../../assets/api/parkingboy'
export default {
    name: 'addParkingBoyForm',
    data () {
        return {
            ruleValidate: {
                name: [
                    { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                ],
                sex: [
                    { required: true, message: 'Please enter sex', trigger: 'change' }
                ],
                age: [
                    { required: true, message: 'Please enter age', trigger: 'blur' },
                ],
                phone: [
                    { required: true, message: 'Please enter phone number', trigger: 'change' },
                ]
            }
        }
    },
    methods: {
        
    },
    props: {
        formValidate: {}
    },
    mounted() {
        let vm = this
        this.$root.$on('changeParkingBoy', function () {
            updateParkingBoy(vm, vm.formValidate, function (data) {
                vm.$Message.success('修改成功')
            }, function (err) {
            })
        })
        
    }
}
</script>
