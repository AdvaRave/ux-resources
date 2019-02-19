<template>
    <div :class="{'component': showResource}">
        <h2>{{resource.caption}}</h2>
        <section>
            <div class="filters" v-if="resource.filters && resource.filters.length">
                <h3>Filter</h3>
                <ul>
                    <li v-for="(filter, index) in resource.filters" :key="filter.name">
                        <h5>{{filter.caption}}</h5>
                        <div class="range" v-if="filter.type=='range'">
                            <label>${{filter.selectedRange[0]}} - ${{filter.selectedRange[1]}}</label>
                            <vue-slider v-model="filter.selectedRange" :min="filter.min" :max="filter.max" :tooltip="false" :height="13" :dot-size="13" :sliderStyle="[{'box-shadow':'0.5px 0.5px 2px 1px #6963e0'}, {'box-shadow':'0.5px 0.5px 2px 1px #6963e0'}]" :process-style="{'backgroundColor':'#6963e0'}" @callback="filterChanged()"></vue-slider>
                        </div>
                        <ul v-if="filter.type=='checkbox'">
                            <li v-for="(option, index) in filter.options" :key="option.name">
                                <input type="checkbox" v-model="option.selected" @change="filterChanged()">
                                <label>{{option.caption}}</label>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="resources">
                <ul>
                    <li v-for="(item, index) in shownItems" :key="item.url">
                        <small class="price" ng-show="resource.showPrice">{{item.price ? '$' + item.price : 'Free'}}</small>
                        <a v-bind:href="item.url" target="_blank">
                            <div class="img" v-bind:style="{ backgroundImage: 'url(' + item.logo + ')' }"></div>
                            <h5>{{item.title}}</h5>
                            <small>{{item.url}}</small>
                        </a>
                        <div class="desc">
                            <p v-show="item.showDesc">{{item.description}}</p>
                            <a v-on:click="item.showDesc = !item.showDesc">{{item.showDesc ? 'Show less...' : 'Show more...'}}</a>
                        </div>
                    </li>
                </ul>
                <div class="no-match" v-show="!shownItems.length">
                    No Match Found :( <br>
                    Please try to remove some of the filters...
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import vueSlider from 'vue-slider-component';

    export default {
        name: 'resourceList',
        data: function() {
            for (var i=0; i<window.resources.length; i++) {
                let currResource = window.resources[i];

                if (currResource.name == (this.showResource || this.$route.params.name)) {
                    let resource = JSON.parse(JSON.stringify(currResource));

                    return {
                        resource: resource,
                        shownItems: JSON.parse(JSON.stringify(currResource.items || []))
                    }
                }
            }
        },
        methods: {
            filterChanged: function() {
                let newItems = [];

                for (var j=0; j<this.resource.items.length; j++) {
                    let item = this.resource.items[j],
                        filterPassed = true;

                    for (var i=0; i<this.resource.filters.length; i++) {
                        let filter = this.resource.filters[i];
                            
                        switch (filter.type) {
                            case 'checkbox':
                                for (var z=0; z<filter.options.length; z++) {
                                    let option = filter.options[z];

                                    if (!option.selected) {
                                        continue;
                                    } else if (!item.tags.includes(option.name)) {
                                        filterPassed = false;
                                    }
                                }

                                break;
                            case 'range':
                                var itemPrice = item.price || 0;

                                if (filter.selectedRange[0] > itemPrice || filter.selectedRange[1] < itemPrice) {
                                    filterPassed = false;
                                }

                                break;
                        }

                        if (!filterPassed) {
                            break;
                        }
                    }

                    if (filterPassed) {
                        newItems.push(item);
                    }
                }

                this.shownItems = newItems;
            }
        },
        components: {
            'vue-slider': vueSlider
        },
        props: ['showResource']
    };
</script>

<style lang="scss" scoped>
    @import "../styles/globals.scss";

    .component {
        h2 {
            text-align: center;
            border: 0;
        }

        section {
            text-align: center;

            .resources {
                padding: 0;
                width: 100%;

                ul {
                    text-align: center;
                }
            }
        }
    }

    h2 {
        margin: 0 100px;
        padding: 30px 0;
        border-bottom: 1px solid $light-gray;
        text-align: left;
    }

    section {
        text-align: left;
        padding: 40px 100px;

        .filters {
            display: inline-block;
            float: left;
            width: 20%;
            
            h3 {
                font-size: 16px;
                font-weight: 700;
                color: $caption-purple;
                padding-bottom: 10px;
            }

            > ul {
                font-size: 15px;

                h5 {
                    padding: 10px 0;
                    font-size: 15px;
                }

                > li {
                    position: relative;
                    padding-bottom: 5px;

                    .range {
                        label {
                            position: absolute;
                            font-size: 12px;
                            top: 12px;
                            right: 5px;
                        }
                    }

                    > ul {
                        > li {
                            display: block;
                            padding: 10px 0;

                            input {
                                margin-right: 5px;
                            }
                        }
                    }
                }
            }
        }

        .resources {
            float: right;
            text-align: center;
            display: inline-block;
            padding: 0 0 0 100px;
            box-sizing: border-box;
            width: 80%;
            text-align: left;

            .no-match {
                font-weight: 700;
                font-size: 24px;
            }

            ul {
                li {
                    text-align: center;
                    display: inline-block;
                    vertical-align: top;
                    border: 1px solid $light-gray;
                    border-radius: 20px;
                    padding: 20px;
                    margin: 0 30px 40px 30px;
                    width: 180px;
                    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.16), 0 1px 5px 0 rgba(0,0,0,0.12);
                    position: relative;

                    .img {
                        display: inline-block;
                        height: 100px;
                        width: 100px;
                        background-repeat: no-repeat;
                        background-position: center center;
                        background-size: cover;
                    }

                    h5 {
                        padding-top: 10px;
                        color: $caption-purple;
                        font-weight: 700;
                        font-size: 16px;
                    }

                    small {
                        font-size: 14px;
                        width: 180px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: inline-block;
                    }

                    .price {
                        position: absolute;
                        display: inline-block;
                        top: 15px;
                        left: -60px;
                        font-size: 12px;
                    }

                    .desc {
                        margin-top: 10px;
                        padding-top: 10px;
                        border-top: 1px solid $light-gray;
                        font-size: 14px;

                        a {
                            display: block;
                            font-size: 14px;
                            margin-top: 10px;
                        }

                        p {
                            text-align: left;
                        }
                    }
                }
            }
        }
    }
</style>