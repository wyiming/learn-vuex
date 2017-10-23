<template>
  <div class="hello">
    <img src="../assets/Hydrangeas.jpg" alt="">
    <!-- <router-link :to="{path:'/'}">to parents</router-link> -->
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to HelloChild'
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
