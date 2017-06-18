export default {
  recentBooks(state) {
    return state.books.slice(0, 6)
  },

  flashMessage(state) {
    return { ...state.flash }
  },
}
