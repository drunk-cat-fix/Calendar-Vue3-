<template>
  <div class="search">
    <input type="text" :placeholder="placeholder" :maxlength="maxlength" v-model="keyword" @input="search()">
  </div>
</template>

<script>
import {ref, watch} from 'vue'
import getData from '@/service'
import {useStore} from 'vuex'
import {formatUserDate} from '@/lib/utils'

export default {
  props: {
    placeholder: String,
    maxLength: Number,
  },
  setup(props) {
    const keyword = ref('')
    const store = useStore()

    const search = () => {
      const field = store.state.field
      console.log(props.maxLength);
      console.log(keyword.value.length);
      if (keyword.value.length === props.maxLength) {
        console.log('111');
        getData(store, field, formatUserDate(keyword.value))
      }
    }

    watch(
        () => store.state.field,
        () => {
          keyword.value = ''
        }
    )

    return {
      keyword,
      search,
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  position: fixed;
  top: .44rem;
  left: 0;
  z-index: 99;
  width: 100%;
  height: .38rem;
  padding: .03rem .1rem;
  box-sizing: border-box;
  background: #fff;

  input {
    width: 100%;
    height: 100%;
    font-size: .14rem;
    border: 1px solid #ddd;
    text-indent: .1rem;
    border-radius: .03rem;

    &:focus {
      border-color: #ed4040;
      box-shadow: 0 0 .02rem #ed4040;
      transition: all 0.3s;
    }
  }
}
</style>