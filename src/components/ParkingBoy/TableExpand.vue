<template>
    <Transfer
        :data="data"
        :target-keys="targetKeys"
        filterable
        :filter-method="filterMethod"
        @on-change="handleChange"></Transfer>
</template>
<script>
    export default {
        data () {
            return {
                data: this.getMockData(),
                targetKeys: this.getTargetKeys()
            }
        },
        methods: {
            getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: 'Content ' + i,
                        description: 'The desc of content  ' + i,
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                        .filter(() => Math.random() * 2 > 1)
                        .map(item => item.key);
            },
            handleChange (newTargetKeys) {
                this.targetKeys2 = newTargetKeys;
            },
            filterMethod (data, query) {
                return data.label.indexOf(query) > -1;
            }
        }
    }
</script>


<style scoped>
@import url('../../assets/styles/parkingBoyTableExpand.css');
</style>

