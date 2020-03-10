<template>
  <div>我是stone</div>
</template>

<script>
import BasePage from '@/components/abstract/base-page.vue'
export default {
  name: 'about',
  extends: BasePage,
  data() {
    return {}
  },
  created() {
    console.log('options', this.$options)
  }
}
</script>
