<template>
    <div>
        <Button @click="add" type="primary">新建</Button>
        <Button type="primary" @click="filter">有空位</Button>
        <Modal
        v-model="adding"
        title="add parking lot"
        @on-ok="handleSubmit(addParkingLotForm)"
        @on-cancel="cancel">
             <AddParkingLotForm ref="addParkingLotForm"></AddParkingLotForm>
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
        handleSubmit (name) {
            this.$refs[name]['formValidate'].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
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

