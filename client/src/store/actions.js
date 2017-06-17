import Vue from 'vue'

export default {
  fetchBooks({ commit }) {
    Vue.http.get('/api/book/all')
      .then((res) => {
        if (res.data.success) {
          commit('fetchBooks', res.data.books)
        } else {
          console.error(res.data.message)
        }
      })
      .catch((err) => {
        console.error(err)
      })
  },

  logIn() {
    Vue.http.post('/api/auth/signin', {
      username: 'adwin',
      password: 'secret',
    })
      .then((res) => {
        console.log(res.data)
        Vue.http.get('/api/auth/profile')
          .then((profRes) => {
            console.log(profRes.data)
          })
      })
  },
}
