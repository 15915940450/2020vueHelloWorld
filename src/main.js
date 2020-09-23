import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip=false;

/*==code ing==============================================*/
window.theENV=process.env;
/*================================================*/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
