<template>
  <div class="container">
    <h1>Dashboard</h1>
    <router-link to="/add" class="btn btn-sm btn-primary pull-right">
      <i class="fa fa-plus"></i>
      Add Book
    </router-link>
    <br>
    <ul class="nav nav-tabs">
      <li v-bind:class="activeTab === 'myBooks' ? 'active' : ''">
        <a class="nav-tab" href="#" v-on:click.prevent="handleTab">My Books</a>
      </li>
      <li v-bind:class="activeTab === 'myReq' ? 'active' : ''">
        <a class="nav-tab" href="#" v-on:click.prevent="handleTab">Requested Books</a>
      </li>
      <li v-bind:class="activeTab === 'pendingReq' ? 'active' : ''">
        <a class="nav-tab" href="#" v-on:click.prevent="handleTab">Pending Requests</a>
      </li>
      <li v-bind:class="activeTab === 'profile' ? 'active' : ''">
        <a class="nav-tab" href="#" v-on:click.prevent="handleTab">Update Profile</a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane fade in"
        v-bind:class="activeTab === 'myBooks' ? 'active' : ''">
        <book-list v-bind:books="userBooks"></book-list>
      </div>
      <div class="tab-pane fade in"
        v-bind:class="activeTab === 'myReq' ? 'active' : ''">
        <book-list v-bind:books="requestedBooks"></book-list>
      </div>
      <div class="tab-pane fade in"
        v-bind:class="activeTab === 'pendingReq' ? 'active' : ''">
        <book-list v-bind:books="pendingBooks"></book-list>
      </div>
      <div class="tab-pane fade in profile"
        v-bind:class="activeTab === 'profile' ? 'active' : ''">
        <p><i><span class="form-required">*</span> Required fields</i></p>
        <div class="row" v-if="profile">
          <div class="col-sm-5">
            <form v-on:submit.prevent="handleForm">
              <div class="form-group">
                <label for="username" class="control-label">
                  Name
                  <span class="form-required">*</span>
                </label>
                <input class="form-control" type="text" v-model="profile.name">
              </div>
              <div class="form-group">
                <label for="username" class="control-label">
                  City
                  <span class="form-required">*</span>
                </label>
                <input class="form-control" type="text" v-model="profile.city">
              </div>
              <div class="form-group">
                <label for="username" class="control-label">
                  State
                  <span class="form-required">*</span>
                </label>
                <input class="form-control" type="text" v-model="profile.state">
              </div>
              <div class="form-group">
                <label for="username" class="control-label">
                  Current Password
                  <span class="form-required">*</span>
                </label>
                <input class="form-control" type="password" v-model="password">
              </div>
              <div class="form-group">
                <label for="username" class="control-label">
                  New Password
                </label>
                <input class="form-control" type="password" v-model="newPassword">
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary">Update profile</button>
              </div><!-- /.form-group -->
            </form>
          </div><!-- /.col-sm-5 -->
        </div><!-- /.row -->
      </div><!-- /.profile -->
    </div><!-- /.tab-content -->
  </div><!-- /.container -->
</template>

<script>
import { mapGetters } from 'vuex'
import guard from '../router/guard'

import BookList from './BookList'

export default {
  name: 'Dashboard',
  components: {
    BookList,
  },
  data() {
    return {
      activeTab: 'myBooks',
      password: '',
      newPassword: '',
    }
  },
  watch: {
    profile() {
      this.password = ''
      this.newPassword = ''
    },
  },
  beforeRouteEnter: guard.requireUser,
  computed: mapGetters([
    'profile',
    'userBooks',
    'requestedBooks',
    'pendingBooks',
  ]),
  methods: {
    handleTab(e) {
      const tab = e.target.text
      switch (tab) {
        case 'My Books':
          this.activeTab = 'myBooks'
          break

        case 'Requested Books':
          this.activeTab = 'myReq'
          break

        case 'Pending Requests':
          this.activeTab = 'pendingReq'
          break

        case 'Update Profile':
          this.activeTab = 'profile'
          break

        default:
          this.activeTab = 'myBooks'
      }
    },

    handleForm() {
      if (
        this.profile.name !== '' &&
        this.profile.city !== '' &&
        this.profile.state !== '' &&
        this.password !== ''
      ) {
        this.$store.dispatch('updateProfile', {
          _id: this.profile._id,
          username: this.profile.username,
          password: this.password,
          newPassword: this.newPassword || undefined,
          name: this.profile.name,
          city: this.profile.city,
          state: this.profile.state,
        })
      } else if (this.password === '') {
        this.$store.dispatch('flashMsg', {
          message: 'Please enter your password',
          type: 'warning',
          duration: 3000,
        })
      } else {
        this.$store.dispatch('flashMsg', {
          message: 'Please ensure all required fields are not empty',
          type: 'warning',
          duration: 3000,
        })
      }
    },
  },
}
</script>

<style lang="sass" scoped>
h1
  display: inline-block

.btn
  margin: 20px 0 0

.tab-content
  padding-bottom: 60px

.profile
  padding: 30px 0
</style>
