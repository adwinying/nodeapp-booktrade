<template>
  <div class="container">
    <div class="jumbotron text-center">
      <h1>BookTrade</h1>
      <p>
        Knowledge is Power. Sharing is Caring.<br>
        Why not combine both?
      </p>
      <router-link to="/all" class="btn btn-primary">All Books</router-link>
    </div>

    <div class="row features">
      <div class="col-sm-4">
        <h3>
          <i class="fa fa-clock-o" aria-hidden="true"></i> 
          Quick and Easy
        </h3>
        <p>
          Typewriter williamsburg gochujang cronut, irony sriracha skateboard gastropub coloring book shabby chic butcher freegan stumptown schlitz bespoke. Lumbersexual photo booth chillwave, roof party bicycle rights gentrify venmo fam mixtape wolf. Woke fap flannel, pug cardigan intelligentsia fanny pack.
        </p>
      </div>
      <div class="col-sm-4">
        <h3>
          <i class="fa fa-share" aria-hidden="true"></i> 
          Shareable with Others
        </h3>
        <p>
          Vice 8-bit retro trust fund af cliche. Food truck street art crucifix actually drinking vinegar, synth offal plaid flexitarian coloring book chartreuse. Polaroid hexagon XOXO shoreditch, intelligentsia asymmetrical man bun pop-up flannel hot chicken swag kombucha street art live-edge.
        </p>
      </div>
      <div class="col-sm-4">
        <h3>
          <i class="fa fa-book" aria-hidden="true"></i> 
          Spread Knowledge
        </h3>
        <p>
          Typewriter wolf vice snackwave helvetica chartreuse, try-hard ugh air plant. Gastropub subway tile literally, vape venmo farm-to-table taxidermy YOLO lumbersexual health goth master cleanse hell of meh retro. Hoodie farm-to-table sustainable, knausgaard cardigan yuccie jean shorts. 
        </p>
      </div>
    </div>

    <div class="recent-books">
      <h2 class="text-center">Recently Added Books</h2>
      <book-list v-bind:books="recentBooks"></book-list>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import BookList from './BookList'

export default {
  name: 'home',
  components: {
    BookList,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  created() {
    this.getBooks()
  },
  computed: mapGetters(['recentBooks']),
  methods: {
    getBooks() {
      this.$store.dispatch('fetchBooks')
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.features
  padding: 40px 0
</style>
