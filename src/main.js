import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue'

import { routes } from './routes';
import store from './store/store';
import vuetify from './plugins/vuetify';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-fbf9a.firebaseio.com/';

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  router,
  vuetify,
  store
}).$mount('#app')
