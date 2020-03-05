<template></template>

<script>
import { countClassData, useClassData } from '@/utils/function'
export default {
  data() {
    return {}
  },

  computed: {
    mobileMode() {
      return this.$store.state.mobileMode
    }
  },

  created() {
    this.$store.commit('setLoadedPageComName', this.$options.name)
  },

  mounted() {
    this.$watch('mobileMode', this.injectClass.call(this, this.mobileMode))
  },

  methods: {
    injectClass(value) {
      const classData = countClassData('page-view', value)
      useClassData(classData, this.$el)
      return injectClass
    }
  }
}
</script>

<style lang="scss" scoped>
.page-view {
  &__desktop {
  }

  &__mobile {
  }
}
</style>