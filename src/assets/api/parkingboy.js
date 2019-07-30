const axios = require('axios')
const loginError = (vm) => {
  vm.$router.push({ path: '/login'})
}

const addParkingBoy = (vm, boy, callback, errback) => {
    let ip = vm.$store.getters.getConfig.server
    axios({
        method: 'post',
        url: ip + '/parkingboy',
        data: {
          name: boy.name,
          phone: boy.phone,
          age: boy.age,
          sex: boy.sex,
          status: 'busy',
          tag: '',
          parkingLots: []
        }
      })
      .then(function (response) {
        if (response.status == 201) {
          callback(response.data)
        } else if (response.status == 401) {
          loginError(vm)
        }
      })
      .catch(function (error) {
        errback(error)
      })
}

const updateParkingBoy = (vm, boy, callback, errback) => {
    let ip = vm.$store.getters.getConfig.server
    axios({
        method: 'patch',
        url: ip + '/parkingboy',
        data: {
          id: boy.id,
          name: boy.name,
          phone: boy.phone,
          age: boy.age,
          sex: boy.sex,
          status: boy.status,
          tag: boy.tag,
          parkingLots: boy.parkingLots
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

const deleteParkingBoy = (vm, boy, callback, errback) => {
    let ip = vm.$store.getters.getConfig.server
    axios({
        method: 'delete',
        url: ip + '/parkingboy/' + boy.id,
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

const getParkingBoyByPage = (vm, page, callback, errback) => {
    let ip = vm.$store.getters.getConfig.server
    let pageSize = 10
    axios.get(ip + '/parkingboy?page=' + page + "&pageSize=" + pageSize)
    .then(function (response) {
        // handle success
        if (response.status == 200) {
          callback(response.data)
        } else if (response.status == 401) {
          loginError(vm)
        }
    })
    .catch(function (error) {
        // handle error
        errback(error)
    })
}

const getParkingBoyByFilterword = (vm, filterword, callback, errback) => {
    let ip = vm.$store.getters.getConfig.server
    axios({
      method: 'post',
      url: ip + '/parkingboy/filter',
      data: filterword
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

const updateParkingBoyTag = (vm, boy, callback, errback) => {
  let ip = vm.$store.getters.getConfig.server
    axios({
        method: 'patch',
        url: ip + '/parkingboy',
        data: {
          id: boy.id,
          tag: boy.tag
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
    addParkingBoy,
    getParkingBoyByPage,
    updateParkingBoy,
    deleteParkingBoy,
    getParkingBoyByFilterword,
    updateParkingBoyTag
}
