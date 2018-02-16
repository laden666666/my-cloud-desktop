<template>
    <div class="my">
        <img class="my_photo" :src="myData.photo">
    </div>
</template>

<script>
    import myData from '../data/my.json'
    export default {
        data(){
            return {
                myData
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../style/style.scss";

    .my_photo{
        width: 30px;
        height: 30px;
        border-radius: 4px;
        display: block;
    }
</style>
