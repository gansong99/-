<template>
  <div class="image-loading-container">
    <img
      v-if="!everythingDone"
      class="placeholderLoader"
      :src="placeholder"
    />
    <img
      class="imgLoader"
      @load="loadImg"
      :src="src"
      :style="{
        opacity:originOpacity,
        transition:`${duration}ms`
      }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      // require: true,
      default: ""
    },
    placeholder: {
      type: String,
      // require: true,
      default: ""
    },
    duration: {
      type: Number,
      // require: true,
      default: 500
    }
  },
  data () {
    return {
      originLoaded: false,
      everythingDone: false
    }
  },
  methods: {
    loadImg () {
      this.originLoaded = true;
      console.log("原图加载完成了")
      setTimeout(() => {
        this.everythingDone = true;
        this.$emit("load")
      }, this.duration);
    }
  },
  computed: {
    originOpacity () {
      return this.originLoaded ? 1 : 0;
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixing.less';
.image-loading-container {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    .self-fill();
    object-fit: cover;
  }
  .imgLoader {
    // opacity: 0;
  }
  .placeholderLoader {
    filter: blur(2vh);
  }
}
</style>