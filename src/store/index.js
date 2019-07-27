import Vuex from 'vuex'

import Vue from 'vue'

import actions from './actions'

import mutations from './mutations'

import getters from './getters'

import config from '../../static/config/index'

Vue.use(Vuex)

const state = {
  config: process.env.NODE_ENV === 'production' ? config.prod : config.dev
}

export default new Vuex.Store({

  state,

  getters,

  actions,

  mutations
})
