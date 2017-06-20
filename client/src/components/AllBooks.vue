<template>
  <div class="container">
    <h1>All Books</h1>
    <div class="row">
      <div class="col-sm-7">
        <input
          type="text"
          class="form-control"
          placeholder="Search Title"
          v-model="query"
          v-on:input="handleSearch"
        />
      </div>
    </div>
    <book-list v-bind:books="query === '' ? allBooks : searchResults"></book-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BookList from './BookList'

export default {
  name: 'AllBooks',
  data() {
    return {
      query: '',
    }
  },
  computed: mapGetters(['allBooks', 'searchResults']),
  components: {
    BookList,
  },
  methods: {
    handleSearch() {
      this.$store.commit('search', this.query)
    },
  },
}
</script>

<style lang="sass" scoped>
</style>
