<template>
  <div class="container">
    <div class="jumbotron text-center">
      <h1>BookTrade</h1>
      <p>
        Knowledge is Power. Sharing is Caring.<br>
        Why not combine both?
      </p>
      <a href="#" class="btn btn-primary">View All Books</a>
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
          <i class="fa fa-user-secret" aria-hidden="true"></i> 
          Spead Knowledge
        </h3>
        <p>
          Typewriter wolf vice snackwave helvetica chartreuse, try-hard ugh air plant. Gastropub subway tile literally, vape venmo farm-to-table taxidermy YOLO lumbersexual health goth master cleanse hell of meh retro. Hoodie farm-to-table sustainable, knausgaard cardigan yuccie jean shorts. 
        </p>
      </div>
    </div>

    <div class="recentbooks">
      <h2 class="text-center">Recently Added Books</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  created() {
    this.getBooks()
  },
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
