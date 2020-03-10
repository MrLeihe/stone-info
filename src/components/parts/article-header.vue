<template>
  <header>
    <h2 v-text="title" />
    <div class="article-header--description" v-if="description">
      <template v-if="Array.isArray(description)">
        <p v-for="field in description" :key="field.label">
          <label v-text="field.label" />
          <span v-html="field.text" />
        </p>
      </template>
      <template v-if="typeof description === 'string'">
        <p>
          <span v-html="description"></span>
        </p>
      </template>
    </div>
  </header>
</template>

<script>
export default {
  name: 'article-header',
  props: {
    title: {
      type: String,
      default: 'stoneの个人资料'
    },
    description: [String, Array]
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/variables.scss';
.article-header {
  margin-bottom: 20px;

  h2 {
    text-align: center;
    padding-bottom: 0.5rem;
    margin: 0;
    color: #323435;
    border-bottom: 1px solid #707274;
    font-family: $stoneLabelFont;
  }

  &__desktop {
    .article-header--description {
      text-align: center;
      color: #8b8c8d;
      font-size: 10px;
    }

    p {
      margin: 0;
      display: inline-block;
      margin: 0 0.5rem;
    }

    label {
      margin-left: 0.5rem;
    }
  }

  &__mobile {
    h2 {
      font-size: 1.5rem;
    }

    .article-header--description {
      display: none;
    }
  }
}
</style>
