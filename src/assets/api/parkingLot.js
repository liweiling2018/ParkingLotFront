const axios = require('axios')

const addParkingLot = (vm, lot, callback, errback) => {
    let ip = vm.$store.getters.getConfig.server
    axios({
        method: 'post',
        url: ip + '/parkinglots',
        data: {
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
    axios.get(ip + '/parkinglot?page=' + page + "&pageSize=" + pageSize)
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
  axios.get(ip + '/parkinglots?page=' + page + "&pageSize=" + pageSize)
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