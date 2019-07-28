const axios = require('axios')
const moment = require('moment')

const ip = 'http://127.0.0.1:9090'
const getAllParkingLots = (callback, errback) => {
  axios.get(ip + '/parkingLots')
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (error) {
      errback(error)
    })
}

const getValidPositionParkingLots = (callback, errback) => {
  axios.get(ip + '/parkingLots')
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (error) {
      errback(error)
    })
}

export default {
  getAllPackage,
  getPackageByState,
  updatePackageFecthed,
  addPackage,
  updatePackageFetchedTime
}
