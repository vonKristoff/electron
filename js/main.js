import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import Route from './routes'

Vue.use(VueRouter)

const router = new VueRouter({ routes: Rout.routes })
const app = new Vue({
    router,
    data: {}
}).$mount('#root')