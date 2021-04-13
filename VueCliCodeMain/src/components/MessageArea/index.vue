<template>
  <div class="message-area-container">
    <DataForm v-on="$listeners" />
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList
      class="containerList"
      :list="list"
    />
    <div
      class="loading"
      v-loading="isListLoading"
    ></div>
  </div>
</template>

<script>
import DataForm from "./DataForm";
import DataList from "./DataList";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    DataForm,
    DataList,
  },
  created () {
  }
};
</script>

<style scoped lang="less">
.message-area-container {
  width: 100%;
}
.containerList {
  width: 100%;
}
.loading {
  position: relative;
  height: 100px;
}
</style>
