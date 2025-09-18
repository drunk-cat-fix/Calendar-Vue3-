<script>

export default {
  props: {
    title: String,
    content: String,
  }
}
</script>

<template>
  <div class="item">
    <div class="title">{{ title }}</div>
    <div class="content">{{ content }}</div>
  </div>
</template>

<style scoped lang="less">
.item {
  display: flex;
  height: .44rem;
  line-height: .44rem;
  background: white;
  margin-bottom: 0.15rem;
  border: 1px solid gray;
  border-radius: 0.1rem;

  .title {
    width: 1rem;
    font-size: 0.18rem;
    margin-right: .15rem;
    color: red;
    text-align: center;
  }

  .content {
    width: 2.2rem;
    font-size: 0.14rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>