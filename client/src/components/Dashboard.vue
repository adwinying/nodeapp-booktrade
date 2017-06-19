<template>
  <div class="container">
    <h1>Dashboard</h1>
    <br>
    <ul class="nav nav-tabs">
      <li v-bind:class="activeTab === 'myBooks' ? 'active' : ''">
        <a
          class="nav-tab"
          href="#"
          v-on:click.prevent="handleTab"
        >My Books</a>
      </li>
      <li v-bind:class="activeTab === 'myReq' ? 'active' : ''">
        <a
          class="nav-tab"
          href="#"
          v-on:click.prevent="handleTab"
        >Requested Books</a>
      </li>
      <li v-bind:class="activeTab === 'pendingReq' ? 'active' : ''">
        <a
          class="nav-tab"
          href="#"
          v-on:click.prevent="handleTab"
        >Pending Requests</a>
      </li>
      <li v-bind:class="activeTab === 'profile' ? 'active' : ''">
        <a
          class="nav-tab"
          href="#"
          v-on:click.prevent="handleTab"
        >Update Profile</a>
      </li>
    </ul>
    <div class="tab-content">
      <div
        class="tab-pane fade in"
        v-bind:class="activeTab === 'myBooks' ? 'active' : ''"
      >
        <book-list v-bind:books="userBooks"></book-list>
      </div>
      <div
        class="tab-pane fade in"
        v-bind:class="activeTab === 'myReq' ? 'active' : ''"
      >
        <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
      </div>
      <div
        class="tab-pane fade in"
        v-bind:class="activeTab === 'pendingReq' ? 'active' : ''"
      >
        <p>asdasdFood truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
      </div>
      <div
        class="tab-pane fade in"
        v-bind:class="activeTab === 'profile' ? 'active' : ''"
      >
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  computed: mapGetters(['profile', 'userBooks']),
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
.tab-content
  padding-bottom: 60px

.tab-pane
  padding: 30px 0

.form-required
  color: red
</style>
