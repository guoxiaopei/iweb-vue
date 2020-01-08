import Vue from 'vue'
import App from './App.vue'

//引入Bootstrap-vue和Bootstrap
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue); //在全局注册组件

//引入axios
import { axios_instance } from "./util/axios";
Vue.prototype.$axios = axios_instance;
//全局变量对象
import global_config from "./util/global";
Vue.prototype.$global = global_config;

//是否为线上环境，开发环境为false，上线应改为true。
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
