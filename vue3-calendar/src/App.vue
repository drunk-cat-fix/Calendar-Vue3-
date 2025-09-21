<template>
  <div id="nav">

  </div>
  <router-view to="/"></router-view>

  <tab-bar></tab-bar>
</template>

<style lang="less">
.container{
  padding: .82rem 0 .44rem 0;
  box-sizing: border-box;
}
</style>
<script>
import TabBar from '@/components/tabBar'
import {ref, watch} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import state from "@/store/state";
export default {
  components: {
    TabBar,
  },
  setup(){
    const store = useStore();
    const router = useRouter();
    watch(
        ()=>router.currentRoute.value.name,
        (value)=>{
          store.commit("setField",value);
        }
    )
    return store.state;
  }
}
</script>