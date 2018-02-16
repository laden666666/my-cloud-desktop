<template>
    <div class="link">
        <span>{{title}}</span>
    </div>
</template>

<script>
    export default {
        props:{
            image: {
                type: String,
                default: 'none'
            },
            title: {
                type: String,
                isRequired: true
            },
            describe: {
                type: String,
                default: ''
            },
            url: {
                type: String,
                default: ''
            },
        },
        data () {
            return {
            }
        }
    }
</script>

<style scoped>
    .link{
        width: 180px;
        height: 180px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(0, 120, 215);
        margin: 5px;
    }
</style>
