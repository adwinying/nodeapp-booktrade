<template>
  <div id="app">
    <navbar></navbar>
    <flash-message></flash-message>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FlashMessage from './components/FlashMessage'

export default {
  name: 'app',
  components: {
    Navbar,
    appFooter: Footer,
    FlashMessage,
  },
  created() {
    this.$store.dispatch('checkAuth')
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

.fade-enter-active, .fade-leave-active 
  transition: opacity .4s

.fade-enter, .fade-leave
  opacity: 0

</style>
