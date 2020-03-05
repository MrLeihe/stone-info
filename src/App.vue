<template>
  <div id="main">
    <div id="main-body">
      <container-with-tabs>
        <router-view />
      </container-with-tabs>
    </div>
    <div id="main-footer">
      <main-footer />
    </div>
  </div>
</template>

<script>
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
      mobileCritical: 768
    }
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
#main {
  &-body {
    position: relative;
    max-width: 960px;
    width: 90%;
    margin: 0 auto;
    margin-top: 5rem;
    min-height: 100vh;
  }
}
</style>