import Vue from 'vue';
import App from './features/base/views/App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import i18n from './plugins/vuei18n';
import { createProvider } from './vue-apollo';
import typeDefs from './gql/typeDefs';
import resolvers from './gql/resolvers';
import './assets/styles/index.css';
import './assets/tailwind.css';

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  store,
  apolloProvider: createProvider(
    {
      typeDefs,
      resolvers,
    },
  ),
  render: (h) => h(App),
}).$mount('#app');
