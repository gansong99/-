<template>
  <ul class="data-list-container">
    <li
      v-for="item in list"
      :key="item.id"
    >
      <Avatar
        :url="item.avatar"
        :widthsize="44"
        :heightsize="44"
      />
      <div class="data">
        <div class="nickname">{{ item.nickname }}</div>
        <div class="content">{{ item.content }}</div>
        <div class="time">{{ formatDate(item.createDate, true) }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
import Avatar from "@/components/Avatar";
import { formatDate } from "@/utils";
export default {
  components: {
    Avatar,
  },
  data () {
    return {
      styleleft: null
    }
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    formatDate,

  },
};
</script>

<style scoped lang="less">
@import '~@/styles/var.less';
.data-list-container {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}
li {
  display: flex;
  width: 100%;
  border-bottom: 1px solid lighten(@gray, 20%);
  padding: 15px 0;
}
.avatar-container {
  margin-right: 15px;
}
.nickname {
  color: darken(@success, 10%);
  margin-bottom: 10px;
}
.content {
  font-size: 14px;
  display: inline-block;
  white-space: normal;
}
.data {
  position: relative;
  width: 100%;
  word-break: break-all;
  display: block;
}
.time {
  position: absolute;
  right: 0%;
  top: 5px;
  font-size: 12px;
  color: @gray;
}
</style>
