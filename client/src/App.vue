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
.fade-enter-active, .fade-leave-active 
  transition: opacity .4s

.fade-enter, .fade-leave
  opacity: 0

</style>
