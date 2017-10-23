<template>
    <div class="cart">
        <p v-show="!products.length">请添加商品到购物车</p>
        <ul>
            <li v-for="p in products">
                {{ p.title }} - {{ p.price }} x {{ p.quantity }}
            </li>
        </ul>
        <p>Total:{{ total }}</p>
        <p><button :disabled="!products.length" @click="checkout(products)">结账</button></p>
        <p v-show="checkoutStatus">结账{{ checkoutStatus }}</p>
    </div>
</template>
<script>
import { mapGetters,mapState } from 'vuex'
    export default {
        data(){
            return{
                price:5
            }
        },
        computed:{
            ...mapGetters({
                products:'cartProducts',
                checkoutStatus:'checkoutStatus'
            }),
            total(){
                return this.products.reduce((total,p) => {
                    return total + p.price * p.quantity
                },0)
            }
        },
        methods:{
            addOne(){
                this.$store.dispatch('increse',this.price)
            },
            minusOne(){
                this.$store.commit('decrement',this.price)
            },
            checkout(products){
                return this.$store.dispatch('checkout',products)
            }
        }
    }
</script>
<style>

</style>
