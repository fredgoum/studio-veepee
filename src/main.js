import Vue from 'vue'
import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

require('@/assets/css/app.css');

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
