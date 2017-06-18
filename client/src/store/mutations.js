export default {
  fetchBooks(state, books) {
    state.books = books
  },

  showMsg(state, { message, type }) {
    state.flash.show = true
    state.flash.message = message
    state.flash.type = type
  },

  hideMsg(state) {
    state.flash.show = false
  },
}
