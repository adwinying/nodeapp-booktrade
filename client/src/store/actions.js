import Vue from 'vue'

export default {
  fetchBooks() {
    Vue.http.get('api/book/all')
      .then((res) => {
        console.log(res)
      })
      .catch(console.log)
  },
}
