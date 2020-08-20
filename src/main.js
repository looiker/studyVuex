import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Button from 'vant/lib/button';
import 'vant/lib/button/style';
Vue.use(Button);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
