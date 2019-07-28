<template>

<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
    <FormItem label="Name" prop="name">
        <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
    </FormItem>
    <FormItem label="Age" prop="age">
        <Input v-model="formValidate.age" placeholder="Enter your age" number></Input>
    </FormItem>
    <FormItem label="Phone" prop="phone">
        <Input v-model="formValidate.phone" placeholder="Enter your age" number></Input>
    </FormItem>
    <FormItem label="Gender" prop="gender">
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
                gender: '',
                age: 0,
                phone: 0
            },
            ruleValidate: {
                name: [
                    { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                ],
                gender: [
                    { required: true, message: 'Please select gender', trigger: 'change' }
                ],
                age: [
                    { required: true, message: 'Please select age', trigger: 'change' }
                ],
                phone: [
                    { required: true, message: 'Please select phone number', trigger: 'change' }
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

            }, function (err) {
                console.log(err)
            })
        })
    }
}
</script>
