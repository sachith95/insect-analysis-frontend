import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../../firebase'
import * as actionTypes from './action-types'
import * as mutationTypes from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    deviceDetails: {},
    isdeviceDetailsLoading: false,
    pestDetails: {},
    ispestDetailsLoading: false,
  },
  mutations: {
    [mutationTypes.SAVE_DEVICE_LOAD_REQUEST](state) {
      state.isdeviceDetailsLoading = true
    },
    [mutationTypes.SAVE_DEVICE_LOAD_SUCCESS](state, result) {
      state.deviceDetails = result
      state.isdeviceDetailsLoading = false
    },
    [mutationTypes.SAVE_DEVICE_LOAD_FAILED](state) {
      state.deviceDetails = {}
      state.isdeviceDetailsLoading = false
    },
    [mutationTypes.VIEW_DEVICE_LOAD_REQUEST](state) {
      state.isdeviceDetailsLoading = true
    },
    [mutationTypes.VIEW_DEVICE_LOAD_SUCCESS](state, result) {
      state.deviceDetails = result
      state.isdeviceDetailsLoading = false
    },
    [mutationTypes.VIEW_DEVICE_LOAD_FAILED](state) {
      state.deviceDetails = {}
      state.isdeviceDetailsLoading = false
    },
  },

  actions: {
    async [actionTypes.SAVE_DEVICE]({ commit }, { deviceDetials }) {
      commit(mutationTypes.SAVE_DEVICE_LOAD_REQUEST)
      await fb.devicesCollection.set({
        id: deviceDetials.name,
        title: deviceDetials.title
      })
    },
  },
  // async [actionTypes.VIEW_DEVICE]({ commit }, { storeId, startDate, endDate }) {
  //   commit(mutationTypes.VIEW_DEVICE_LOAD_REQUEST))
  // },
})
