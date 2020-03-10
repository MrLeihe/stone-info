<template>
  <div class="main">
    <div class="main-body">
      <container-with-tabs :tabs="navTabs" :active="loadedPageComName">
        <router-view />
      </container-with-tabs>
    </div>
    <div class="main-footer">
      <main-footer />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import StoneJs from '@stonejs/utils'
import MainFooter from '@/components/parts/main-footer.vue'
import ContainerWithTabs from '@/components/parts/container-with-tabs.vue'

export default {
  name: 'app',
  components: {
    'main-footer': MainFooter,
    'container-with-tabs': ContainerWithTabs
  },

  data() {
    return {
      // 判定为手机的临界宽度
      mobileCritical: 768,
      navTabs: [
        {
          name: 'page-normal',
          text: '日常版',
          to: '/normal'
        },
        {
          name: 'page-job',
          text: '求职简历',
          to: '/job'
        },
        {
          name: 'page-acg',
          text: '二次元',
          to: '/acg'
        },
        {
          name: 'page-about',
          text: '关于',
          to: '/about'
        }
      ]
    }
  },

  computed: {
    ...mapState({
      loadedPageComName: state => state.loadedPageComName
    })
  },

  created() {
    window.addEventListener('resize', this.modeCallback())
  },

  methods: {
    modeCallback() {
      return StoneJs.debounce({
        fn: () => {
          console.log('listen resize')
          this.$store.commit('setMobileMode', window.innerWidth <= this.mobileCritical)
        },
        wait: 300,
        runSync: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  &.app__mobile {
    padding-top: 2rem;
  }

  &.app__desktop {
    padding-top: 5rem;
  }

  &-body {
    position: relative;
    max-width: 960px;
    width: 90%;
    margin: 0 auto;
    min-height: 100vh;
  }
}
</style>
