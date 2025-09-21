<script>
import item from "@/components/dayPage/item.vue";

export default {
  props: {
    item: Object,
  },
  methods: {
    processItem(item) {
      if (item.name.length >= 2) {
        return item.name.split('、')[0];
      } else {
        return item.name;
      }
    }
  },
  // computed: {
  //   processItem: this.processItem(item),
  // }
}
</script>

<template>
  <li class="item">
    <div class="card">
      <div class="img-wrapper">
        <img :src="require(`@/assets/img/${processItem(item)}.jpg`)" alt="">
        <div class="mask">
          <h1>{{ item.name.length >= 2 ? processItem(item) : item.name }}</h1>
          <h2>{{ item.festival }}</h2>
        </div>
      </div>
      <div class="content-wrapper">
        <h1>假期描述：{{ item.desc || '无数据' }}</h1>
        <h2>拼假建议：{{ item.rest || '无数据' }}</h2>
      </div>
    </div>
  </li>
</template>

<style scoped lang="less">
.item{
  padding: .1rem .15rem;
  box-sizing: border-box;
  .card{
    border: 1px solid white;
    border-radius: .15rem;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0.1rem .03rem .05rem gray;

    .img-wrapper{
      position: relative;
      height: 2.15rem;

      .mask{
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1{
          color: red;
          font-size: .5rem;
          font-weight: bold;
        }

        h2{
          color: white;
          margin-top: .15rem;
        }
      }
    }

    .content-wrapper{
      padding: .1rem;
      box-sizing: border-box;
      h1{
        font-size: .16rem;
        line-height: .2rem;
      }

      h2{
        font-size: .14rem;
        line-height: .2rem;
        margin-top: .1rem;
      }
    }
  }

}
</style>