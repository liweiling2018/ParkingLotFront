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

const parkOrder = (vm, userId, time, callback, errback) => {
  let ip = vm.$store.getters.getConfig.server
  axios.get(ip + '/user/park?userId=' + userId + "&startTime=" + time)
  .then(function (response) {
      callback(response.data)
  })
  .catch(function (error) {
      errback(error)
  })
}

const fetch = (vm, order, callback, errback) => {
  let ip = vm.$store.getters.getConfig.server
  axios({
    method: 'put',
    url: ip + '/parkingorders',
    data: order
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




module.exports = {
    getAllReverseOrder,
    parkOrder,
    fetch
}