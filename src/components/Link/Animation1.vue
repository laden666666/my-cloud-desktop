<template>
    <figure class="animation1">
        <img class="animation1_image" :src="image" v-if="image" alt="title">

        <figcaption>
            <h2 :title="title" class="animation1_title"><span class="animation1_title_text" style="vertical-align: middle">{{title}}</span></h2>
            <p class="animation1_describe" :title="describe">{{describe}}</p>
        </figcaption>
    </figure>
</template>
<script>
    import Base from './Base.vue'
    export default {
        extends: Base,
    }
</script>
<style lang="scss" scoped>
    @import "../../style/style.scss";
    .animation1{
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }
    .animation1_image{
        position: absolute;
        min-width: calc(100% + 50px);
        height: 100%;
        opacity: 0.7;
        transition: opacity 0.35s, transform 0.35s;
        transform: translate(-40px, 0);
        z-index: 0;
        top: 0;
        left: 0;
    }
    .animation1_title{
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        line-height: 18px;
        height: 36px;
        color: #fff;
        transform: translate(0, 45px);
        transition: opacity 0.35s, transform 0.35s;
    }
    .animation1_title::before{
        display: inline-block;
        content: " ";
        height: 100%;
        vertical-align: middle;
    }
    .animation1_title_text{
        font-size: 14px;
        text-align: left;
        padding: 0 5px;
        word-break: break-all;
        overflow-wrap: break-word;
        text-overflow: ellipsis;
        display: inline-block;
        display: -webkit-inline-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        max-height: 36px;
    }
    .animation1_describe{
        z-index: 1;
        margin-top: 60px;
        color: rgba(255,255,255,0.9);
        transform: translate(0, 45px);
        opacity: 0;
        transition: opacity 0.2s, transform 0.35s;
        font-size: 12px;
        line-height: 15px;
        height: 75px;
        padding: 0 5px;
        word-break: break-all;
        text-overflow: ellipsis;
        display: block;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        overflow: hidden;
        position: relative;
    }
    .animation1:hover .animation1_describe{
        transition-delay: 0.05s;
        transition-duration: 0.35s;
        opacity: 1;
    }
    .animation1:hover .animation1_image, .animation1:hover .animation1_title, .animation1:hover .animation1_describe {
        transform: translate(0, 0);
    }
    .animation1:hover .animation1_image {
        opacity: .9;
    }
</style>
