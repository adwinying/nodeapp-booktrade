export default {
  allBooks(state) {
    return state.books.list
  },

  recentBooks(state) {
    return state.books.list.slice(0, 6)
  },

  userBooks(state) {
    if (state.auth.user) {
      return state.books.list.filter(book =>
        book.owner._id === state.auth.user._id)
    }

    return undefined
  },

  requestedBooks(state) {
    if (state.auth.user) {
      return state.books.list.filter(book =>
        book.lender === state.auth.user._id)
    }

    return undefined
  },

  pendingBooks(state) {
    if (state.auth.user) {
      return state.books.list.filter(book =>
        book.owner._id === state.auth.user._id &&
        book.lender &&
        book.confirmed === false)
    }

    return undefined
  },

  bookOverlay(state) {
    return {
      active: state.books.isOverlayActive,
      selected: state.books.list[state.books.selectedIndex],
    }
  },

  flashMessage(state) {
    return { ...state.flash }
  },

  isSignedIn(state) {
    return state.auth.isSignedIn
  },

  profile(state) {
    return state.auth.user
  },

}
