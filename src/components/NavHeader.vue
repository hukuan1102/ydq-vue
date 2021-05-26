<template>
    <div class="headerContainer">
        <div class="headerImg">
            <img src="/imgs/logo.png" alt="">
        </div>
        <div class="headerTitle">
            <span>Fontys school of allied health professions</span>
        </div>
        <div class="selectBar">
            <el-tabs v-model="activeName" @tab-click="handleSelectBarClick">
                <el-tab-pane label="Live Data" name="liveData"></el-tab-pane>
                <el-tab-pane label="History Data" name="historyData"></el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
import 'element-ui/lib/theme-chalk/index.css'
export default {
    name: 'nav-header',
    data(){
        return {
            activeName: 'liveData'
        }
    },
    methods: {
        handleSelectBarClick(tab){
            switch(tab.name){
                case 'historyData' :
                    if(this.$route.path !== "/historyData"){
                        this.$router.push("/historyData");
                        this.$store.dispatch('saveSelectBarValue', "1");
                    }
                    break;
                case 'liveData' :
                    if(this.$route.path !== "/"){
                        this.$router.push("/");
                        this.$store.dispatch('saveSelectBarValue', "0");
                    }
                    break;
                default:
                    this.$router.push("/");
            }
        }
    }
}
</script>
<style lang="scss">
.headerContainer{
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #636;
    display: flex;
    .headerImg{
        width: 120px;
        height: 60px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .headerTitle{
        margin-left: 40px;
        width: fit-content;
        height: 60px;
        span{
            color: #ffffff;
            font-size: 16px;
        }
    }
    .selectBar{
        width: fit-content;
        height: 60px;
        line-height: 60px;
        margin-left: 50px;
        .el-tabs__item{
            font-size: 16px;
            color: #ffffff;
        }
        .el-tabs__item.is-active{
            color: #409EFF;
        }
    }
}
</style>