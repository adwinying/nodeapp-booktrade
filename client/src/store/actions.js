import Vue from 'vue'
import router from '../router'

const flashMsg = ({ commit }, { message, type, duration }) => {
  commit('showMsg', { message, type })

  if (duration) {
    setTimeout(() => {
      commit('hideMsg')
    }, duration)
  }
}

const flashLoading = ({ commit }) => {
  flashMsg({ commit }, {
    message: 'Loading...',
    type: 'info',
    duration: 0,
  })
}

const flashErr = ({ commit }) => {
  flashMsg({ commit }, {
    message: 'Error has occured, please try again later',
    type: 'danger',
    duration: 0,
  })
}

const fetchBooks = ({ commit }) => {
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
}

const addBook = ({ commit }, newBook) => {
  flashLoading({ commit })

  Vue.http.post('/api/book/new', newBook)
    .then(({ data }) => {
      if (data.success) {
        commit('addBook', data.book)
        flashMsg({ commit }, {
          message: 'Successfully added book.',
          type: 'success',
          duration: 3000,
        })
        router.push('/dashboard')
      } else {
        flashMsg({ commit }, {
          message: data.message,
          type: 'danger',
          duration: 0,
        })
      }
    })
    .catch((err) => {
      console.error(err)
      flashErr({ commit })
    })
}

const checkAuth = ({ commit }) => {
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
}

const signup = ({ commit }, newUser) => {
  flashLoading({ commit })

  Vue.http.post('/api/auth/signup', newUser)
    .then(({ data }) => {
      if (data.success) {
        flashMsg({ commit }, {
          message: 'Successfully signed up. You may now login',
          type: 'success',
          duration: 0,
        })
        router.push('login')
      } else {
        flashMsg({ commit }, {
          message: data.message,
          type: 'danger',
          duration: 0,
        })
      }
    })
    .catch((err) => {
      console.error(err)
      flashErr({ commit })
    })
}

const login = ({ commit }, userInfo) => {
  flashLoading({ commit })

  Vue.http.post('/api/auth/signin', userInfo)
    .then(({ data }) => {
      if (data.success) {
        commit('updateUser', data.user)
        flashMsg({ commit }, {
          message: 'Successfully logged in',
          type: 'success',
          duration: 3000,
        })
        router.push('/dashboard')
      } else {
        flashMsg({ commit }, {
          message: data.message,
          type: 'danger',
          duration: 0,
        })
      }
    })
    .catch((err) => {
      console.error(err)
      flashErr({ commit })
    })
}

const logout = ({ commit }) => {
  Vue.http.get('/api/auth/signout')
    .then(({ data }) => {
      if (data.success) {
        flashMsg({ commit }, {
          message: 'Successfully signed out.',
          type: 'success',
          duration: 3000,
        })
        commit('logoutUser')
        router.push('/')
      } else {
        console.error(data.message)
        flashErr({ commit })
      }
    })
    .catch((err) => {
      console.error(err)
      flashErr({ commit })
    })
}

const updateProfile = ({ commit }, userInfo) => {
  flashLoading({ commit })

  Vue.http.put('/api/auth/profile', userInfo)
    .then(({ data }) => {
      if (data.success) {
        commit('updateUser', data.user)
        flashMsg({ commit }, {
          message: 'Successfully updated profile.',
          type: 'success',
          duration: 3000,
        })
      } else {
        flashMsg({ commit }, {
          message: data.message,
          type: 'danger',
          duration: 0,
        })
      }
    })
    .catch((err) => {
      console.error(err)
      flashErr({ commit })
    })
}

export default {
  flashMsg,
  fetchBooks,
  addBook,
  checkAuth,
  signup,
  login,
  logout,
  updateProfile,
}
