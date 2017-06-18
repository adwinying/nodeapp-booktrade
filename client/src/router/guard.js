import Vue from 'vue'
import store from '../store/store'

const handleErr = (err) => {
  console.error(err)
  store.dispatch('flashMsg', {
    message: 'An error occured, please try again',
    type: 'danger',
    duration: 0,
  })
}

export default {
  requireGuest(to, from, next) {
    if (!store.state.auth.isLoggedIn) {
      next()
    } else {
      Vue.http.get('/api/auth/profile')
        .then(({ data }) => {
          if (!data.success) {
            next()
          } else {
            next('/dashboard')
            store.dispatch('flashMsg', {
              message: 'You are already logged in!',
              type: 'warning',
              duration: 3000,
            })
          }
        })
        .catch(handleErr)
    }
  },

  requireUser(to, from, next) {
    if (store.state.auth.isLoggedIn) {
      next()
    } else {
      Vue.http.get('/api/auth/profile')
        .then(({ data }) => {
          if (data.success) {
            next()
          } else {
            next('/login')
            store.dispatch('flashMsg', {
              message: 'You must be logged in to access this page.',
              type: 'danger',
              duration: 0,
            })
          }
        })
        .catch(handleErr)
    }
  },
}
