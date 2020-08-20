import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import {Button, Popup, Cell, CellGroup , Field, Picker} from 'vant';
import 'vant/lib/button/style';
import 'vant/lib/cell/style'; 
import 'vant/lib/cell-group/style'
import 'vant/lib/popup/style'
import 'vant/lib/field/style'
import 'vant/lib/picker/style'
Vue.use(Button);
Vue.use(Popup);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Field);
Vue.use(Picker);




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
