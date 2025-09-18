<script>
export default {
  props: {
    dayData: Object,
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="card">
      <div class="header">{{ dayData.weekday }}</div>
      <h1 class="lunar text">{{ dayData.lunar }}</h1>
      <h2 class="date text">{{ dayData.date }}</h2>
    </div>
  </div>
</template>

<style scoped lang="less">
.wrapper {
  padding: .15rem;
  box-sizing: border-box;
  .card{
    background: url("@/assets/img/bg.jpg") no-repeat center center/cover;
    border: 1px solid gray;
    border-radius: .15rem;
    overflow: hidden;
    color: white;
    .header{
      height: .35rem;
      padding: .1rem;
      box-sizing: border-box;
      font-size: .14rem;
      background: rgba(0,0,0,.3);
    }
    .text{
      text-align: center;
      margin: 0.3rem 0;
      text-shadow: .02rem 0.05rem .05rem black;

      &.lunar{
        color: red;
        font-size: .5rem;
        font-weight: bold;
      }

      &.date{
        font-size: .2rem;
      }

    }
  }
}
</style>