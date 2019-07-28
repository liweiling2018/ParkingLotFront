<template>
    <div>
        <Button @click="add" type="primary">新建</Button>
        <Button type="primary" @click="filter">有空位</Button>
        <Modal
        v-model="adding"
        title="添加一个停车场"
        @on-ok="ok"
        @on-cancel="cancel">
             <AddParkingLotForm></AddParkingLotForm>
        </Modal>
    </div>
</template>

<script>
import AddParkingLotForm from './AddParkingLotForm'
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
        ok () {
            this.$Message.info('Clicked ok');
        },
        cancel () {
            this.$Message.info('Clicked cancel');
        },
        filter () {

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

