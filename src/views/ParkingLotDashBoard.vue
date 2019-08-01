<template>
    <div>
        <div id="parking-lot-chart" :style="{width: '1200px', height: '700px'}"></div>
    </div>
</template>

<script>
import echarts from "echarts"

export default {
        mounted (){
            this.drawChart()
        },
        methods: {
            drawChart() {
                let chart = echarts.init(document.getElementById('parking-lot-chart'), 'light');
                chart.setOption(this.getOptions())
            }, 
            getOptions() {
                let parkingLotList = this.$store.getters.getParkingLotList
                console.log(parkingLotList)
                let parkingLotNames = []
                let parkingLotUseds = []
                let parkingLotRemains = []
                for(let item of parkingLotList) {
                    parkingLotNames.push(item.name)
                    parkingLotUseds.push(item.capacity - item.remine)
                    parkingLotRemains.push(item.remine)
                }
                parkingLotNames.unshift('name')
                parkingLotUseds.unshift('已用量')
                parkingLotRemains.unshift('剩余量')
                let datasource = []
                datasource.push(parkingLotNames)
                datasource.push(parkingLotUseds)
                datasource.push(parkingLotRemains)
                console.log(datasource)
                
                let option = {
                    legend: {},
                    tooltip: {},
                    title: {
                        text: '停车场使用状况'
                    },
                    dataset: {
                        source: datasource
                    },
                    series: [{
                        name: parkingLotNames[1],
                        type: 'pie',
                        radius: 60,
                        center: ['20%', '30%'],
                        encode: {
                            itemName: 'name',
                            value: parkingLotNames[1]
                        }
                    }, 
                    {
                        name: parkingLotNames[2],
                        type: 'pie',
                        radius: 60,
                        center: ['40%', '30%'],
                        encode: {
                            itemName: 'name',
                            value: parkingLotNames[2]
                        }
                    }, 
                    {
                        name: parkingLotNames[3],
                        type: 'pie',
                        radius: 60,
                        center: ['60%', '30%'],
                        encode: {
                            itemName: 'name',
                            value: parkingLotNames[3]
                        }
                    },
                    {
                        name: parkingLotNames[4],
                        type: 'pie',
                        radius: 60,
                        center: ['80%', '30%'],
                        encode: {
                            itemName: 'name',
                            value: parkingLotNames[4]
                        }
                    },
                    {
                        name: parkingLotNames[5],
                        type: 'pie',
                        radius: 60,
                        center: ['20%', '60%'],
                        encode: {
                            itemName: 'name',
                            value: parkingLotNames[5]
                        }
                    }, 
                    {
                        name: parkingLotNames[6],
                        type: 'pie',
                        radius: 60,
                        center: ['40%', '60%'],
                        encode: {
                            itemName: 'name',
                            value: parkingLotNames[6]
                        }
                    }, 
                    {
                        name: parkingLotNames[7],
                        type: 'pie',
                        radius: 60,
                        center: ['60%', '60%'],
                        encode: {
                            itemName: 'name',
                            value: parkingLotNames[7]
                        }
                    },
                    {
                        name: parkingLotNames[8],
                        type: 'pie',
                        radius: 60,
                        center: ['80%', '60%'],
                        encode: {
                            itemName: 'name',
                            value: parkingLotNames[8]
                        }
                    }]
                }
                return option
             }
        }
}
</script>

<style scoped>
@import url('../assets/styles/parkinglotdashboard.css');
</style>
