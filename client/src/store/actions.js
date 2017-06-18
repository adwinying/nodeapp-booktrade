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

  checkAuth({ commit }) {
    Vue.http.get('/api/auth/profile')
      .then(({ data }) => {
        if (data.success) {
          commit('updateUser', data.user)
        } else {
          commit('logoutUser')
        }
      })
      .catch((err) => {
        console.error(err)
      })
  },

  signup: ({ commit }, newUser) => {
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
          this.a.flashMsg({ commit }, {
            message: data.message,
            type: 'danger',
            duration: 0,
          })
        }
      })
      .catch((err) => {
        console.error(err)
        this.a.flashErr({ commit })
      })
  },

  login: ({ commit }, userInfo) => {
    this.a.flashMsg({ commit }, {
      message: 'Loading...',
      type: 'info',
      duration: 0,
    })

    Vue.http.post('/api/auth/signin', userInfo)
      .then(({ data }) => {
        if (data.success) {
          commit('updateUser', data.user)
          this.a.flashMsg({ commit }, {
            message: 'Successfully logged in',
            type: 'success',
            duration: 3000,
          })
          router.push('/dashboard')
        } else {
          this.a.flashMsg({ commit }, {
            message: data.message,
            type: 'danger',
            duration: 0,
          })
        }
      })
      .catch((err) => {
        console.error(err)
        this.a.flashErr({ commit })
      })
  },

  logout: ({ commit }) => {
    Vue.http.get('/api/auth/signout')
      .then(({ data }) => {
        if (data.success) {
          this.a.flashMsg({ commit }, {
            message: 'Successfully signed out.',
            type: 'success',
            duration: 3000,
          })
          commit('logoutUser')
          router.push('/')
        } else {
          console.error(data.message)
          this.a.flashErr({ commit })
        }
      })
      .catch((err) => {
        console.error(err)
        this.a.flashErr({ commit })
      })
  },

  updateProfile: ({ commit }, userInfo) => {
    this.a.flashMsg({ commit }, {
      message: 'Updating...',
      type: 'info',
      duration: 0,
    })

    Vue.http.put('/api/auth/profile', userInfo)
      .then(({ data }) => {
        if (data.success) {
          commit('updateUser', data.user)
          this.a.flashMsg({ commit }, {
            message: 'Successfully updated profile.',
            type: 'success',
            duration: 3000,
          })
        } else {
          this.a.flashMsg({ commit }, {
            message: data.message,
            type: 'danger',
            duration: 0,
          })
        }
      })
      .catch((err) => {
        console.error(err)
        this.a.flashErr({ commit })
      })
  },

  flashErr: ({ commit }) => {
    this.a.flashMsg({ commit }, {
      message: 'Error has occured, please try again later',
      type: 'danger',
      duration: 0,
    })
  },

}
