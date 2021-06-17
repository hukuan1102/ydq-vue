<template>
    <div class="indexContainer">
        <div id="chart" class="chart" :style="{width: '100%', height: '300px'}"></div>
    </div>
</template>
<script>
import { Message } from 'element-ui';
export default {
    name: 'index',
    data(){
        return{
            path: "ws://192.168.9.101:8080/stressMeasurement/webSocket",
            ws: {},
            chartData: [],
            currentPath: this.$store.state.selectBarValue,
            chart: null
        }
    },
    mounted(){
        this.initEchart();
        this.initWebSocket();
    },
    beforeDestroy: function () {
        console.log('===============beforeDestroy===============');
        this.chart.dispose();
        this.ws.close();
    },
    methods:{
        initWebSocket() {
            this.ws = new WebSocket(this.path)
            this.ws.onopen = () => {
                this.ws.send('connection success');
                this.ws.send('send message1');
            }
            this.ws.onmessage = (data) => {
                console.log("get meassage");
                console.log(data.data);
                // let cData = JSON.parse(data.data)
                // if (this.chartData.length > 20) {
                //     this.chartData.shift()
                // }
                // this.chartData.push(cData)
                // console.log(this.chartData)
            }
            this.ws.onclose = () => {
                console.log('ws connection status：' + this.ws.readyState);
            }
            this.ws.onerror = function (error) {
                console.log(error)
                Message.error('Failed to connect to the websocket');
            }
        },
        initEchart(){
            this.chart = this.$echarts.init(document.getElementById('chart'))
            var option = {
                title: {
                    text: 'Live Data',
                    left: 'left'
                },
                tooltip: {
                    trigger: 'axis'
                },
                color:['#2146FF','#E00B60'],
                legend: {
                    data: ['gsr', 'scl'],
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
                    data: ["1","2","3"]
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: 'gsr',
                        type: 'line',
                        data: ["1","2","3"],
                        lineStyle: {
                            normal: {
                                color: '#2146FF',
                            }
                        }
                    },
                    {
                        name: 'scl',
                        type: 'line',
                        data: ["1","2","3"],
                        lineStyle: {
                            normal: {
                                color: '#E00B60',
                            }
                        }
                    },
                    
                ]
            };
            this.chart.setOption(option);
        }
    }
}
</script>
<style lang="scss">
.chart{
    margin-top: 10px;
}
</style>