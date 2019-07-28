export default {
  getConfig (state) {
    if (process.env.NODE_ENV === 'development') {
      return state.config.dev
    } else if (process.env.type == 'stage') {
      return state.config.stage
    } else {
      return state.config.prod
    }
  },
  getParkingBoyList (state) {
    if (process.env.NODE_ENV === 'development') {
      return [{
        id: '0',
        name: '张三',
        phone: '13416366089',
        state: 0,
        gender: 0,
        age: 20,
        parkingLotList: [
          { name: 'lot1'}
        ]
      },
      {
        id: '1',
        name: '张四',
        phone: '13416366089',
        state: 0,
        gender: 0,
        age: 20,
        parkingLotList: [
          { name: 'lot1'}
        ]
        }
      ]
    }
    return state.parkingBoyList
  }
}
