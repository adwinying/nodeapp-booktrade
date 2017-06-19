<template>
  <div class="container">
    <h1>New Book</h1>
    <div class="row">
      <div class="col-sm-5">
        <form v-on:submit.prevent="handleForm">
          <div class="form-group">
            <label for="username" class="control-label">
              Book Title
              <span class="form-required">*</span>
            </label>
            <input class="form-control" type="text" v-model="bookTitle">
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Add</button>
          </div><!-- /.form-group -->
        </form>
      </div><!-- /.col-sm-5 -->
    </div><!-- /.row -->
  </div>
</template>

<script>
export default {
  name: 'NewBook',
  data() {
    return {
      bookTitle: '',
    }
  },
  methods: {
    handleForm() {
      if (this.bookTitle !== '') {
        this.$store.dispatch('addBook', {
          title: this.bookTitle,
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
form
  padding-bottom: 300px
</style>
