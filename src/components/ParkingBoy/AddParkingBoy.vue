<template>
    <div>
        <Row>
            <Col span="9">
                <!-- <Button @click="getAll" type="primary">全部</Button> -->
                <Button @click="add" type="primary">新建</Button>
            </Col>
            <Col span="6">
                <Select v-model="filter" style="width:90%">
                    <Option v-for="(item, index) in selectItemList" :key="index" :value="item.value">{{ item.label }}</Option>
                </Select>
            </Col>
            <Col span="6">
                <Input style="width:90%" v-model="filterKeyWord" placeholder="请输入筛选关键字"/>
            </Col>
            <Col span="3">
                <Button type="primary" @click="getFilteredList">搜索</Button>
            </Col>
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
import { getParkingBoyByFilterword, getParkingBoyByPage} from '@/assets/api/parkingboy.js'
export default {
    data () {
        return {
            filter: '',
            filterKeyWord: '',
            selectItemList: [
                {label: '无', index: 0, value: 'all'},
                {label: '等级', index: 1, value: 'tag'},
                {label: '姓名', index: 2, value: 'name'},
                {label: '电话号码', index: 3, value: 'phone'},
                {label: '状态', index: 4, value: 'status'}
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
            this.$root.$emit('addParkingBoy')
        },
        cancel () {
        },
        getFilteredList () {
            let vm = this
            let filterObject = {}
            if(vm.filter == 'all') {
                getParkingBoyByPage (vm, 1, function (data) {
                    vm.$store.commit('setParkingBoy', data)
                }, function (err) {

                })
            }else {
                filterObject[vm.filter] = vm.filterKeyWord
                getParkingBoyByFilterword (vm, filterObject, function (data) {
                    vm.$store.commit('setParkingBoy', data)
            }, function (err) {
            })
            }
            
        },
        getAll () {

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

