<template>
  <footer class="text-center clearfix">
    <p>
      BookTrade webapp made for &nbsp;
      <a href="//www.freecodecamp.com/challenges/manage-a-book-trading-club">
        <i class="fa fa-free-code-camp" aria-hidden="true" />
        &nbsp;freeCodeCamp
      </a>. <br/>
      Powered by Vue.js, NodeJS/Express and&nbsp;
      <i class="fa fa-google" aria-hidden="true" />
      &nbsp;Google Books API. <br/>
      Build by <a href="//iadw.in">Adwin</a>.
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {

    }
  },
}
</script>

<style lang="sass" scoped>
footer
  background-color: #444
  padding: 15px 0 0
  color: #e4e4e4
</style>
