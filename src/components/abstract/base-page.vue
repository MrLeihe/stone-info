<script>
import { countClassData, useClassData } from '@/utils/function'
import * as Config from '@/config/config.js'
import * as RadarConfig from '@/config/radar-config.js'
import ArticleHeader from '@/components/parts/article-header.vue'
import RadarChart from '@/components/parts/radar-chart.vue'
import ProfileCard from '@/components/parts/profile-card.vue'
export default {
  components: {
    'article-header': ArticleHeader,
    'radar-chart': RadarChart,
    'profile-card': ProfileCard
  },
  data() {
    return {
      ...Config,
      ...RadarConfig
    }
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
      return this.injectClass
    }
  }
}
</script>

<style lang="scss" scoped>
.page-view {
  &__desktop {
    padding: 35px;
  }
  &__mobile {
    padding: 15px;
  }
}
</style>
