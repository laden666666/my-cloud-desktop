<template>
    <div class="link">
        <transition name="slide-fade">
            <template v-if="show">
                <div class="link_link" v-if="!isFolder" @click="openFolder(index)">
                    <Animation1 :image="image" :title="title" :describe="describe"></Animation1>
                </div>
                <div class="link_Folder" v-else @click="openFolder(index)">
                    <component  :is="LinkList" :linkList="linkList" class="link_Folder_list" ></component>
                    <span class="link_Folder_title">{{title}}</span>
                </div>
            </template>
        </transition>
    </div>
</template>

<script>
    import pathService from '../service/pathService'

    let LinkList
    export function setLinkList(_linkList) {
        LinkList = _linkList
    }

    import Animation1 from './Link/Animation1.vue'

    export default {
        props:{
            index: {
                type: Number,
                isRequired: true
            },
            image: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                isRequired: true
            },
            describe: {
                type: String,
                default: ''
            },
            isFolder: {
                type: Boolean,
                default: false
            },
            url: {
                type: String,
                default: ''
            },
            linkList: {
                type: Array,
                default: ()=>[]
            }
        },
        data () {
            return {
                LinkList: {
                    name: 'Folder',
                    props:{
                        linkList:{
                            type: Array,
                        },
                    },
                    template: '<LinkList :linkList="linkList.slice(0, 4)" :hasAnimation="false"></LinkList>',
                    components:{
                        LinkList,
                    },
                },
                show: false
            }
        },
        components:{
            Animation1,
        },
        mounted(){
            setTimeout(()=>{
                this.show = true
            }, this.index * 40)
        },
        methods: {
            openFolder(index){
                if(this.url && this.url.startsWith('http')){
                    var a = document.createElement('a')
                    a.setAttribute('target', '_blank')
                    a.setAttribute('href', this.url)
                    a.click()
                } else {
                    pathService.openFolder(index)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../style/style.scss";

    .link{
        width: $linkWidth;
        height: $linkWidth;
        margin: $linkMargin;
        position: relative;
        transition: opacity .3s, border-radius .3s;
    }
    .link:active{
        opacity: 0.8;
        border-radius: $linkWidth;
    }
    /*.link::after{*/
        /*content: '';*/
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
        /*width: 100%;*/
        /*height: 100%;*/
        /*border-radius: 50%;*/
        /*background-color: #fff;*/
        /*display: none;*/
        /*transition: transform .8s, opacity .8s;*/
        /*transform-origin: center;*/
        /*z-index: -1;*/
    /*}*/
    /*.link:active::after{*/
        /*z-index: 0;*/
        /*display: block;*/
        /*opacity: 0.5;*/
        /*transform: scale(1.7);*/
    /*}*/
    .link_image{

    }
    .link_link{
        width: $linkWidth;
        height: $linkWidth;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        background-color: $linkColor;
        cursor: pointer;
    }
    .link_Folder{
        width: $linkWidth;
        height: $linkWidth;
        cursor: pointer;
    }
    .link_Folder ::after{
        content: ' ';
        z-index: 2;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .link_Folder_list{
        width: $linkWidth * 2 + $linkMargin * 4;
        height: $linkWidth * 2 + $linkMargin * 4;
        overflow: hidden!important;
        transform-origin: 0 0;
        transform: scale($linkWidth / ($linkWidth * 2 + $linkMargin * 2)) translate($linkMargin, $linkMargin);
        margin: 0 -5px;
        position: relative;
        top: -5px;
    }
    .link_Folder_title{
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        width: 100%;
        background-color: rgba(0, 0, 0, .5);
        color: #fff;
        transition: all .35s;

        height: 22px;
        box-sizing: border-box;
        border: 0 solid transparent;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        white-space: nowrap;
        overflow: hidden;
        padding: 0 5px;
    }

    .link:hover .link_Folder_title{
        background-color: rgba(0, 0, 0, .8);
        height: $linkWidth;
        border-radius: 50%;
        border-width: 15px;
        border-color: rgba(255, 255, 255, .2);
        white-space: normal;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
    }

    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
