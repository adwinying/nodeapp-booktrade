<template>
  <div class="row books-wrapper">
    <div class="col-xs-12" v-if="books.length === 0">
      <i>No Books Found</i>
    </div>
    <div class="col-xs-6 col-sm-2" v-for="book in books">
      <div class="book-cover"
        v-bind:style="{
          backgroundImage: 
            'url(' + (book.imageURL || '/static/missing.jpg') + ')'
        }"
        v-bind:class="path !== '/' ? 'clickable' : ''"
        v-on:click="toggleOverlay(book)"
      >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  props: ['books'],
  data() {
    return {
      path: this.$route.path,
    }
  },
  methods: {
    toggleOverlay(book) {
      if (this.path !== '/') {
        this.$store.commit('toggleOverlay', book)
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.books-wrapper
  margin-top: 30px
  margin-bottom: 30px

.book-cover
  width: 100%
  height: 0
  padding-bottom: 150%
  border: 1px solid #777
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  margin: 15px 0

.clickable
  cursor: hand
  cursor: pointer
</style>
