<template>
    <div>
        <site-header></site-header>
        <main>
           <router-view :key="$route.path"></router-view>
        </main>
    </div>
</template>

<script>
    import siteHeader from './components/siteHeader';

    export default {
        name: 'app',
        components: {
            'site-header': siteHeader
        }
    };
</script>

<style lang="scss">
    @import "./styles/globals.scss";

    body {
        font-family: 'Nunito', sans-serif;
        font-size: 16px;
        color: $text-default;

        &.mobile-menu-shown, {
            main {
                display: none;
            }
        }

        &.filter-menu-shown {
            .filters {
                display: inline-block !important;
            }

            .resources, h2 {
                display: none !important;
            }
        }
    }

    main {
        text-align: center;
    }

    * {    
        margin:  0;
        padding: 0;
    }

    a, a:visited, a:hover, a:active {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

</style>
