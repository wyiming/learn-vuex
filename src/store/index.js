import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import cart from './modules/cart'
import products from './modules/products'
Vue.use(Vuex)
    // const debug = process.env.NODE_ENV !== 'production' //是否开启严格模式
export default new Vuex.Store({
    actions,
    getters,
    modules: {
        cart,
        products
    }
    // strict: debug
})