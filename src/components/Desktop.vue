<template>
    <div class="desktop">
        <Header></Header>
        <div class="desktop_background">
            <div class="desktop_background-image" :style="{backgroundImage: `url(${backgroundImage})`,}"></div>
        </div>
        <LinkList v-if="Array.isArray(linkData)" class="desktop_link-list" :linkList="linkData" :key="linkDataKey"/>
        <ViewBlog v-else :link="linkData"></ViewBlog>
    </div>
</template>

<script>
    import Link from './Link.vue'
    import Header from './Header.vue'
    import LinkList from './LinkList.vue'
    import ViewBlog from './App/ViewBlog.vue'

    import {mapState} from 'vuex'

    export default {
        props:{
            backgroundImage: {
                type: String,
                default: 'none'
            }
        },
        computed: {
            ...mapState({
                linkData(state){
                    return state.selectPath.reduce((arr, path)=>{
                        if(arr[path].isFolder){
                            return arr[path].linkList
                        } else {
                            return arr[path]
                        }
                    }, state.linkList)
                },
                linkDataKey(state){
                    return state.selectPath.join('-')
                }
            })
        },
        components:{
            Link, LinkList, Header, ViewBlog
        },
        data () {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../style/style.scss";

    .desktop{
        position: relative;
        width: 100vw;
        height: 100vh;
    }

    .desktop_background{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }

    .desktop_background-image{
        width: calc(100vw + 10px);
        height: calc(100vh + 10px);
        margin-top: -5px;
        margin-left: -5px;
        filter:blur(3px);
    }
    .desktop_background-image::after{
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.8;
        display: block;
        content: '';
    }

    .desktop_link-list{
        padding: 30px 0 10px;
        box-sizing: border-box;
        position: absolute;
        width: 100vw;
        height: calc(100vh - #{$headerHeight});
        top: $headerHeight;
        left: 0;
        z-index: 1;
        overflow-y: hidden;
    }
</style>
