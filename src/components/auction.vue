<template>
    <div>
        <ul>
            <li v-for="p in products">
                {{ p.title }} - {{ p.price }}
                <br/>
                <button @click="addToCart(p)" :disabled="!p.count">
                    添加
                </button>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
export default {
    data(){
        return{
            index:"hello"
        }
    },
    computed:mapGetters({
        products:'allProducts'
    }),
    methods:mapActions([
        'addToCart'
    ]),
    created () {
        this.$store.dispatch('getAllProducts')
    }
}


</script>
<style>

</style>
