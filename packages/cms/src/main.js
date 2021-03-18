import Vue from 'vue';
import App from './features/base/views/App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import i18n from './plugins/vuei18n';

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
