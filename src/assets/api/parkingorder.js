const axios = require('axios')

const getParkingOrderByPage = (vm, page, callback, errback) => {
    let ip = vm.$store.getters.getConfig.server
    let pageSize = 10
    axios.get(ip + '/parkingorders?page=' + page + "&pageSize=" + pageSize)
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

module.exports= {
    getParkingOrderByPage
}