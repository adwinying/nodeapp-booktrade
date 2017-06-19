<template>
  <div id="app">
    <navbar></navbar>
    <flash-message></flash-message>
    <book-overlay></book-overlay>
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
import BookOverlay from './components/BookOverlay'

export default {
  name: 'app',
  components: {
    Navbar,
    appFooter: Footer,
    FlashMessage,
    BookOverlay,
  },
  created() {
    this.$store.dispatch('checkAuth')
    this.$store.dispatch('fetchBooks')
  },
};
</script>

<style lang="sass">
.fade-enter-active,
.fade-leave-active,
.overlay-enter-active,
.overlay-leave-active
  transition: opacity .4s

.fade-enter,
.fade-leave,
.overlay-enter,
.overlay-leave-to
  opacity: 0

.form-required
  color: red
</style>
