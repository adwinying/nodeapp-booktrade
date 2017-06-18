<template>
  <div class="container">
    <h1>Log In</h1>
    <br>
    <div class="row">
      <div class="col-sm-5">
        <form v-on:submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="username" class="control-label">Username</label>
            <input class="form-control" type="text" v-model="username">
          </div>
          <div class="form-group">
            <label for="password" class="control-label">Password</label>
            <input class="form-control" type="password" v-model="password">
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Log In</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    handleSubmit() {
      if (
        this.username !== '' &&
        this.password !== ''
      ) {
        this.$store.dispatch('login', {
          username: this.username,
          password: this.password,
        })
      } else {
        this.$store.dispatch('flashMsg', {
          message: 'Please ensure all fields are not empty',
          type: 'warning',
          duration: 3000,
        })
      }
    },
  },
}
</script>

<style lang="sass" scoped>
form
  padding-bottom: 60px
</style>
