import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import homepage from './pages/homepage';
import resourceList from './pages/resourceList.vue';
import edit from './pages/edit.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);

const vueRouter = new VueRouter({
    routes: [
        { path: '/', component: homepage },
        { 
          path: '/list/:name',
          name: 'list',
          component: resourceList
        },
        { path: '/edit', component: edit }
    ]
});

new Vue({
  render: h => h(App),
  router: vueRouter
}).$mount('#app')
