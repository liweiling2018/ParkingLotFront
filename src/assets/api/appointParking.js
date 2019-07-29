const axios = require('axios')

const getAllReverseOrder = (vm, userId, callback, errback) => {
  let ip = vm.$store.getters.getConfig.server
  axios.get(ip + '/parkingorders/' + userId)
  .then(function (response) {
      callback(response.data)
  })
  .catch(function (error) {
      errback(error)
  })
}

const parkOrder  = (vm, userId, callback, errback) => {
  let ip = vm.$store.getters.getConfig.server
  axios.get(ip + '/parkingorders/' + userId)
  .then(function (response) {
      callback(response.data)
  })
  .catch(function (error) {
      errback(error)
  })
}




module.exports = {
    getAllReverseOrder,
    parkOrder
}