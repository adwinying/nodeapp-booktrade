<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Navbar,
    appFooter: Footer,
  },
};
</script>

<style lang="sass">
.book-cover
  width: 100%
  height: 0
  padding-bottom: 150%
  border: 1px solid #777
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  margin: 15px 0
</style>
