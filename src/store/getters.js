export default {
    getConfig (state) {
        if (process.env.NODE_ENV === 'production') {
            return state.config.prod
        } else if (process.env.type === 'stage') {
            return state.config.stage
        } else {
            return state.config.dev
        }
    }
}
