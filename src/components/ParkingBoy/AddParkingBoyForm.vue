<template>

<Form ref="formValidate" :model="formValidate" :rules="ruleInline" :label-width="80">
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
        <RadioGroup v-model="formValidate.gender">
            <Radio label="male">Male</Radio>
            <Radio label="female">Female</Radio>
        </RadioGroup>
    </FormItem>
</Form>
</template>
<script>
import {addParkingBoy} from '../../assets/api/parkingboy'
export default {
    name: 'addParkingBoyForm',
    data () {
        return {
            formValidate: {
                name: '',
                sex: '',
                age: '0',
                phone: '0'
            },
            ruleValidate: {
                name: [
                    { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                ],
                gender: [
                    { required: true, message: 'Please enter gender', trigger: 'change' }
                ],
                age: [
                    { required: true, message: 'Please enter age', trigger: 'change' }
                ],
                phone: [
                    { required: true, message: 'Please enter phone number', trigger: 'change' }
                ]
            }
        }
    },
    methods: {
        
    },
    mounted() {
        let vm = this
        this.$root.$on('addParkingBoy', function () {
            addParkingBoy(vm, vm.formValidate, function (data) {
                if (vm.$store.getters.getParkingBoyList.length < 10) {
                    vm.$store.commit('addParkingBoy', data)
                }
            }, function (err) {
                console.log(err)
            })
        })
    }
}
</script>
