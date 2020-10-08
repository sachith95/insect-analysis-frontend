import Vue from "vue";
import Vuex from "vuex";
import * as fb from "../../firebase";
import * as actionTypes from "./action-types";
import * as mutationTypes from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    deviceDetails: [],
    isPestdetialsSaveStatus: "",
    pestDetails: [],
    ispestDetailsLoading: false,
    anlyDetails: { count: 0, insect: 0, pest: 0 },
    isanlyLoading: false,
  },
  mutations: {
    [mutationTypes.SAVE_DEVICE_LOAD_REQUEST](state) {
      state.isdeviceDetailsLoading = true;
    },
    [mutationTypes.SAVE_DEVICE_LOAD_SUCCESS](state, result) {
      state.deviceDetails = result;
      state.isdeviceDetailsLoading = false;
    },
    [mutationTypes.SAVE_DEVICE_LOAD_FAILED](state) {
      state.deviceDetails = {};
      state.isdeviceDetailsLoading = false;
    },
    [mutationTypes.VIEW_DEVICE_LOAD_REQUEST](state) {
      state.isdeviceDetailsLoading = true;
    },
    [mutationTypes.VIEW_DEVICE_LOAD_SUCCESS](state, result) {
      state.deviceDetails = result;
      state.isdeviceDetailsLoading = false;
    },
    [mutationTypes.VIEW_DEVICE_LOAD_FAILED](state) {
      state.deviceDetails = {};
      state.isdeviceDetailsLoading = false;
    },
    [mutationTypes.SAVE_PEST_LOAD_REQUEST](state) {
      state.isPestdetialsSaveStatus = "pending";
    },
    [mutationTypes.SAVE_PEST_LOAD_SUCCESS](state, result) {
      state.pestDetails = result;
      state.isPestdetialsSaveStatus = "success";
    },
    [mutationTypes.SAVE_PEST_LOAD_FAILED](state) {
      state.pestDetails = {};
      state.isPestdetialsSaveStatus = "failed";
    },
    [mutationTypes.VIEW_PEST_LOAD_REQUEST](state) {
      state.isPestdetialsSave = true;
    },
    [mutationTypes.VIEW_PEST_LOAD_SUCCESS](state, result) {
      state.pestDetails = result;
      state.ispestDetailsLoading = false;
    },
    [mutationTypes.VIEW_PEST_LOAD_FAILED](state) {
      state.pestDetails = {};
      state.ispestDetailsLoading = false;
    },
    [mutationTypes.GET_ANLY_LOAD_REQUEST](state) {
      state.isanlyLoading = true;
    },
    [mutationTypes.GET_ANLY_LOAD_SUCCESS](state, result) {
      state.anlyDetails = result;
      state.isanlyLoading = false;
    },
    [mutationTypes.GET_ANLY_LOAD_FAILED](state) {
      state.anlyDetails = {};
      state.isanlyLoading = false;
    },
  },

  actions: {
    async [actionTypes.SAVE_DEVICE]({ commit }, deviceDetials) {
      commit(mutationTypes.SAVE_DEVICE_LOAD_REQUEST);
      console.log(deviceDetials);
      await fb.devicesCollection.add(deviceDetials);
    },
    async [actionTypes.SAVE_PEST]({ commit }, pestDetails) {
      commit(mutationTypes.SAVE_PEST_LOAD_REQUEST);
      try {
        await fb.pesticidesCollection.add(pestDetails);
        commit(mutationTypes.SAVE_PEST_LOAD_SUCCESS);
      } catch (e) {
        console.error(e);
        commit(mutationTypes.SAVE_PEST_LOAD_FAILED);
      }
    },
    async [actionTypes.VIEW_PEST]({ commit }) {
      commit(mutationTypes.VIEW_PEST_LOAD_REQUEST);
      await fb.pesticidesCollection.get().then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.log("NO SERVERS AVAILABLE");
          commit(mutationTypes.VIEW_PEST_LOAD_FAILED);
        } else {
          const pestDetails = querySnapshot.docs.map((doc) => doc.data());
          commit(mutationTypes.VIEW_PEST_LOAD_SUCCESS, pestDetails);
        }
      });
    },
    async [actionTypes.VIEW_DEVICE]({ commit }) {
      commit(mutationTypes.VIEW_DEVICE_LOAD_REQUEST);
      await fb.devicesCollection.get().then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.log("NO SERVERS AVAILABLE");
          commit(mutationTypes.VIEW_DEVICE_LOAD_FAILED);
        } else {
          const deviceDetails = querySnapshot.docs.map((doc) => doc.data());
          console.log(querySnapshot.docs);
          commit(mutationTypes.VIEW_DEVICE_LOAD_SUCCESS, deviceDetails);
        }
      });
    },
    async [actionTypes.GET_ANLY]({ commit }) {
      commit(mutationTypes.GET_ANLY_LOAD_REQUEST);
      try {
        await fb.analyCollection.onSnapshot(function(querySnapshot) {
          console.log(querySnapshot);
          if (querySnapshot.empty) {
            console.log("NO SERVERS AVAILABLE");
            commit(mutationTypes.GET_ANLY_LOAD_FAILED);
          } else {
            var data = [];
            querySnapshot.forEach(function(doc) {
              data.push(doc.data());
            });

            const anlyDetails = {
              count: data.length,
              insect: data.filter((element) => element.insectType == "insect")
                .length,
              pest: data.filter((element) => element.insectType == "pest")
                .length,
            };
            commit(mutationTypes.GET_ANLY_LOAD_SUCCESS, anlyDetails);
          }
        });
      } catch (error) {
        commit(mutationTypes.GET_ANLY_LOAD_FAILED);
      }
    },
  },
});
