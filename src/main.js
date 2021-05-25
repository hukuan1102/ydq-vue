import Vue from 'vue'
import router from './router'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import * as echarts from 'echarts'
import {post, fetch, patch, put, deletefn} from './utils/request'

Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;
Vue.prototype.$deletefn = deletefn;


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
