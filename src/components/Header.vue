<template>
    <div class="header">
        <div class="header_my">
            <My></My>
        </div>
        <div class="header_tools">
            <div class="header_tools-item" @click="selectFolderLevel(0)"><i class="icon iconfont icon-homepage"></i></div>
        </div>
        <div class="header_select">
            <div class="header_select-item" @click="selectFolderLevel(index + 1)" v-for="(path, index) in selectPath" :key="index" :style="{zIndex: 1000 - index}">
                <span class="header_select-item-text">{{path.title}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import pathService from '../service/pathService'

    import My from './My.vue'

    import {mapState} from 'vuex'

    export default {
        components: {
            My
        },
        computed: {
            ...mapState({
                selectPath(state){
                    return state.selectPath.reduce((arr, path) => {
                        arr.push(state.linkList[path])
                        return arr
                    }, [])
                },
            })
        },
        methods: {
            selectFolderLevel(index){
                pathService.selectFolderLevel(index)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../style/style.scss";

    .header{
        background-color: #000;
        height: $headerHeight;
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
    }
    .header_my{
        width: $headerHeight;
        height: $headerHeight;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(51, 51, 51);
        cursor: pointer;
    }

    .header_tools{
        width: $headerHeight;
        height: $headerHeight;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .header_tools-item{
        width: $headerHeight * 5;
        height: $headerHeight;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background-color .35s;
    }
    .header_tools-item:hover{
        background-color: rgb(51, 51, 51);
    }
    .header_tools-item:active{
        opacity: .8;
    }
    .header_tools-item i::before{
        color: #fff;
        font-size: 30px;
    }

    .header_select{
        flex: 1;
        height: $headerHeight;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
    }
    .header_select-item:first-child {
        border-left: 2px solid rgba(64, 64, 64, .4);
        padding-left: 5px;
    }
    .header_select-item{
        height: $headerHeight;
        max-width: 250px;
        padding: 0 0 0 8px;
        position: relative;
        padding-left: ($headerHeight / 2) + 5px;
        transition: background-color .35s;
    }
    .header_select-item-text{
        display: block;
        max-width: 100%;
        width: auto;
        color: #fff;
        line-height: $headerHeight;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        white-space: nowrap;
        font-size: 12px;
    }
    .header_select-item::before, .header_select-item::after{
        content: '';
        border:solid;
        border-color: transparent transparent transparent rgba(64, 64, 64, .8);
        border-width: $headerHeight / 2  0  $headerHeight / 2  $headerHeight / 2;
        position: absolute;
        top: 0;
        right: -$headerHeight / 2;
        z-index: -1;
    }
    .header_select-item::after{
        right: -$headerHeight / 2 + 2px;
        border-left-color: #000;
        transition: border-left-color .35s;
    }
    .header_select-item:hover:not(:last-child){
        background-color: rgb(51, 51, 51);
    }
    .header_select-item:hover:not(:last-child)::after{
        border-left-color: rgb(51, 51, 51);
    }
</style>
