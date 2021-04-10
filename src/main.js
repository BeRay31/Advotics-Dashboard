import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';

import '@/styles/index.scss'; // global css


Vue.use(Element, {
  locale,
  size: Cookies.get('size') || 'medium' // set element-ui default size
});


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
