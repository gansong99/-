<template>
  <div>
    <Pager
      :total="pagerNumber"
      :current="presend"
      @pageChange="handlePageChange($event)"
    />
  </div>
</template>

<script>
import Pager from "@/components/Pager/index"

export default {
  components: {
    Pager
  },
  data () {
    return {
      pagerNumber: 302,
      presend: 20
    }
  },
  methods: {
    handlePageChange (newPage) {
      this.presend = newPage;
      console.log("加载当前页数据");
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
