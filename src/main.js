import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Element from 'element-ui';
import './styles/vendors/element-variables.scss';
import locale from 'element-ui/lib/locale/lang/en';

import '@/styles/index.scss';


Vue.use(Element, {
  locale,
  size: 'medium'
});


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
