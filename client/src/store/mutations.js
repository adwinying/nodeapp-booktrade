export default {
  fetchBooks(state, books) {
    state.books.list = books
  },

  addBook(state, book) {
    state.books.list.unshift(book)
  },

  deleteBook(state, bookId) {
    state.books.list.splice(
      state.books.list.findIndex(book =>
        book._id === bookId),
      1)
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

  toggleOverlay(state, selectedBook) {
    if (selectedBook) {
      state.books.selectedIndex = state.books.list.findIndex(book =>
        book._id === selectedBook._id)
    }
    state.books.isOverlayActive = !state.books.isOverlayActive
  },
}
