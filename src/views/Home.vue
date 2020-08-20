<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button v-on:click="click()">click.me</button>
    <van-button type="primary" v-on="save()">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return({
    db: 0,
    DbSource: 1
    })
  },
  methods:{
   //...mapActions(['saveDbSource']),
    click(){
      //点击一个按钮向store中保存一些数据
      //.commt    调用的是mutations中的方法
      //.dispatch 调用的是actions中的方法
      this.$store.commit('saveCurrDbSource',this.db);
      this.$store.dispatch('saveCurrDbSource', this.db);
      //this.saveDbSource;
      alert(this.$store.state.currDbSource);
    },
    save(){
      // this.$store.dispatch('save')
    }
  }
}
</script>
