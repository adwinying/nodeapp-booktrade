<template>
  <div class="container">
    <h1>Sign Up</h1>
    <br>
    <div class="row">
      <div class="col-sm-5">
        <form v-on:submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name" class="control-label">Name</label>
            <input class="form-control" type="text" placeholder="John Doe" v-model="name">
          </div>
          <div class="form-group">
            <label for="username" class="control-label">Username</label>
            <input class="form-control" type="text" v-model="username">
          </div>
          <div class="form-group">
            <label for="password" class="control-label">Password</label>
            <input class="form-control" type="password" v-model="password">
          </div>
          <div class="form-group">
            <label for="city" class="control-label">City</label>
            <input class="form-control" type="text" v-model="city">
          </div>
          <div class="form-group">
            <label for="state" class="control-label">State</label>
            <input class="form-control" type="text" v-model="state">
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      username: '',
      password: '',
      city: '',
      state: '',
    };
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('signUp', {
        name: this.name,
        username: this.username,
        password: this.password,
        city: this.city,
        state: this.state,
      })
    },
  },
};
</script>

<style lang="sass" scoped>
form
  padding-bottom: 60px
</style>
