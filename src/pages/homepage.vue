<template>
    <div>
        <h2>
            <b>Hello,</b>
            I'm Adva Rave and those are my UX & UI resources.<br>
            Fell Free to use them.
        </h2>
        <resource-list show-resource="indexes"></resource-list>
    </div>
</template>

<script>
    import ResourceList from './resourceList.vue';

    export default {
        name: 'homepage',
        components: {
            'resource-list': ResourceList
        }
    };
</script>

<style lang="scss" scoped>
    @import "../styles/globals.scss";

    h2 {
        text-align: center;
        font-size: 24px;
        font-weight: 500;
        padding: 100px 0;
        border-bottom: 1px solid $light-gray;

        b {
            display: block;
        }
    }
</style>