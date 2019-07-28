const axios = require('axios')
import md5 from 'js-md5';
const user_login = (vm, user, callback, failback, errback) => {
    let ip = vm.$store.getters.getConfig.server
    axios({
        method: 'post',
        url: ip + '/user/login',
        data: {
          userName: user.username,
          password: user.password
        }
      })
      .then(function (response) {
        if (response.status == 200) {
          console.log(user)
          localStorage.setItem('user', user)
          vm.$store.commit('setUser', user)
          callback(response.data)
        } else {
          failback(response.data)
        }
      })
      .catch(function (error) {
        errback(error)
      })
    }

export default user_login