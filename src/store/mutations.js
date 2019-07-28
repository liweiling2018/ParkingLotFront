export default {
    addParkingBoy (state, payload) {
        state.parkingBoy.push(payload)
    },
    addParkingLot (state, payload) {
        state.parkingLotList.push(payload)
    }
}
