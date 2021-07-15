import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './features/base/views/App.vue';
import router from './router';
import store from './store';
import i18n from './plugins/vuei18n';
import './assets/tailwind.css';
import { createProvider } from './vue-apollo';

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  i18n,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount('#app');
