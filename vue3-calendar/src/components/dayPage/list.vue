<script>
import ItemList from './item.vue'

export default {
  components: {
    ItemList,
  },
  props: {
    dayData: Object,
  }
}
</script>

<template>
  <div class="list">
    <item-list title="当前年月" :content="dayData['year-month']"></item-list>
    <item-list title="今年属相" :content="dayData.animalsYear"></item-list>
    <item-list title="农历年份" :content="dayData.lunarYear"></item-list>
    <item-list title="适宜事件" :content="dayData.suit"></item-list>
    <item-list title="避免事件" :content="dayData.avoid"></item-list>
  </div>
</template>

<style scoped lang="less">
.list {
  padding: .15rem;
  box-sizing: border-box;

}
</style>