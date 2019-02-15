<template>
    <header id="header">
        <div>
            <h1>
                <router-link to="/">My UX & UI Resources</router-link>
            </h1>
            <span>
                <a href="https://advarave.github.io/" target="_blank">About Me</a>
            </span>
        </div>
        <nav>
            <ul>
                <li v-for="(resource, index) in resources" :key="resource.name">
                    <router-link :to="{ name: 'list', params: { name: resource.name }}" v-bind:class="{ active: $route.params.name == resource.name }">{{resource.caption}}</router-link>
                </li>  
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'siteHeader',
        data: function () {
            return {
                resources: window.resources
            }
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
            }

            span {
                float: right;
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
    }
</style>
