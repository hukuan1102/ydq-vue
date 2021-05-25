import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import HistoryData from '../views/HistoryData.vue'
import HistoryDataDetail from '../views/HistoryDataDetail.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
        meta: {
            title: "Stress Measurement"
        }
    },
    {
        path: '/historyData',
        name: 'historyData',
        component: HistoryData,
        meta: {
            title: "Stress Measurement"
        }
    },
    {
        path: '/historyData/:id',
        name: 'historyDataDetail',
        component: HistoryDataDetail,
        meta: {
          title: "Stress Measurement"
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router