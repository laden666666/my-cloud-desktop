<template>
    <Desktop backgroundImage="http://demo.cssmoban.com/cssthemes4/hxc_19_SimplePix/images/wood.png"/>
</template>

<script>
import Desktop from './components/Desktop.vue'

export default {
    name: 'App',
    components: {
        Desktop
    }
}
</script>

<style>
    body{
        padding: 0;
        margin: 0;
    }
    #app {
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
