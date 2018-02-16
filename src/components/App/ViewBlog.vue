<template>
    <div class="view-blog">
        <iframe :src="link.url" class="view-blog_view"></iframe>
    </div>
</template>

<script>

    import {mapState} from 'vuex'

    export default {
        props:{
            link: {
                type: Object,
                isRequired: true
            }
        },
        computed: {
            ...mapState({
                linkData(state){
                    return state.selectPath.reduce((arr, path)=>{
                        return arr[path].linkList
                    }, state.linkList)[0]
                },
            })
        },
        data () {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../style/style.scss";

    .view-blog{
        position: fixed;
        z-index: 1;
        top: $headerHeight;
        width: 100vw;
        height: calc(100vh - #{$headerHeight});
        background-color: #fff;
    }

    .view-blog_view{
        width: 100%;
        height: 100%;
        border: none;
    }
</style>
