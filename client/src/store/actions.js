import Vue from 'vue'
import router from '../router'

export default {
  flashMsg({ commit }, { message, type, duration }) {
    commit('showMsg', { message, type })

    if (duration) {
      setTimeout(() => {
        commit('hideMsg')
      }, duration)
    }
  },

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

  signUp: ({ commit }, newUser) => {
    console.log(this)
    this.a.flashMsg({ commit }, {
      message: 'Loading...',
      type: 'info',
      duration: 0,
    })

    Vue.http.post('/api/auth/signup', newUser)
      .then(({ data }) => {
        if (data.success) {
          this.a.flashMsg({ commit }, {
            message: 'Successfully signed up. You may now login',
            type: 'success',
            duration: 0,
          })
          router.push('login')
        } else {
          console.error(data.message)
          this.a.flashMsg({ commit }, {
            message: 'Error has occured, please try again later',
            type: 'danger',
            duration: 0,
          })
        }
      })
      .catch((err) => {
        console.error(err)
        this.a.flashMsg({ commit }, {
          message: 'Error has occured, please try again later',
          type: 'danger',
          duration: 0,
        })
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
