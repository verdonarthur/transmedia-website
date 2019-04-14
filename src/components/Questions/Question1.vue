<template>
  <div>
    test : <input type="checkbox" :checked="checked" v-on:change="change">
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
    change() {
      this.hash++
      //this.hash = "";
      
      this.$emit("change", this.hash);
    }
  }
};
</script>
