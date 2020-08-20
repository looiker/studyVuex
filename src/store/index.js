import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  //state是自定义的一些变量，需要用来保存数据，
  // state: {
  //   pathName: "",         //路由
  //   currDbsource: {},     //当前数据源
  //   currJobDate: {},      //当前元数据
  //   DbSource: [],         //所有数据源，供元数据界面下拉列表使用
  //   selectJobMeta: {},    //当前选择的元数据（搜索后点击的单条数据）
  //   specialSubject: [],   //专题数据（多条）
  //   duplicateJobMeta: {}, //复制数据 
  // },
  //mutations是用来触发事件，相当于方法，用户需要通过触发这个方法
  //借此来保存数据，参数的话，第二个参数就是用户传入的值，然后在方法中赋值给state中的变量
  //mutations.js ：保存所有方法，用来改变state的数据
//   mutations: {
//     //保存当前菜单的路径
//     savePath(state,pathName){
//       state.pathName = pathName;
//     },
//     //保存点击菜单的路径
//     saveCurrJobSource(state,currDbsource){
//       state.currDbsource = currDbsource;
//     },
//     saveCurrJobData(state,currJobDate){
//       state.currDbsource = currJobDate;
//     },
//     saveDbSource(state,DbSource){
//       state.DbSource = DbSource;
//   },
  
// },
//暴露给用户使用，借此触发mutations中的方法，保存数据（可执行异步操作）
  // actions: {
  // },
  state,
  mutations,
  actions,
  modules: {
  }
})
