// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import echarts from 'echarts'
import store from './store'
import 'element-ui/lib/theme-default/index.css'
import 'element-ui/lib/index.js'
import AMap from 'vue-amap';
// import Vuex from 'vuex'
// Vue.use(Vuex)
/* Vuex*/
// let store = new Vuex.Store({
//     state: {
//         totalPrice: 0
//     },
//     getters: { //用来获取状态里面的值
//         getTotal(state) {
//             return state.totalPrice
//         }
//     },
//     mutations: { //只能进行同步操作
//         increment(state, price) {
//             state.totalPrice += price
//         },
//         decrement(state, price) {
//             state.totalPrice -= price
//         }
//     },
//     actions: { //可以进行异步的操作 actions不能直接调取state只能通过mutations
//         increse(context, price) {
//             context.commit('increment', price)
//                 // api(id,function(price){可以根据后台返回的一个id值进行回调函数实现异步操作
//                 //     context.commit('increment', price)
//                 // })
//         }
//     },
// })

Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(AMap);

// 初始化vue-amap
AMap.initAMapApiLoader({
    // 申请的高德key
    key: 'YOUR_KEY',
    // 插件集合
    plugin: ['']
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    $,
    router,
    store,
    template: '<App/>',
    components: { App }
})
axios.get('/api/caa-search-ws/ws/0.1/lots/sort?start=0&count=5&meetId=300')
    .then(function(response) {
        console.log(response.data)
    })
axios.get('/api/personal-ws/ws/0.1/lot/currentinfo/473')
    .then(function(response) {
        console.log(response.data)
    })