import Vue from 'vue'
import router from '../router'

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

  signUp({ commit }, newUser) {
    Vue.http.post('/api/auth/signup', newUser)
      .then(({ data }) => {
        if (data.success) {
          console.log(data.user)
          router.push('login')
        } else {
          console.error(data.message)
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
