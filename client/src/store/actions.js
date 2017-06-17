import Vue from 'vue'

export default {
  fetchBooks() {
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


    Vue.http.get('/api/book/all')
      .then((res) => {
        console.log(res)
      })
      .catch(console.log)
  },
}
