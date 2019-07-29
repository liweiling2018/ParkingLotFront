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
import {addParkingLot} from '@/assets/api/parkingLot'
export default {
    name: 'addParkingLotForm',
    data () {
        return {
            formValidate: {
                name: '',
                capacity: ''
            },
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
    mounted() {
        let vm = this
        this.$root.$on('addParkingLot', function () {
            addParkingLot(vm, vm.formValidate, function (data) {
                if (vm.$store.getters.getParkingLotList.length < 10) {
                    vm.$store.commit('addParkingLot', data)
                }
            }, function (err) {
                console.log(err)
            })
        })
    }
}
</script>
