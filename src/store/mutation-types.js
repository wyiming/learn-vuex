//用来命名mutation方法名
export const ADD_TO_CART = 'ADD_TO_CART'
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST'
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS'
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

// const state = {
//     all: []
// }

// const getters = {
//     AllProducts: state => state.all
// }

// const mutations = {
//     [types.ADD_TO_CART](state, products) {
//         state.all = products
//     }
// }

// const actions = {
//     getAllProducts({ commit }) {
//         shop.commit(products => {
//             commit(types.ADD_TO_CART, { products })
//         })
//     }
// }