<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand" to="/">BookTrade</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li><a href="#">All Books</a></li>
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
  computed: mapGetters(['isSignedIn']),
  methods: {
    handleSignout() {
      return this.$store.dispatch('logout')
    },
  },
}
</script>

<style lang="sass" scoped>
a.router-link-exact-active
  color: #ffffff !important
  background-color: #393a35
</style>
