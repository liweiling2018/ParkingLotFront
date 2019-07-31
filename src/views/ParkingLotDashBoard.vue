<template>
    <div>
        <ul>
            <li>
                <Row>
                    <Col span="15">
                        <Card>
                            <p slot="title"><span>停车场A</span><span></span></p>
                            <p>停车情况</p>
                            <div id="main" style="width: 200px;height:200px;"></div>
                        </Card>
                    </Col>
                </Row>
            </li>
        </ul>
    </div>
</template>

<script>
import echarts from "echarts"
export default {
        data (){
            return {
                msg:"123"
            }
        },
        mounted (){
            var myChart = echarts.init(document.getElementById('main'));
//             myChart.setOption({
//     title :'环形图',
//     tooltip: {
//         trigger: 'item',
//         formatter: "{a} <br/>{b}: {c} ({d}%)"
//     },
//     legend: {
//         orient: 'vertical',
//         x: 'left',
//         data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
//     },
//     series: [
//         {
//             name:'访问来源',
//             type:'pie',
//             radius: ['50%', '70%'],
//             avoidLabelOverlap: false,
//             label: {
//                 normal: {
//                     show: false,
//                     position: 'center'
//                 },
//                 emphasis: {
//                     show: true,
//                     textStyle: {
//                         fontSize: '30',
//                         fontWeight: 'bold'
//                     }
//                 }
//             },
//             labelLine: {
//                 normal: {
//                     show: false
//                 }
//             },
//             data:[
//                 {value:335, name:'直接访问'},
//                 {value:310, name:'邮件营销'},
//                 {value:234, name:'联盟广告'},
//                 {value:135, name:'视频广告'},
//                 {value:1548, name:'搜索引擎'}
//             ]
//         }
//     ]
// });
}
}
</script>

<style>
ul li{
    list-style: none;
}
</style>
