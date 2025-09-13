<script>
import {onMounted, reactive} from "vue";
import getData from "@/service";
import {getNowDate} from "@/lib/utils";
import {useStore} from "vuex";

export default {
  setup() {
    const store = useStore();
    onMounted(() => {
      getData(store, store.state.field, getNowDate(store.state.field));
    });

    // console.log(store.state.dayData);
    return {
      dayData: store.state.dayData,
    }

  }
}
</script>

<template>
  <div class="container">
    <p>Day Page</p>
    <p>{{ dayData }}</p>
  </div>
</template>

<style scoped lang="less">

</style>