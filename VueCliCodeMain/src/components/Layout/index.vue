<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
@media screen and (min-width: 0px) {
  .layout-container {
    width: 100%;
    height: 100%;
    display: flex;
    .left,
    .right {
      flex: 0 0 auto;
      overflow: hidden;
    }
    .main {
      flex: 1 1 auto;
      overflow: hidden;
    }
  }
}
@media screen and (min-width: 768px) {
  .layout-container {
    width: 100%;
    height: 100%;
    display: flex;
    .left,
    .right {
      flex: 0 0 auto;
      overflow: hidden;
    }
    .main {
      flex: 1 1 auto;
      overflow: hidden;
    }
  }
}
@media screen and (min-width: 992px) {
  .layout-container {
    width: 100%;
    height: 100%;
    display: flex;
    .left,
    .right {
      flex: 0 0 auto;
      overflow: hidden;
    }
    .main {
      flex: 1 1 auto;
      overflow: hidden;
    }
  }
}
@media screen and (min-width: 1200px) {
  .layout-container {
    width: 100%;
    height: 100%;
    display: flex;
    .left,
    .right {
      flex: 0 0 auto;
      overflow: hidden;
    }
    .main {
      flex: 1 1 auto;
      overflow: hidden;
    }
  }
}
</style>