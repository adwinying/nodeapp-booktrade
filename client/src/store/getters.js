export default {
  recentBooks(state) {
    return state.books.slice(0, 6)
  },
}
