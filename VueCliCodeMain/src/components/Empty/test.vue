<template>
  <div class="emptyTest">
    <Empty text="Gansong is a clever man" />
  </div>
</template>

<script>
import Empty from "@/components/Empty/index";

export default {
  components: {
    Empty
  }
}
</script>

<style lang = "less" scope>
@import '~@/styles/var.less';
.emptyTest {
  position: relative;
  background: @dark;
  width: 400px;
  height: 400px;
  margin: 0 auto;
}
</style>
