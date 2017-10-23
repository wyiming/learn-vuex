<template>
  <div id="app">
    <my-auction></my-auction>
    <!-- {{ totalPrice }} -->
    <my-header></my-header> 
    <!-- <transition name="fade"> -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    <!-- </transition> -->
    <my-foot></my-foot>
  </div>
</template>

<script>
  import myAuction from '@/components/auction'
  import myHeader from '@/components/header'
  import myFoot from '@/components/foot'
  
  export default {
    name: 'app',
    components:{ myAuction,myHeader,myFoot },
    computed:{
      totalPrice () {
        // return this.$store.state.getTotal
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
