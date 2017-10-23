<template>
  <div class="hello">
    <img src="../assets/Chrysanthemum.jpg" alt="">
    <router-link :to="{name:'World',params:{color:'red'}}">to world</router-link>
    <router-link :to="{path:'HelloChild'}">to children</router-link>
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
  img{
    width: 200px;
    height: 200px;
  }
 
  .fade-enter,.fade-leave-active{
    opacity: 0;
  }
  .fade-enter-active,.fade-leave{
    transition: all .5s ease-out;
  }
</style>
