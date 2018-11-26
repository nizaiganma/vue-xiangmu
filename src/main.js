import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import router from './assets/js/router.js'
// import store from './assets/js/data.js'
import './assets/css/animate.css'
import '../node_modules/mint-ui/lib/style.css'
Vue.use(vueRouter)
import Mint from 'mint-ui';

Vue.use(Mint);
import axios from 'axios';
Vue.prototype.$http = axios;

import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
	// 数据
  state: {
    count: '暂无播放音乐',
    counts:'./src/assets/images/timg.jpg',
    county:'',
    countz:'',
    countq:'',
    bf:false,
    imgplay:'./src/assets/images/stop1.png'
  },
  // 方法
  mutations: {
  	// 操作数据方法
    increment (state,n) {
      	state.count=n
    },
     increment2 (state,m) {
        state.counts=m
    },
    increment3 (state,l) {
        state.county=l
    },
    increment5 (state,b) {
        state.countq=b
    },
    increment4 (state,o) {
        state.countz=o
    }
  }
})
new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
  store:store
})
