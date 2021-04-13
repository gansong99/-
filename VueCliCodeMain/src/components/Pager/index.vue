<template>
  <!-- 只有总页数大于1才显示 -->
  <div
    class="pager-container"
    v-if="pageNumber > 1 "
  >
    <a
      class="heada"
      @click="handleClick(1)"
      :class="{
        disabled: current ===1
        }"
      v-show="current > 1"
    >|&lt;&lt;</a>
    <a
      class="nava"
      @click="handleClick(current-1)"
      :class="{
        disabled: current ===1
        }"
    >&lt;&lt;</a>
    <a
      @click="handleClick(n)"
      v-for="(n,i) in numbers"
      :class="{active : n === current}"
      :key="i"
    >{{n}}</a>
    <a
      class="nava"
      @click="handleClick(current+1)"
      :class="{
        disabled: current ===pageNumber
        }"
    >&gt;&gt;</a>
    <a
      class="bottoma"
      @click="handleClick(visibleMax)"
      :class="{
        disabled: current ===pageNumber
        }"
      v-show="current !==pageNumber"
    >&gt;&gt;|</a>
  </div>
</template>

<script>
export default {

  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 10
    },
    visibleNumber: {
      type: Number,
      default: 10
    }
  },
  computed: {
    pageNumber () { //总页数
      return Math.ceil(this.total / this.limit);
    },
    visibleMin () {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1
      }
      return min
    },
    visibleMax () {
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    numbers () {
      let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i)
      }
      return nums;
    }
  },
  methods: {
    handleClick (newPage) {
      if (newPage < 1 || newPage > this.pageNumber) {
        return
      }
      this.$emit("pageChange", newPage);
    }
  }
}
</script>

<style lang="less" scoped>
/* 加lang="less" 为less语法*/
@import '~@/styles/var.less';
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    width: 18px;
    height: 20px;
    color: @primary;
    margin: 0 4px;
    &.disabled {
      color: @lightWords;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
  .bottoma {
    width: 30px;
  }
  .heada {
    width: 30px;
  }
  .nava {
    width: 20px;
  }
}
</style>