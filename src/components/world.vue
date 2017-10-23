<template>
  <div class="hello">
    <img src="../assets/Desert.jpg" alt="">
    <router-link :to="{path:'/Hello'}" tag="div">to Hello</router-link>
    <button @click="getParam">get param</button>
    {{ $route.params.color }}
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }, 
  methods:{
    getParam(){
      console.log(this.$route.params)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
  width: 300px;
  height: 200px;
}
</style>
