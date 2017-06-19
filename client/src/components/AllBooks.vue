<template>
  <div class="container">
    <h1>All Books</h1>
    <book-list v-bind:books="allBooks"></book-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BookList from './BookList'

export default {
  name: 'AllBooks',
  data() {
    return {

    }
  },
  computed: mapGetters(['allBooks']),
  components: {
    BookList,
  },
}
</script>

<style lang="sass" scoped>
</style>
