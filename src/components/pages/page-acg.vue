<template>
  <div>
    <article-header title="stoneの角色设定" :description="getRandomItem(Fragment.concat(FragmentAcg))" />
    <radar-chart :radar-indicator="AcgRadarInfo"></radar-chart>
  </div>
</template>

<script>
import BasePage from '@/components/abstract/base-page.vue'
import { getRandomItem } from '@/utils/function'
export default {
  name: 'page-acg',
  extends: BasePage,
  methods: {
    getRandomItem
  }
}
</script>
