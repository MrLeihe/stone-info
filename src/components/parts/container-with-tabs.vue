<template>
  <div>
    <header>
      <nav>
        <router-link
          :class="{ 'router-link-active': tab.name === active }"
          :style="{'z-index': 100 - index }"
          v-for="(tab, index) in tabs"
          :key="index"
          :to="tab.to"
          v-html="tab.text"
        />
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
  props: {
    tabs: Array,
    active: String
  },
  methods: {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/variables.scss';
.container-with-tabs {
  * {
    box-sizing: border-box;
  }

  &__desktop {
    header {
      position: relative;
      nav {
        position: absolute;
        top: 0;
        left: -40px;
        display: flex;
        flex-direction: column;

        a {
          width: 52px;
          color: #fff;
          background-image: url('../../static/img/tabs.png');
          background-repeat: no-repeat;
          background-size: 100% 100%;
          padding: 20px 0 50px 11px;
          margin-top: -32px;
          writing-mode: vertical-lr;
          letter-spacing: 3px;

          &:first-child {
            margin-top: 0;
          }

          &.router-link-active {
            color: #666;
            background-image: url('../../static/img/tabs__active.png');
          }
        }
      }
    }
  }

  &__mobile {
    header {
      nav {
        background-color: $stoneGray;
        display: flex;
        flex-direction: row;

        a {
          color: #fff;
          flex: 1;
          margin: 0;
          flex-grow: 1;
          text-align: center;
          padding: 0.2rem 0;
          border-left: 1px solid $stoneCoolWhite;

          &:first-child {
            border-left: none;
          }

          &.router-link-active {
            color: $stoneBlack;
            background-color: $stoneCoolWhite;
          }
        }
      }
    }
  }

  article {
    background-color: $stoneCoolWhite;
    position: relative;
    z-index: 100;
  }
}
</style>
