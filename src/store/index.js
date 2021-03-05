import Vue from 'vue'
import Vuex from 'vuex'
// import event from './modules/event.module'

Vue.use(Vuex)

const state = {
  eventPrice: {
    regular: 5000,
    vip: 500000,
    vvip: 1000000
  },
  tickets: {}
}

const mutations = {
  INCREASE_TICKET (state, data) {
    state.tickets[data] ? state.tickets[data] += 1 : state.tickets[data] = 1
    console.log(state.tickets)
  },

  REDUCE_TICKET (state, data) {
    state.tickets[data] && state.tickets[data] > 0 ? state.tickets[data] -= 1 : state.tickets[data] = 0
    console.log(state.tickets)
  }

}

const getters = {

}

const actions = {
  increaseTicket ({commit}, data) {
    commit('INCREASE_TICKET', data)
  },

  reduceTicket ({commit}, data) {
    commit('REDUCE_TICKET', data)
  }
}

export default new Vuex.Store({
  // modules: {
  // event
  // },
  state,
  actions,
  mutations,
  getters
}
)
