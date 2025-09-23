<script>
import errorData from '@/data/error'

export default {
  props:{
    errorCode:Number,
  },
  setup(){
    return {
      errorData,
    }
  },
}
</script>

<template>
<div class="error">
  <img :src="(require('@/assets/img/error.png'))" alt="No Image">
  <p>{{ errorData[errorCode] }}</p>
</div>
</template>

<style scoped lang="less">
.error{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  img{
    width: 0.5rem;
  }
  p{
    font-size: .14rem;
    color: gray;
    margin-top: .15rem;
  }
}
</style>