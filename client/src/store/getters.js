export default {
  recentBooks(state) {
    return state.books.list.slice(0, 6)
  },

  userBooks(state) {
    if (state.auth.user) {
      return state.books.list.filter(book =>
        book.owner === state.auth.user._id)
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
        book.owner === state.auth.user._id &&
        book.lender &&
        book.confirmed === false)
    }

    return undefined
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
