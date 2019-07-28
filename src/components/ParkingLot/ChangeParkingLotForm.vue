<template>
<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
    <FormItem label="名字" prop="name">
        <Input v-model="formValidate.name" placeholder="Enter parking lot's name"></Input>
    </FormItem>
    <FormItem label="容量" prop="capacity">
        <Input type="number" v-model="formValidate.capacity" placeholder="Enter parking lot's capacity"></Input>
    </FormItem>
</Form>
</template>
<script>
import { updateParkingLot } from '../../assets/api/parkingLot'
export default {
    name: 'changeParkingLotForm',
    data () {
        return {
            ruleValidate: {
                name: [
                    { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                ],
                capacity: [
                    { required: true, message: "Please enter parking lot's capacity", trigger: 'blur' }
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
        console.log("hfhdkfh")
        this.$root.$on('changeParkingLot', function () {
            updateParkingLot(vm, vm.formValidate, function (data) {
            }, function (err) {
            })
        })
    }
}
</script>
