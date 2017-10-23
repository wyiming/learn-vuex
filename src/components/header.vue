<template>
  
  

<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="/index">
    处理中心
  </el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template> 
      <el-menu-item index="/item">
        选项1
      </el-menu-item>   
      <el-menu-item index="/auction">
        选项2
      </el-menu-item>   
      <el-menu-item index="/notice">
        选项3
      </el-menu-item>
  </el-submenu>
    <el-menu-item index="/mine">
      订单管理
    </el-menu-item>
</el-menu>
<!-- <div> -->
    <!-- <ul>
      <router-link :to="{path:value.href}" v-for="(value,key) in $router.options.routes" 
       :key="key" @click="addClass(key)" 
       :class="{routerLinkActive: key==toggle}" 
       tag="li">{{ value.name }}
      </router-link>
    </ul> -->
  
  
  
  <!-- </div> -->
</template>
<script>
  export default {
    name: "header", 
    data() { 
      return {  
        title: "this is header",
        activeIndex: '1',
        activeIndex2: '1',
        toggle:0,  
        list: [{  
            name: "首页",
            href:"/index" 
          },  
          {  
            name: "标的",
            href:"/item" 
          },  
          {  
            name: "拍卖会",
            href:"/auction" 
          },
          {
            name: "拍卖公告",
            href:"/notice"
          },
  
          {
            name: "我的竞拍",
            href:"/mine"
          } 
        ]
      }
    },
    methods:{
      addClass(key){
        this.toggle = key;
      },
      handleSelect(key, keyPath) {
        console.log(key,keyPath)
        this.$router.push(key)
      }
    }
  }
</script>
<style scoped>
  
</style>

