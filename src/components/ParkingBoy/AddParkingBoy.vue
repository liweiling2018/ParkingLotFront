<template>
    <div>
        <Row>
            <Col span="9"><Button @click="add" type="primary">新建</Button></Col>
            <Col span="6">
                <Select v-model="filter" style="width:90%">
                    <Option v-for="(item, index) in selectItemList" :key="index" :value="item.value">{{ item.label }}</Option>
                </Select>
            </Col>
            <Col span="6">
                <Input style="width:90%" v-model="filterKeyWord" placeholder="请输入筛选关键字"  />
            </Col>
            <Col span="3"><Button type="primary">搜索</Button></Col>
        </Row>
        <Modal
        v-model="adding"
        :title='formTitle'
        @on-ok="ok"
        @on-cancel="cancel">
        <AddParkingBoyForm ></AddParkingBoyForm>
        </Modal>
    </div>
</template>

<script>
import AddParkingBoyForm from './AddParkingBoyForm'
export default {
    data () {
        return {
            filter: '',
            filterKeyWord: '',
            selectItemList: [
                {label: 'id', index: 0, value: 'id'},
                {label: '姓名', index: 1, value: 'name'},
                {label: '电话号码', index: 2, value: 'phone'},
                {label: '状态', index: 3, value: 'state'}
            ],
            adding: false,
            formTitle: ''
        }
    },
    methods: {
        add () {
            this.adding = true
            this.formTitle = '添加新员工'
        },
        ok () {
            this.$Message.info('Clicked ok');
        },
        cancel () {
            this.$Message.info('Clicked cancel');
        }
    },
    components: {
        AddParkingBoyForm
    }    
}
</script>

<style scoped>
@import url('../../assets/styles/addParkingboy.css');
</style>

