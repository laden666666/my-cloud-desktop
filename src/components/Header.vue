<template>
    <div class="header">
        <My class="header_my"></My>
    </div>
</template>

<script>
    import My from './My.vue'
    export default {
        components: {
            My
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
        padding: 0 10px;
    }

</style>
