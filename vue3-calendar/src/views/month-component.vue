<script>
import {computed, onMounted} from "vue";
import getData from "@/service";
import {useStore} from "vuex";
import {getNowDate} from "@/lib/utils";
import cardList from "@/components/monthPage/list.vue";
import errorData from '@/data/error'

export default {
  setup() {
    let store = useStore();
    onMounted(() => {
      getData(store, store.state.field, /*getNowDate(store.state.field)*/'2025-10');
    })

    return {
      monthData: computed(() => store.state.monthData),
      errorCode: computed(() => store.state.errorCode),
    };
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
      <card-list :data="monthData"></card-list>
    </div>
  </div>
</template>

<style scoped lang="less">

</style>