<template>
    <Transfer
        :data="data"
        :target-keys="targetKeys"
        :render-format="Wrender"
        @on-change="handleChange">
    </Transfer>
</template>
<script>
import { getParkingLotsWithSamTagButNotManage, updateParkingLots } from '../../assets/api/parkingboy'
export default {
    data () {
        return {
            data: [],
            targetKeys: [],
            parkLotData: []
        }
    },
    methods: {
        handleChange (newTargetKeys) {
            let vm = this
            let newLotList =[]
            this.parkLotData.filter ((item) => {
                let index = newTargetKeys.indexOf(item.id)
                if (index >= 0) {
                    newLotList.push(item)
                }
                return true
            })
            updateParkingLots(this, this.row.id, newLotList, function(data) {
                vm.targetKeys = newTargetKeys
            }, function (err) {

            })
        },
        Wrender (item) {
            return item.label;
        },
        getData (leftdata) {
            let vm = this
            let result = []
            for (let i = 0; i < leftdata.length; i++) {
                result.push({
                    key: leftdata[i].id,
                    label: leftdata[i].name
                })
                vm.parkLotData.push(leftdata[i])
            }
            for (let i = 0; i < vm.row.parkingLots.length; i++) {
                result.push({
                    key: vm.row.parkingLots[i].id,
                    label: vm.row.parkingLots[i].name
                })
                vm.parkLotData.push(vm.row.parkingLots[i])
            }
            return result
        },
        getTarget () {
            return this.row.parkingLots.map((item) => {
                return item.id
            })
        }
    },
    props: {
        row: {}
    },
    mounted () {
        let vm = this

        getParkingLotsWithSamTagButNotManage(this, this.row.id, function (resdata) {
            let leftdata = resdata.data
            vm.data = vm.getData(leftdata)
            vm.targetKeys = vm.getTarget()
        }, function (err) {

        })
    }
}
</script>

