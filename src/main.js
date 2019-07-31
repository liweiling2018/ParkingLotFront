// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

import 'muse-ui-loading/dist/muse-ui-loading.css'
import Loading from 'muse-ui-loading';
Vue.use(Loading);

Vue.use(iView)
Vue.use(MuseUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
