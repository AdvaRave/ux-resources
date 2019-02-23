<template>
    <header id="header" :class="{mobile: isMobile}">
        <div>
            <a class="menu" v-show="isMobile" @click="mobileMenuToggle()"><i class="fas fa-bars"></i></a>
            <h1>
                <router-link to="/" @click.native="menuOptionUsed()">My UX & UI Resources</router-link>
            </h1>
            <span v-show="!isMobile">
                <a href="https://advarave.github.io/" target="_blank">About Me</a>
            </span>
            <a class="filter" v-show="isMobile && $route.params.name" @click="filterMenuToggle()"><i class="fas fa-filter"></i></a>
        </div>
        <nav v-show="!isMobile || (isMobile && mobileMenuShown)">
            <ul>
                <li v-for="resource in resources" :key="resource.name" v-show="resource.name != 'indexes'">
                    <router-link :to="{ name: 'list', params: { name: resource.name }}" v-bind:class="{ active: $route.params.name == resource.name }" @click.native="menuOptionUsed()">{{resource.caption}}</router-link>
                </li>
                <li v-show="isMobile">
                    <a href="https://advarave.github.io/" target="_blank">About Me</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    const maxMobileWidth = 1024;

    export default {
        name: 'siteHeader',
        data: function () {
            return {
                resources: window.resources,
                isMobile: (window.outerWidth <= maxMobileWidth),
                mobileMenuShown: false,
                filterShown: false
            }
        },
        methods: {
            menuOptionUsed: function() {
                this.mobileMenuShown = false;
                document.body.classList = '';
            },
            mobileMenuToggle: function() {
                this.mobileMenuShown = !this.mobileMenuShown;
                document.body.classList = this.mobileMenuShown ? 'mobile-menu-shown' : '';
            },
            filterMenuToggle: function() {
                this.mobileMenuShown = false;
                document.body.classList = !document.body.classList.length ? 'filter-menu-shown' : '';
            }
        },
        mounted() {
            window.addEventListener('resize', function(e) {
                this.isMobile = (e.target.outerWidth <= maxMobileWidth);
            });
        }
    };
</script>

<style lang="scss" scoped>
    @import "../styles/globals.scss";

    header {
        > div {
            overflow: hidden;
            padding: 20px 40px;
            border-bottom: 1px solid $light-gray;
            line-height: 30px;

            h1 {
                float: left;
                font-weight: 700;
                color: $caption-purple;
                text-transform: uppercase;
                font-size: 24px;
            }

            span {
                float: right;
            }

            .fas {
                font-size: 18px;
                line-height: 30px;
            }
        }

        nav {
            text-align: left;
            padding: 20px;
            border-bottom: 1px solid $light-gray;

            ul {
                display: inline-block;

                li {
                    display: inline-block;
                    padding: 0 20px;

                    a.active {
                        color: $caption-purple;
                    }
                }
            }
        }

        &.mobile {
            > div {
                background: $caption-purple;
                color: $white;
                text-align: center;
                padding: 20px;

                a {
                    color: $white;
                    display: inline-block;
                }

                .menu {  
                    float: left;
                }

                .filter {
                    float: right;
                }

                h1 {
                    font-size: 20px;
                    float: none;
                    display: inline-block;
                }
            }

            nav {
                text-align: center;
                padding: 0;
                width: 100vw;

                ul {
                    display: block;

                    li {
                        display: block;
                        padding: 25px 0;
                        border-bottom: 1px solid $light-gray;

                        &:last-child {
                            border-bottom: 0;
                        }
                    }
                }
            }
        }
    }
</style>
