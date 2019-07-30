const axios = require('axios')

const parkingBoyLogin  = (vm, parkingBoy,  callback, failback, errback) => {
  let ip = vm.$store.getters.getConfig.server
  axios({
    method: 'post',
    url: ip + '/parkingboy/login',
    data: {
      name: parkingBoy.username,
      password: parkingBoy.password
    }
  })
  .then(function (response) {
    if (response.status == 200) {
      callback(response.data)
    } else {
      failback(response.data)
    }
  })
  .catch(function (error) {

        errback(error)
    })
}

const parkingBoyChangePass = (vm, parkingBoy, failback, callback, errback) => {
  let ip = vm.$store.getters.getConfig.server
  axios({
    method: 'put',
    url: ip + '/parkingboy/reset',
    data: {
      name: parkingBoy.username,
      password: parkingBoy.new_password
    }
  })
  .then(function (response) {
    if (response.status == 200) {
      callback(response.data)
    } else {
      failback(response.data)
    }
  })
  .catch(function (error) {

        errback(error)
    })
}

const getOrdersWithFilter = (vm, parkingBoyId, condition, callback, errback) => {
  let ip = vm.$store.getters.getConfig.server
  console.log(parkingBoyId)
  axios({
    method: 'get',
    url: ip + '/orderdetailsdto/' + parkingBoyId + '/' + condition,
  })
  .then(function (response) {
    callback(response.data)
  })
  .catch(function (error) {

        errback(error)
    })

}

const getOrderMessageById = (vm, orderId, callback, errback) => {

}

module.exports = {
  parkingBoyLogin,
  parkingBoyChangePass,
  getOrdersWithFilter,
  getOrderMessageById
}