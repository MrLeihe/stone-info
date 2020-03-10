// apply class to component
<script>
import { countClassData, useClassData } from '@/utils/function'
export default {
  computed: {
    mobileMode() {
      return this.$store.state.mobileMode
    },

    classData() {
      if (!this.$options.name) {
        return {}
      } else {
        return countClassData(this.$options.name, this.mobileMode)
      }
    }
  },

  mounted() {
    // watching mobileMode change
    // inject class to component
    this.$watch(
      'classData',
      function _self(value) {
        // self excute useClassData()
        useClassData(value, this.$el)
        return _self
      }.call(this, this.classData)
    )
  }
}
</script>
