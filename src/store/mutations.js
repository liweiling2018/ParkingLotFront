export default {
    addParkingBoy (state, payload) {
        state.parkingBoyList.push(payload)
    },
    setParkingBoy (state, payload) {
        state.parkingBoyList = payload
    },
    addParkingLot (state, payload) {
        state.parkingLotList.push(payload)
    },
    setUser (state, payload) {
        state.user = payload
    }
}
