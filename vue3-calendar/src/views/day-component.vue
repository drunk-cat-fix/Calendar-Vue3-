<script>
import {computed, onMounted} from "vue";
import getData from "@/service";
import {getNowDate} from "@/lib/utils";
import {useStore} from "vuex";
import DayCard from "../components/dayPage/card.vue";
import ListItem from "@/components/dayPage/list.vue";

export default {
  setup() {
    const store = useStore();
    onMounted(() => {
      getData(store, store.state.field, getNowDate(store.state.field));
    });

    // console.log(store.state.dayData);
    return {
      dayData: computed(() => store.state.dayData)
    }

  },
  components: {
    DayCard,
    ListItem,
  }
}
</script>

<template>
  <div class="container">
    <p>Day Page</p>
    <day-card :dayData="dayData"></day-card>
    <list-item :dayData="dayData"></list-item>
  </div>
</template>

<style scoped lang="less">

</style>