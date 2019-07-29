const axios = require('axios')
import md5 from 'js-md5';
const user_register = (vm, user, callback, failback, errback) => {
    let ip = vm.$store.getters.getConfig.server
    axios({
            method: 'post',
            url: ip + '/user/register',
            data: {
                userName: user.username,
                password: user.password,
                carNo: user.car_number,
                phoneNo: user.tel
            }
        })
        .then(function(response) {
            if (response.status == 200) {
                vm.$store.commit('setUser', user)
                callback(response.data)
            } else {
                failback(response.data)
            }
        })
        .catch(function(error) {

            errback(error)
        })
}

export default user_register