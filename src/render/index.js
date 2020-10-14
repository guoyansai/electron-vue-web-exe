import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/index.js';
import routers from './router/index.js';
import index from './views/index.vue';

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: routers
})

//取消 Vue 所有的日志与警告
Vue.config.silent = true;
const app = new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(index)
});


//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

window.myApp = app;