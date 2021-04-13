<template>
  <div class="text-div">
    <Icon type="orange" />
    <p>{{text}}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon"
export default {
  components: {
    Icon
  },
  props: {
    text: {
      type: String,
      default: ""
      // require: true
    }
  }
}
</script>

<style lang = "less" scoped>
@import '~@/styles/mixing.less';
@import '~@/styles/var.less';
.text-div {
  .self-center();
  color: @gray;
  text-align: center;
}
</style>