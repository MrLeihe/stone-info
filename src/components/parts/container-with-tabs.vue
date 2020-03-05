<template>
  <div>
    <header>
      <nav>
        <router-link v-for="(tab, index) in renderTabs" :key="index" />
      </nav>
    </header>
    <article>
      <slot />
    </article>
  </div>
</template>

<script>
export default {
  name: 'container-with-tabs',

  methods: {
    renderTabs() {}
  },

  mounted() {}
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/variables.scss';
.container-with-tabs {
  article {
    background-color: $stoneCoolWhite;
    height: 200px;
  }
}
</style>