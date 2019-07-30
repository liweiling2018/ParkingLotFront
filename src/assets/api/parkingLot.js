const axios = require('axios')

const addParkingLot = (vm, lot, callback, errback) => {
    let ip = vm.$store.getters.getConfig.server
    axios({
        method: 'post',
        url: ip + '/parkinglots',
        data: {
          name: lot.name,
          capacity: lot.capacity
        }
      })
      .then(function (response) {
        callback(response.data)
      })
      .catch(function (error) {
        errback(error)
      })
}

const updateParkingLot = (vm, lot, callback, errback) => {
    let ip = vm.$store.getters.getConfig.server
    axios({
        method: 'put',
        url: ip + '/parkinglots',
        data: lot
      })
      .then(function (response) {
        callback(response.data)
      })
      .catch(function (error) {
        errback(error)
      })
}

const deleteParkingLot = (vm, lot, callback, errback) => {
    let ip = vm.$store.getters.getConfig.server
    axios({
        method: 'delete',
        url: ip + '/parkinglots/' + lot.id,
      })
      .then(function (response) {
        callback(response.data)
      })
      .catch(function (error) {
        errback(error)
      })
}

const getParkingLotByPage = (vm, page, callback, errback) => {
    let ip = vm.$store.getters.getConfig.server
    let pageSize = 10
    axios.get(ip + '/parkinglots?pageNum=' + page + "&&pageSize=" + pageSize)
    .then(function (response) {
        callback(response.data)
    })
    .catch(function (error) {
        errback(error)
    })
}

const getValidParkingLotByPage = (vm, page, callback, errback) => {
  let ip = vm.$store.getters.getConfig.server
  let pageSize = 10
  axios.get(ip + '/parkinglots?remine=0&&pageNum=' + page + "&&pageSize=" + pageSize)
  .then(function (response) {
      callback(response.data)
  })
  .catch(function (error) {
      errback(error)
  })
}

const updateParkingLotTag = (vm, lot, callback, errback) => {
  let ip = vm.$store.getters.getConfig.server
    axios({
        method: 'put',
        url: ip + '/parkinglots',
        data: {
          id: lot.id,
          tag: lot.tag,
        }
      })
      .then(function (response) {
        if (response.status == 200) {
          callback(response.data)
        } else if (response.status == 401) {
          loginError(vm)
        }
      })
      .catch(function (error) {
        errback(error)
      })
}



module.exports = {
    addParkingLot,
    getParkingLotByPage,
    updateParkingLot,
    deleteParkingLot,
    getValidParkingLotByPage,
    updateParkingLotTag
}