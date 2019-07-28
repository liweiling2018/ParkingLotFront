export default {
    addParkingBoy (state, payload) {
        state.parkingBoyList.push(payload)
    },
    setParkingBoy (state, payload) {
        state.parkingBoyList = payload
    },
    deleteParkingBoy (state, payload) {
        state.parkingBoyList = state.parkingBoyList.filter ((item) => {
            if (item.id == payload.id) {
                return false
            }
            return true
        })
    },
    addParkingLot (state, payload) {
        state.parkingLotList.push(payload)
    },
    setParkingLot (state, payload) {
        state.parkingLotList = payload
    },
    setUser (state, payload) {
        state.user = payload
    }
}
