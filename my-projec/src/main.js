// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import mavonEditor from 'mavon-editor';     //markdown编辑器
import 'mavon-editor/dist/css/index.css';
import axios from 'axios';
// import Bus from "./public/js/Bus";
import cookie from "./public/js/cookie"
import Bus from './public/js/Bus'
// import Base64 from "./public/js/base64.js";
Vue.prototype.cookie = cookie;
// Vue.prototype.Base64 = Base64;
Vue.prototype.Bus = Bus;
Vue.use(mavonEditor);

Vue.prototype.$editor = mavonEditor;
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://localhost:8003';

Vue.config.productionTip = false
console.log(router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
