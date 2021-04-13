<template>
  <div
    id="app"
    ref="app"
  >
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <RouterView />
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import SiteAside from "@/components/SiteAside/";
import Layout from "@/components/Layout/";
import ToTop from "./components/ToTop";
export default {
  components: {
    SiteAside,
    Layout,
    ToTop
  },
  data () {
    return {
    }
  },
  methods: {
    // handlePageChange (newPage) {
    //   this.presend = newPage;
    //   console.log("加载当前页数据");
    // },
    // handleLoad () {
    //   console.log("图片替换完成了");
    // }
    handleResize () {
      this.appWidth = this.$refs.app.clientWidth;
    },
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
@import '~@/styles/global.less';
@import '~@/styles/mixing.less';
// .test-container {
//   width: 100%;
//   height: 100%;
//   padding: 200px;
//   background: @dark;
// }
@media screen and (min-width: 0px) {
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    // margin-top: 60px;
    display: flex;
    align-content: center;
    .self-fill(fixed);
    background: #fff;
    margin: 0 auto;
    white-space: nowrap;

    .aside {
      width: 130px;
      height: 100%;
    }
  }
}
@media screen and (min-width: 768px) {
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    // margin-top: 60px;
    display: flex;
    align-content: center;
    .self-fill(fixed);
    background: #fff;
    margin: 0 auto;
    white-space: nowrap;
    .aside {
      width: 240px;
      height: 100%;
    }
  }
}
@media screen and (min-width: 992px) {
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    // margin-top: 60px;
    display: flex;
    align-content: center;
    .self-fill(fixed);
    background: #fff;
    margin: 0 auto;
    white-space: nowrap;
    .aside {
      width: 220px;
      height: 100%;
    }
  }
}
@media screen and (min-width: 1200px) {
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    // margin-top: 60px;
    display: flex;
    align-content: center;
    .self-fill(fixed);
    background: #fff;
    margin: 0 auto;
    white-space: nowrap;
    .aside {
      width: 200px;
      height: 100%;
    }
  }
}
</style>
