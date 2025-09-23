<script>
import {computed, onMounted} from "vue";
import getData from "@/service";
import {useStore} from "vuex";
import {getNowDate} from "@/lib/utils";
import cardList from "@/components/yearPage/list";

export default {
  setup() {
    const store = useStore();
    onMounted(() => {
      getData(store, store.state.field, getNowDate(store.state.field));
    });
    return {
      yearData: computed(() => store.state.yearData),
      errorCode: computed(() => store.state.errorCode),
    }
  },
  components: {
    cardList,
  }
}
</script>

<template>
  <div class="container">
    <error-page :errorCode="errorCode" v-if="errorCode"></error-page>
    <div v-else>
      <card-list :data="yearData"></card-list>
    </div>
  </div>
</template>

<style scoped lang="less">

</style>