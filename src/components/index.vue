<template>
  <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="(value,key) in loopimg" :key="key">
            <img :src="value.url" />
    </el-carousel-item>
  </el-carousel>
</template>
<script>
    export default {
        data(){
            return{
                loopimg:[{
                    url:"http://p.qpic.cn/music_cover/r9Js18hQauaHlf3udYvKsh7RI9Kd7fpiaJ4INX7F8U67PqkGp7G75kQ/300?n=1"
                },
                {
                    url:require('@/assets/Desert.jpg')
                },
                {
                    url:require("@/assets/Jellyfish.jpg")
                },
                {
                    url:require("@/assets/Hydrangeas.jpg")
                },
                {
                    url:require("@/assets/logo.png") 
                }]
            }
        }
    }
</script>
<style>
    .el-carousel__item img {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
