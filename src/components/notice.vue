<template>
    <el-amap vid="amapDemo"  style="width:800px; height:400px;">
        <el-amap-marker v-for="marker in markers" :position="marker.position">
    </el-amap-marker>
</el-amap>
</template>
<script>
    export default {
        data() {
            return {
                markers: []
            };
        },
        mounted() {
            this.markers = [
            {
                position: [121.5273285, 31.21515044]
            }, {
                position: [121.5273286, 31.21515045]
            }
            ];
            const step = 0.00001;
            setInterval(() => {
                this.markers.forEach((marker) => {
                    marker.position = [marker.position[0] + step, marker.position[1] + step];
                });
            }, 1000);
        }
    }
</script>
<style>
    .el-vue-amap-container{
        padding: 30px 20px;
        margin: 0 auto;
    }
</style>
