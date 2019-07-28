const axios = require('axios')
const user_login = (vm, user, callback, failback, errback) => {
    let ip = vm.$store.getters.getConfig.server
    axios({
        method: 'post',
        url: ip + '/user/login',
        data: {
          username: user.username,
          password: md5(user.password)
        }
      })
      .then(function (response) {
        if (response.status == 200) {
          localStorage.setItem('user', user)
          vm.$store.commit('setUser', user)
          callback(response.data)
        } else if (response.status == 404) {
          failback(response.data)
        }
      })
      .catch(function (error) {
        errback(error)
      })
    }

export default user_login