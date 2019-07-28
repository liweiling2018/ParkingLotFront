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
        method: 'post',
        url: ip + '/parkinglots/' + lot.id,
        data: {
          id: lot.id,
          name: lot.name,
          capacity: lot.capacity,
          remine: lot.remine
        }
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
    axios.get(ip + '/parkinglots?pageNum=' + page + "&pageSize=" + pageSize)
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
  axios.get(ip + '/parkinglots?remine=0&pageNum=' + page + "&pageSize=" + pageSize)
  .then(function (response) {
      callback(response.data)
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
    getValidParkingLotByPage
}