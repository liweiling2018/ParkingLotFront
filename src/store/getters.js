export default {
    getConfig (state) {
        if (process.env.NODE_ENV === 'production') {
            return state.config.prod
        } else if (process.env.NODE_ENV === 'development') {
            return state.config.dev
        } else {
            return state.config.stage
        }
    }
}
