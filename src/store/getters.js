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
        return state.parkingBoyList
    }
}
