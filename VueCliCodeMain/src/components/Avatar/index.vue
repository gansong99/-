<template>
  <img
    class="avatar-img"
    :src="url"
    :style="{
    width:widthsize+'px',
    height:heightsize+'px'
  }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
    },
    widthsize: {
      type: Number,
    },
    heightsize: {
      type: Number,
    }
  }
}
</script>

<style scoped>
.avatar-img {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>