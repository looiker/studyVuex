import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //state是自定义的一些变量，需要用来保存数据，
  state: {
    pathName: "",
    currDbsource: {},
    currJobDate: {},
    DbSource: []
  },
  //mutations是用来触发事件，相当于方法，用户需要通过触发这个方法
  //借此来保存数据，参数的话，第二个参数就是用户传入的值，然后在方法中赋值给state中的变量
  mutations: {
    //保存当前菜单的路径
    savePath(state,pathName){
      state.pathName = pathName;
    },
    //保存点击菜单的路径
    saveCurrJobSource(state,currDbsource){
      state.currDbsource = currDbsource;
    },
    saveCurrJobData(state,currJobDate){
      state.currDbsource = currJobDate;
    },
    saveDbSource(state,DbSource){
      state.DbSource = DbSource;
  },
},
  actions: {
  },
  modules: {
  }
})
