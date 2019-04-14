<template>
  <div>
    test 2: 
    <input type="radio" name="testRadio" value="radio1" :checked="checked" v-on:change="change">
    <input type="radio" name="testRadio" value="radio2" v-on:change="change">
  </div>
</template>

<style lang="scss">
</style>

<script>
export default {
  model: {
    event: 'change'
  },
  data() {
    return {
      checked: false,
      hash:0
    };
  },
  mounted(){
    this.$emit("change", this.hash)
  },
  methods: {
    change(e) {
      this.hash = e.target.value
      //this.hash = "";
      
      this.$emit("change", this.hash);
    }
  }
};
</script>
