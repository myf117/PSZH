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
import 'github-markdown-css/github-markdown.css'
import showfile from './components/content/main/showFile.vue';
import crumb from './components/content/main/breadcrub.vue';
Vue.component('crumb',crumb);
Vue.component('showfile',showfile)

import showdown from 'showdown'
    Vue.prototype.md2html = (md)=> {
      let converter = new showdown.Converter()
      let text = md.toString()
      let html = converter.makeHtml(text)
      return html
    }
Vue.use(mavonEditor);

Vue.prototype.$editor = mavonEditor;
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
Vue.prototype.$http = axios;
// axios.defaults.baseURL = 'http://localhost:8003';

Vue.config.productionTip = false
// console.log(router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
