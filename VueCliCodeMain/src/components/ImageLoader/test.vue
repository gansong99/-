<template>
  <div class="test-container">
    <ImageLoader
      :src="src"
      :placeholder="placeholder"
      @load="handleLoad()"
      :duration="3000"
    />
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader/index"

export default {
  components: {
    ImageLoader
  },
  data () {
    return {
      src: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304",
      placeholder: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100",
    }
  },
  methods: {
    handleLoad () {
      console.log("图片替换完成了");
    }
  }
}
</script>

<style lang="less" scoped>
.test-container {
  width: 500px;
  height: 400px;
  border: 2px solid;
  margin: 0 auto;
}
</style>
