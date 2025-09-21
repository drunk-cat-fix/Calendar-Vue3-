<script>
import {computed, onMounted} from "vue";
import getData from "@/service";
import {useStore} from "vuex";
import {getNowDate} from "@/lib/utils";
import cardList from "@/components/monthPage/list.vue";

export default {
  setup(){
    let store = useStore();
    onMounted(()=>{
      getData(store,store.state.field, /*getNowDate(store.state.field)*/'2025-10');
    })

    return {
      monthData:computed(()=>store.state.monthData),
    };
  },
  components: {
    cardList,
  }
}
</script>

<template>
<div>
  <card-list :data="monthData"></card-list>
</div>
</template>

<style scoped lang="less">

</style>