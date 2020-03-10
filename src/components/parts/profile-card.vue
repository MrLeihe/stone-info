<template>
  <div>
    <div class="profile-card-list">
      <ul>
        <li v-for="item in cardInfo" :key="item.label">
          <span v-html="item.label" />
          <span v-html="item.text" />
        </li>
      </ul>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'profile-card',
  props: {
    cardInfo: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/variables.scss';
.profile-card {
  display: flex;

  &__desktop {
    flex-direction: row;
  }

  &__mobile {
    flex-direction: column-reverse;
  }

  &-list {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0 0 0 0.5rem;

      li {
        color: #1f2021;
        padding: 2px 0;
        margin: 2px 0;
        border-bottom: 1px dotted #c5c7c9;

        span:first-child {
          color: #78797a;
          margin-right: 0.7rem;
          font-family: $stoneLabelFont;
        }
      }
    }
  }
}
</style>