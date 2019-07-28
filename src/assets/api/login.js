const axios = require('axios')
const user_login = (vm, user, callback, errback) => {
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
        callback(response.data)
      })
      .catch(function (error) {
        errback(error)
      })
    }

export default user_login