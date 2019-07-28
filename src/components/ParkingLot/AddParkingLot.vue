<template>
    <div>
        <Button @click="add" type="primary">新建</Button>
        <Button @click="filter(false)" type="primary">全部</Button>
        <Button type="primary" @click="filter(true)">有空位</Button>
        <Modal
        v-model="adding"
        title="add parking lot"
        @on-ok="handleSubmit"
        @on-cancel="cancel">
             <AddParkingLotForm></AddParkingLotForm>
        </Modal>
    </div>
</template>

<script>
import AddParkingLotForm from './AddParkingLotForm'
import { getValidParkingLotByPage } from '@/assets/api/parkingLot'

export default {
    data () {
        return {
            adding: false
        }
    },
    methods: {
        add () {
            this.adding = true
        },
        handleSubmit () {
            this.$root.$emit('addParkingLot')
        },
        cancel () {
            this.$Message.info('Clicked cancel');
        },
        filter (state) {
            this.$emit("changeFilter", state)
        }
    },
    components: {
        AddParkingLotForm
    }    
}
</script>

<style scoped>
/* @import url('../../assets/styles/addParkinglot.css'); */
</style>

