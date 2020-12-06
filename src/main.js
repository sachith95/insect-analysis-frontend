import Vue from "vue";
import vuetify from "@/plugins/vuetify";
import "@/plugins/echarts";
import App from "./App.vue";
import store from "./store";
import * as VueGoogleMaps from "vue2-google-maps";
import { auth } from "../firebase";
import VueGoogleHeatmap from "vue-google-heatmap";

Vue.use(VueGoogleHeatmap, {
  apiKey: "AIzaSyCsOAHruij7iE46XQwlc8PSldrRRV3_j_E",
});

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCsOAHruij7iE46XQwlc8PSldrRRV3_j_E",
    libraries: "visualization",
  },
});

Vue.config.productionTip = false;

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      vuetify,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
