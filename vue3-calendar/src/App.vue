<template>
  <div id="nav">
    <top-header >{{ headerTitle }}</top-header>
    <search-input :placeholder="placeholder" :maxLength="maxLength"></search-input>
  </div>
  <router-view to="/"></router-view>

  <tab-bar></tab-bar>
</template>

<style lang="less">
.container {
  padding: .82rem 0 .44rem 0;
  box-sizing: border-box;
}
</style>
<script>
import TopHeader from '@/components/topHeader/index.vue'
import TabBar from '@/components/tabBar'
import SearchInput from "@/components/searchInput/index.vue";
import {ref, watch} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export default {
  components: {
    TabBar,
    TopHeader,
    SearchInput,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    watch(
        () => router.currentRoute.value.name,
        (value) => {
          store.commit("setHeaderTitle", value);
          store.commit("setPlaceHolder", value);
          store.commit("setMaxLength", value);
          store.commit("setField", value);
        }
    );
    return store.state;
  }
}
</script>