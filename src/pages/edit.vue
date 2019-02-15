<template>
    <div class="edit">
        <select v-model="selectedResource">
            <option v-for="resource in resources" :value="resource" :key="resource.name">{{resource.name}}</option>
        </select>

        <table>
            <thead>
                <tr>
                    <th>Logo</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Url</th>
                    <th>Price</th>
                    <th>Tags</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in selectedResource.items" :key="item.url">
                    <td><input type="text" v-model="item.logo"></td>
                    <td><input type="text" v-model="item.title"></td>
                    <td><input type="text" v-model="item.description"></td>
                    <td><input type="text" v-model="item.url"></td>
                    <td><input type="text" v-model="item.price"></td>
                    <td><input type="text" v-model="item.tags"></td>
                    <td><a @click="selectedResource.items.splice(selectedResource.items.indexOf(item), 1)">[Remove]</a></td>  
                </tr>
                <tr><td colspan="7"><a @click="selectedResource.items.push({})">[Add]</a></td></tr>
            </tbody>
        </table>

        <div class="code">
            <a @click="generateCode()">Generate Code</a>
            <textarea v-show="code" v-model="code"></textarea>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'edit',
        data: function() {
            let res = JSON.parse(JSON.stringify(window.resources));

            return {
                resources: res,
                selectedResource: res[res.length-1],
                code: null
            }
        },
        methods: {
            generateCode: function() {
                for (var i=0; i<this.resources.length; i++) {
                    let resource = this.resources[i];

                    for (var j=0; j<resource.items.length; j++) {
                        let item = resource.items[j];

                        item.showDesc = false;
                        item.tags = (item.tags || []).toString().split(',');
                    }
                }

                this.code = 'window.resources='+JSON.stringify(this.resources)+';';
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../styles/globals.scss";

    .edit {
        padding: 50px;
        text-align: left;
    }

    select {
        margin-bottom: 20px;
    }

    table {
        border-top: 1px solid $light-gray;

        tr {
            td, th {
                padding: 5px;

                input {
                    padding: 5px;
                }
            }
        }
    }

    textarea {
        margin-top: 10px;
        border: 2px solid $light-gray;
        padding: 10px;
        width: 100%;
        height: 500px;
        font-size: 14px;
    }

    .code {
        border-top: 1px solid $light-gray;
        padding-top: 20px;
        margin-top: 20px;
    }

</style>