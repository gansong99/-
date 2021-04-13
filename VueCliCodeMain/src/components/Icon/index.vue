<template>
  <svg
    class="icon"
    aria-hidden="true"
    ref="iconsvg"
  >
    <use :xlink:href="fontClass"></use>
  </svg>
</template>

<script>
const fruits = {
  cherry: "#iconcherry",
  pineapple: "#iconpineapple",
  blueberry: "#iconblueberry",
  strawberry: "#iconstrawberry",
  hamimelon: "#iconhamimelon",
  peach: "#iconpeach",
  avocado: "#iconavocado",
  persimmon: "#iconpersimmon",
  pitaya: "#iconpitaya",
  mangosteen: "#iconmangosteen",
  litchi: "#iconlitchi",
  orange: "#iconorange",
  kiwifruit: "#iconkiwifruit",
  banana: "#iconbanana",
  apple: "#iconapple",
  lemon: "#iconlemon",
  grape: "#icongrape",
  pear: "#iconpear",
  watermelon: "#iconwatermelon",
  me: "#iconnb-",//关于我
  code: "#icondaima",//代码
  article: "#iconsuoyouwenzhang",//文章
  home: "#iconshouye_huaban1",//首页
  qq: "#iconQQ1",//qq
  mail: "#iconqunfengyouxiang",//邮箱
  weixing: "#iconweixin",//微信
  github: "#icongithubb",//github
  message: "#iconliuyanban-yimidida",//留言板
  warn: "#icontishi1",//提示
  error: "#iconcuowu",//失败
  success: "#iconchenggong",//成功
  info: "",//null
  imgup: "#iconxiangshang",//imgup
  imgdown: "#iconxiangxia"//imgdown
}
export default {
  props: {
    type: {
      type: String,
      // require: true
    }
  },
  mounted () {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '//at.alicdn.com/t/font_2431971_wsli2xe7vr.js';
    document.body.appendChild(s);
  },
  computed: {
    fontClass () {
      return fruits[this.type];
    }
  }
}
</script>

<style scoped>
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.3em;
  fill: currentColor;
  overflow: hidden;
}
</style>