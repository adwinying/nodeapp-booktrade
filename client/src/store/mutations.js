export default {
  fetchBooks(state, books) {
    state.books.list = books
  },

  addBook(state, book) {
    state.books.list.unshift(book)
  },

  showMsg(state, { message, type }) {
    state.flash.show = true
    state.flash.message = message
    state.flash.type = type
  },

  hideMsg(state) {
    state.flash.show = false
  },

  updateUser(state, user) {
    state.auth.isSignedIn = true
    state.auth.user = user
  },

  logoutUser(state) {
    state.auth.isSignedIn = false
    state.auth.user = undefined
  },
}
