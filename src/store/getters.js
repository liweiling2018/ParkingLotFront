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
      // if (process.env.NODE_ENV === 'development') {
      //   return [{
      //     id: '0',
      //     name: '张三',
      //     phone: 13416366089,
      //     state: 0,
      //     age: 20,
      //     gender: 'male',
      //     parkingLotList: [
      //       { name: 'lot1'}
      //     ]
      //   },
      //   {
      //       id: '1',
      //       name: '张四',
      //       phone: 13416366089,
      //       age: 20,
      //       gender: 'male',
      //       state: 0,
      //       parkingLotList: [
      //         { name: 'lot1'}
      //       ]
      //     }
      //   ]
      // }
        return state.parkingBoyList
    },
    getParkingLotList (state) {
      // if (process.env.NODE_ENV === 'development') {
      //     return [{
      //       id: '0',
      //       name: '停车场A',
      //       capacity: 10,
      //       remine: 5
      //     },
      //     {
      //         id: '1',
      //         name: '停车场B',
      //         capacity: 8,
      //         remine: 2
      //       },
      //       {
      //         id: '2',
      //         name: '停车场C',
      //         capacity: 8,
      //         remine: 3
      //       },
      //       {
      //         id: '3',
      //         name: '停车场D',
      //         capacity: 8,
      //         remine: 7
      //       }
      //     ]
      //   }
      return state.parkingLotList
  },
  getUser (state) {
    return state.user
  }
}
