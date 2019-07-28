export default {
    addParkingBoy (state, payload) {
        state.parkingBoy.push(payload)
    },
    setParkingBoy (state, payload) {
        state.parkingBoy - payload
    },
    addParkingLot (state, payload) {
        state.parkingLotList.push(payload)
    },
    setUser (state, payload) {
        state.user = payload
    }
}
