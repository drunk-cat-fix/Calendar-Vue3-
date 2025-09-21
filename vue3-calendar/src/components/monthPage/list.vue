<script>
import listItem from "@/components/monthPage/list-item.vue";

export default {
  setup() {

  },
  components: {
    listItem,
  },
  props:{
    data: Array,
  },
}
</script>

<template>
  <ul>
    <list-item v-for="(item, index) in data" :key="index" :item="item"></list-item>
  </ul>
</template>

<style scoped lang="less">

</style>