<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" 
          v-on:click="toggleNavbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand" to="/">BookTrade</router-link>
      </div>

      <div class="navbar-collapse"
        v-bind:class="{ active: toggle }">
        <ul v-if="isSignedIn" class="nav navbar-nav">
          <li>
            <router-link to="/all">All Books</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li v-if="isSignedIn">
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
          <li v-if="isSignedIn">
            <a href="#" v-on:click.prevent="handleSignout">Log Out</a>
          </li>
          <li v-if="!isSignedIn">
            <router-link to="/signup">Sign Up</router-link>
          </li>
          <li v-if="!isSignedIn">
            <router-link to="/login">Log In</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  data() {
    return {
      toggle: false,
    }
  },
  computed: mapGetters(['isSignedIn']),
  methods: {
    handleSignout() {
      return this.$store.dispatch('logout')
    },
    toggleNavbar() {
      this.toggle = !this.toggle
    },
  },
}
</script>

<style lang="sass" scoped>
a.router-link-exact-active
  color: #ffffff !important
  background-color: #393a35

@media screen and (max-width: 767px)
  .navbar-collapse
    overflow-y: hidden
    max-height: 0
    transition: all .5s cubic-bezier(0, 1, 0.5, 1)

  .navbar-collapse.active
    display: block
    max-height: 200px

</style>
