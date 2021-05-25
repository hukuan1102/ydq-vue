<template>
    <div class="echartsContainer">
        <div id="firstChart" class="firstChart" :style="{width: '100%', height: '300px'}"></div>
        <el-divider></el-divider>
        <div id="secondChart" class="secondChart" :style="{width: '100%', height: '300px'}"></div>
    </div>
</template>
<script>
export default {
    name: 'historyDataDetail',
    data(){
        return{
            times: [],
            gsr: [],
            scl: [],
            scr: [],
            id: this.$route.params.id
        }
    },
    mounted(){
        this.getMeasurementData();
    },
    methods:{
        getMeasurementData(){
            this.$fetch("/measurement", {id : this.id}).then((res) => {
                if(res.data != null){
                    this.times = res.data.times;
                    this.gsr = res.data.gsr;
                    this.scl = res.data.scl;
                    this.scr = res.data.scr;
                    this.drawFirstChartLine();
                    this.drawSecondChartLine();
                }
            })
        },
        drawFirstChartLine(){
            let firstChart = this.$echarts.init(document.getElementById('firstChart'))
            firstChart.setOption({
                title: {
                    text: 'Measurement Data',
                    left: 'left'
                },
                tooltip: {
                    trigger: 'axis'
                },
                color:['#2146FF','#E00B60','#0BE064'],
                legend: {
                    data: ['gsr', 'scl', 'scr'],
                    left:'center',
                    textStyle:{
                        color:'#000000',
                        fontSize:16
                    }
                },
                grid: {
                    left: '3%',
                    right: '1%',
                    bottom: '1%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: this.times
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: 'gsr',
                        type: 'line',
                        data: this.gsr,
                        lineStyle: {
                            normal: {
                                color: '#2146FF',
                            }
                        }
                    },
                    {
                        name: 'scl',
                        type: 'line',
                        data: this.scl,
                        lineStyle: {
                            normal: {
                                color: '#E00B60',
                            }
                        }
                    },
                    {
                        name: 'scr',
                        type: 'line',
                        data: this.scr,
                        lineStyle: {
                            normal: {
                                color: '#0BE064',
                            }
                        }
                    }
                ]
            });
        },
        drawSecondChartLine(){
            let firstChart = this.$echarts.init(document.getElementById('secondChart'))
            firstChart.setOption({
                title: {
                    text: 'User Feedback',
                    left: 'left'
                },
                tooltip: {
                    trigger: 'axis'
                },
                color:['#2146FF','#E00B60','#0BE064'],
                legend: {
                    data: ['gsr', 'scl', 'scr'],
                    left:'center',
                    textStyle:{
                        color:'#000000',
                        fontSize:16
                    }
                },
                grid: {
                    left: '3%',
                    right: '1%',
                    bottom: '1%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: this.times
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: 'gsr',
                        type: 'line',
                        data: this.gsr,
                        lineStyle: {
                            normal: {
                                color: '#2146FF',
                            }
                        }
                    },
                    {
                        name: 'scl',
                        type: 'line',
                        data: this.scl,
                        lineStyle: {
                            normal: {
                                color: '#E00B60',
                            }
                        }
                    },
                    {
                        name: 'scr',
                        type: 'line',
                        data: this.scr,
                        lineStyle: {
                            normal: {
                                color: '#0BE064',
                            }
                        }
                    }
                ]
            });
        }
    }
}
</script>
<style lang="scss">
.firstChart, .secondChart{
    width: fit-content;
    height: fit-content;
    margin-top: 10px;
}
</style>