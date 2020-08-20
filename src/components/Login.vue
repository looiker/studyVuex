<template>
  <div>
    <!-- <van-cell is-link @click="showPopup" >展示弹出层</van-cell> -->
    <van-field
      readonly
      clickable
      label="城市"
      :value="value"
      placeholder="选择城市"
      @click="showPicker = true"
    />
      <van-popup v-model="showPicker" round position="bottom">
      <van-picker
      show-toolbar
      :columns="columns"
      @cancel="showPicker = false"
      @confirm="onConfirm"
      />
      </van-popup>
  </div>
</template>


<style lang="stylus" scoped>

</style>

<script>
export default {
  data() {
    return {
      // show: false,
      value: '',
      showPicker: false,
      columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
      onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
  },
};
</script>