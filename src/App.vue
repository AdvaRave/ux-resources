<template>
    <div>
        <site-header></site-header>
        <main>
           <router-view :key="$route.path"></router-view>
        </main>
        <a class="subscribe" :class="{mobile: isMobile}" @click="openSubscribe()" title="Subscribe"><i class="fas fa-rss-square"></i></a>
    </div>
</template>

<script>
    import siteHeader from './components/siteHeader';

    export default {
        name: 'app',
        components: {
            'site-header': siteHeader
        },
        data: function () {
            return {
                isMobile: (window.outerWidth <= 1024)
            }
        },
        methods: {
            openSubscribe: function() {
                var subscribeClassList = document.querySelector('.sp-form-outer').classList;
                subscribeClassList.add('sp-show');
                subscribeClassList.remove('sp-hide');
            }
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

    .subscribe {
        position: fixed;
        bottom: 30px;
        right: 40px;
        font-size: 34px;
        color: $caption-purple;

        &.mobile {
            bottom: 5px;
            right: 15px;
        }

        &:hover {
            color: $caption-purple;
        }
    }

</style>
