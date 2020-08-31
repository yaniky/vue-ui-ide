<template>
  <div class="vv-test-wrap">
    <span class="vv-content">
      <img :src="require('../../assets/images/1.jpg')">
      test</span>
  </div>
</template>
<script>
export default {
    name: "Test"
};
</script>
<style lang="scss">
@import "../../assets/style/base.scss";

.vv-test-wrap {
  .vv-content {
    color: $main-color;
    background: url("../../assets/images/1.jpg")
  }
}
</style>