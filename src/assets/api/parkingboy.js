const axios = require('axios')

const addParkingBoy = (vm, boy, callback, errback) => {
    let ip = vm.$store.getters.getConfig.server
    axios({
        method: 'post',
        url: ip + '/parkingboy',
        data: {
          name: boy.name,
          phone: boy.phone,
          age: boy.age,
          sex: boy.gender,
          status: 'busy',
          tag: 'VIP',
          parkingLots: []
        }
      })
      .then(function (response) {
        callback(response.data)
      })
      .catch(function (error) {
        errback(error)
      })
}

const updateParkingBoy = (vm, boy, callback, errback) => {
    let ip = vm.$store.getters.getConfig.server
    axios({
        method: 'post',
        url: ip + '/parkingboy/' + boy.id,
        data: {
          id: boy.id,
          name: boy.name,
          phone: boy.phone,
          age: boy.age,
          sex: boy.gender,
          status: boy.stauts,
          tag: boy.tag,
          parkingLots: boy.parkingLots
        }
      })
      .then(function (response) {
        callback(response.data)
      })
      .catch(function (error) {
        errback(error)
      })
}

const deleteParkingBoy = (vm, boy, callback, errback) => {
    let ip = vm.$store.getters.getConfig.server
    axios({
        method: 'delete',
        url: ip + '/parkingboy/' + boy.id,
      })
      .then(function (response) {
        callback(response.data)
      })
      .catch(function (error) {
        errback(error)
      })
}

const getParkingBoyByPage = (vm, page, callback, errback) => {
    let ip = vm.$store.getters.getConfig.server
    let pageSize = 10
    axios.get(ip + '/parkingboy?page=' + page + "&pageSize=" + pageSize)
    .then(function (response) {
        // handle success
        callback(response.data)
    })
    .catch(function (error) {
        // handle error
        errback(error)
    })
}

module.exports = {
    addParkingBoy,
    getParkingBoyByPage,
    updateParkingBoy,
    deleteParkingBoy
}
