<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button v-on:click="click()">click.me</button>
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
      this.$store.commit('saveCurrDbSource',this.db);
      this.$store.dispatch('saveDbSource', this.DbSource);
      //this.saveDbSource;
      alert(this.$store.state.currDbSource);
    }
  }
}
</script>
