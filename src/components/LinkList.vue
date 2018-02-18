<template>
    <div class="link-list">
        <Link v-for="(link, index) in linkList" :key="index" :image="link.image" :title="link.title" :describe="link.describe" :url="link.url"
            :linkList="link.linkList || []" :isFolder="link.isFolder" :index="hasAnimation ? index : 0"/>
        <div class="link-block" v-for="index in 20"></div>
    </div>
</template>

<script>
    import Link, {setLinkList} from './Link.vue'
    var LinkList = {
        props:{
            linkList: {
                type: Array,
                isRequired: true
            },
            hasAnimation: {
                type: Boolean,
                default: true
            },
        },
        components:{
            Link,
        },
        data () {
            return {
            }
        }
    }
    setLinkList(LinkList)

    export default LinkList
</script>

<style lang="scss" scoped>
    @import "../style/style.scss";

    .link-list{
        display: flex;
        flex-wrap: wrap;
        justify-items: flex-start;
        justify-content: center;
        align-items: flex-start;
        align-content: flex-start;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .link-block{
        width: $linkWidth;
        margin: 0 $linkMargin;
    }
</style>
