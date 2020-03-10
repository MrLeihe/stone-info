<template>
  <footer>
    <p>
      Copyright &copy; 2020
      <a href="http://stonehelei.com" target="_blank">stonehelei.com</a>
      by
      <a href="http://stonehelei.com" target="_blank">stone</a>
    </p>
    <p>All rights reserved.</p>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/styles/scss/variables.scss';
footer {
  color: $stoneBlack;
  background-color: #fff;
  padding: 3em 0 1.5em;
  font-size: 0.8rem;
  text-align: center;
  font-family: '微软雅黑', '宋体';
  margin-top: 250px;

  a {
    text-decoration: none;
  }

  p {
    margin: 0;
  }
}
</style>