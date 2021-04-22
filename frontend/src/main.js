import Vue from 'vue';
import App from './features/base/views/App.vue';
import router from './router';
import store from './store';
import i18n from './plugins/vuei18n';
import './assets/tailwind.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
