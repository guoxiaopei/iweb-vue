import Vue from 'vue'
import App from './App.vue'

//引入Bootstrap-vue和Bootstrap
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue); //在全局注册组件


//是否为线上环境，开发环境为false，上线应改为true。
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
