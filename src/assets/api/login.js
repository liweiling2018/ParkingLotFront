const axios = require('axios')
const user_login = (vm, username,password, callback, errback) => {
    let ip = vm.$store.getters.getConfig.server
    axios({
        method: 'post',
        url: ip + '/user/login',
        data: {
          username: username,
          password: password
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