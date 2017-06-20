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
                    Owned by {{bookOverlay.selected.owner.username}}
                  </i></small></h4>
                  <p>
                    <strong>Status:</strong>
                    <span v-if="!bookOverlay.selected.borrower">Available</span>
                    <span v-if="bookOverlay.selected.borrower && !bookOverlay.selected.confirmed">Borrow request made by <strong>{{bookOverlay.selected.borrower.username}}</strong>; awaiting for <strong>{{bookOverlay.selected.owner.username}}'s</strong> approval.</span>
                    <span v-if="bookOverlay.selected.borrower && bookOverlay.selected.confirmed">Borrow request approved by <strong>{{bookOverlay.selected.owner.username}}</strong>.</span>
                  </p>
                  <br>
                  <button class="btn btn-primary"
                    v-if="bookOverlay.selected.owner._id === profile._id &&
                    bookOverlay.selected.borrower &&
                    !bookOverlay.selected.confirmed"
                    v-on:click="handleLend">
                    Approve Request
                  </button>
                  <button class="btn btn-primary"
                    v-if="bookOverlay.selected.owner._id !== profile._id &&
                    !bookOverlay.selected.borrower"
                    v-on:click="handleBorrow">
                    Borrow
                  </button>
                  <button class="btn btn-primary"
                    v-if="bookOverlay.selected.borrower &&
                      bookOverlay.selected.borrower._id === profile._id"
                      v-on:click="handleUnborrow">
                    Un-borrow
                  </button>
                  <button class="btn btn-danger"
                    v-if="bookOverlay.selected.owner._id === profile._id"
                    v-on:click="handleDelete">
                    Delete
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
      this.$store.dispatch('deleteBook', this.bookOverlay.selected._id)
    },
    handleLend() {
      this.$store.dispatch('updateBook', {
        ...this.bookOverlay.selected,
        confirmed: true,
      })
    },
    handleBorrow() {
      this.$store.dispatch('updateBook', {
        ...this.bookOverlay.selected,
        borrower: this.profile,
      })
    },
    handleUnborrow() {
      this.$store.dispatch('updateBook', {
        ...this.bookOverlay.selected,
        borrower: undefined,
      })
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
