<script>
import ListItem from "@/components/yearPage/list-item.vue";

export default {
  components: {ListItem},
  props: {
    data:Array,
  },
}
</script>

<template>
  <div>
    <ul>
      <list-item v-for="(item,index) in data" :key="index" :holidays="item"></list-item>
    </ul>
  </div>
</template>

<style scoped lang="less">

</style>