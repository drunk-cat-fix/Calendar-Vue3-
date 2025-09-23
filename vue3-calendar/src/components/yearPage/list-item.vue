<script>
export default {
  props: {
    holidays: Object,
  }
}
</script>

<template>
  <li class="item">
    <div class="card">
      <div class="img-wrapper">
        <img :src="require(`@/assets/img/${holidays.name}.jpg`)" alt="">
        <div class="mask">
          <h1>{{ holidays.name }}</h1>
          <h2>{{ holidays.startday }}</h2>
        </div>
      </div>
    </div>
  </li>
</template>

<style scoped lang="less">
.item {
  padding: .1rem .15rem;
  box-sizing: border-box;

  .card {
    border: 1px solid gray;
    border-radius: .15rem;
    overflow: hidden;
    background-color: #fff;
    box-shadow: .01rem .03rem .05rem gray;

    .img-wrapper {
      position: relative;
      height: 2.15rem;

      .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1 {
          color: red;
          font-size: .5rem;
          font-weight: bold;
        }

        h2 {
          color: white;
          margin-top: .1rem;
        }
      }
    }
  }
}
</style>