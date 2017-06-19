<template>
  <transition name="overlay">
    <div class="book-overlay-wrapper"
      v-if="bookOverlay.active">
      <div class="container">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <div class="modal-close" v-on:click="toggleOverlay">
                <i class="fa fa-times"></i>
              </div>
              <div class="row">
                <div class="col-sm-4">
                  <img
                    :src="bookOverlay.selected.imageURL || '/static/missing.jpg'"
                    :alt="bookOverlay.selected.title">
                </div>
                <div class="col-sm-8">
                  <h2>{{bookOverlay.selected.title}}</h2>
                  <h4><small><i>
                    Owned by {{bookOverlay.selected.owner}}
                  </i></small></h4>
                  <p>
                    <strong>Status:</strong>
                    <span v-if="!bookOverlay.selected.lender">Available</span>
                    <span v-if="bookOverlay.selected.lender && !bookOverlay.selected.confirmed">Borrow request accepted; waiting for owner approval</span>
                    <span v-if="bookOverlay.selected.lender && !bookOverlay.selected.confirmed">Borrow request accepted; owner approved.</span>
                  </p>
                  <br>
                  <button class="btn btn-danger"
                    v-if="bookOverlay.selected.owner === profile._id"
                    v-on:click="handleDelete">
                    Delete
                  </button>
                  <button class="btn btn-primary"
                    v-if="bookOverlay.selected.owner === profile._id &&
                    bookOverlay.selected.lender &&
                    !bookOverlay.selected.confirmed">
                    Approve Request
                  </button>
                  <button class="btn btn-primary"
                    v-if="bookOverlay.selected.owner !== profile._id &&
                    !bookOverlay.selected.lender">
                    Borrow
                  </button>
                  <button class="btn btn-primary"
                    v-if="bookOverlay.selected.lender === profile._id">
                    Un-borrow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BookOverlay',
  computed: mapGetters(['bookOverlay', 'profile']),
  methods: {
    toggleOverlay() {
      this.$store.commit('toggleOverlay')
    },
    handleDelete() {
      this.$store.dispatch('deleteBook', this.bookOverlay.selected)
    },
  },
}
</script>

<style lang="sass" scoped>
.book-overlay-wrapper
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  z-index: 90
  background-color: rgba(0, 0, 0, 0.7)

.modal-dialog
  position: relative
  margin: 200px auto

.modal-close
  cursor: hand
  cursor: pointer
  position: absolute
  right: 15px
  z-index: 101
  color: #000
  font-size: 20px

img
  width: 100%
</style>
