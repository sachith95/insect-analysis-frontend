<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link>
          <v-list-item-content>
            <v-dialog v-model="Devicedialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn text v-bind="attrs" v-on="on" small>
                  <v-icon class="mr-2">mdi-leak</v-icon>Register a Device
                </v-btn>
              </template>
              <form @submit="saveDevice">
                <v-card>
                  <v-card-title>
                    <span class="headline">Device Details</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Device ID"
                            v-model.trim="deviceID"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Owner Name"
                            hint="Full name of device owner"
                            v-model.trim="ownerName"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="NIC"
                            hint="National ID number for authenticate"
                            persistent-hint
                            required
                            v-model.trim="nic"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="Address"
                            v-model.trim="addr"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="Contact No"
                            v-model.trim="contact"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-select
                            :items="['Mobile', 'Sensor', 'Others']"
                            label="Device Type"
                            v-model.trim="type"
                          ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-autocomplete
                            :items="[
                              'Ampara',
                              'Anuradhapura',
                              'Badulla',
                              'Batticaloa',
                              'Colombo',
                              'Galle',
                              'Gampaha',
                              'Hambantota',
                              'Jaffna',
                              'Kalutara',
                              'Kandy',
                              'Kegalle',
                              'Kilinochchi',
                              'Kurunegala',
                              'Mannar',
                              'Matale',
                              'Matara',
                              'Monaragala',
                              'Mullaitivu',
                              'Nuwara Eliya',
                              'Polonnaruwa',
                              'Puttalam',
                              'Ratnapura',
                              'Trincomalee',
                              'Vavuniya',
                            ]"
                            label="District"
                            v-model.trim="district"
                          ></v-autocomplete>
                        </v-col>
                      </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="Devicedialog = false"
                      >Close</v-btn
                    >
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="Devicedialog = false"
                      type="submit"
                      value="Submit"
                      >Save</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </form>
            </v-dialog>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-dialog v-model="Insectdialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn text v-bind="attrs" v-on="on" small>
                  <v-icon class="mr-2">mdi-bee</v-icon>Add Pesticide Detials
                </v-btn>
              </template>
              <form @submit="savePesticide">
                <v-card>
                  <v-card-title>
                    <span class="headline">Pesticide Detials</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Pest ID"
                            required
                            v-model.trim="pestId"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="8">
                          <v-text-field
                            label="Pesticide Name"
                            hint="Name of the pesticide"
                            v-model.trim="pestName"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="Charactestics of infection"
                            required
                            v-model.trim="pestDesc"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="Effective Insects"
                            required
                            v-model.trim="effectType"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="Other "
                            type="Details"
                            required
                            v-model.trim="other"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-select
                            :items="['Active', 'Inactive']"
                            label="Status of Pesticide"
                            required
                            v-model.trim="status"
                          ></v-select>
                        </v-col>
                      </v-row>
                    </v-container>
                    <small>{{ errMSg }}</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="Insectdialog = false"
                      >Close</v-btn
                    >
                    <v-btn
                      color="blue darken-1"
                      text
                      type="submit"
                      value="submit"
                      >Save</v-btn
                    >
                    <v-progress-circular
                      :indeterminate="isPestdetialsSaveStatus === 'pending'"
                      color="primary"
                    >
                    </v-progress-circular>
                  </v-card-actions>
                </v-card>
              </form>
            </v-dialog>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-dialog
              v-model="ViewPestdialog"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  text
                  v-bind="attrs"
                  v-on="on"
                  small
                  v-on:click="ViewPesticide"
                >
                  <v-icon class="mr-2">mdi-android-auto</v-icon>View Registed
                  Pesticides
                </v-btn>
              </template>
              <v-card>
                <v-toolbar dark color="primary">
                  <v-btn icon dark @click="ViewPestdialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-toolbar-title>Registed Pesticides</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-data-table
                  :headers="pestHeaders"
                  :items="this.$store.state.pestDetails"
                  :items-per-page="5"
                  class="elevation-1"
                  v-if="!this.$store.state.ispestDetailsLoading"
                >
                  <template v-if="this.$store.state.ispestDetailsLoading">
                    <spinner></spinner>
                  </template>
                </v-data-table>
              </v-card>
            </v-dialog>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-dialog
              v-model="ViewDevicedialog"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  text
                  v-bind="attrs"
                  v-on="on"
                  small
                  v-on:click="ViewDevices"
                >
                  <v-icon class="mr-2">mdi-tablet-cellphone</v-icon>View
                  Registed Devices
                </v-btn>
              </template>
              <v-card>
                <v-toolbar dark color="primary">
                  <v-btn icon dark @click="ViewDevicedialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-toolbar-title>Registed Devices</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-data-table
                  :headers="deviceHeaders"
                  :items="this.$store.state.deviceDetails"
                  :items-per-page="5"
                  class="elevation-1"
                  v-if="!this.$store.state.isdeviceDetailsLoading"
                >
                  <template v-if="this.$store.state.isdeviceDetailsLoading">
                    <spinner></spinner>
                  </template>
                </v-data-table>
              </v-card>
            </v-dialog>
          </v-list-item-content>
        </v-list-item>
        <!-- Upload -->
        <v-list-item link>
          <v-list-item-content>
            <v-dialog
              v-model="uploadAudio"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  text
                  v-bind="attrs"
                  v-on="on"
                  small
                  v-on:click="uploadAudio"
                >
                  <v-icon class="mr-2">mdi-rotate-orbit</v-icon>View
                  Analysed Insect
                </v-btn>
              </template>
              <v-card>
                <v-toolbar dark color="primary">
                  <v-btn icon dark @click="uploadAudio = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-toolbar-title>Upload Audio</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-btn icon dark @click="saveIt()">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                <div class="container">
                  <form
                    action="https://spect-gen.herokuapp.com/upload"
                    method="post"
                    enctype="multipart/form-data"
                     target="myiframe"
                  >
                    <input
                      type="file"
                      name="file"
                      class="btn btn-primary"
                      id="file"
                    />
                    <button
                      class="btn btn-primary"
                      type="submit"
                      style="border-radius: 4px"
                    >
                      Upload
                    </button>
                  </form>
                  <iframe id="myiframe" ref="myiframe" name="myiframe" style="width: 100%;
    height: 85.5vh;"></iframe>
                </div>
              </v-card>
            </v-dialog>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>WingBeat Dasboard</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid>
        <div class="row">
          <div class="column">
            <div class="card">
              <h2 class="ml-2 v"></h2>
              <v-row style="justify-content: space-evenly">
                <img src="./assets/insect.svg" width="50px" height="50px" />
                <h2 class="ml-2 v">
                  Insects Sound Analysed
                  <br />
                  <b> {{ this.$store.state.anlyDetails.count }}</b>
                </h2>
              </v-row>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <v-row style="justify-content: space-evenly">
                <img src="./assets/plug.svg" width="50px" height="50px" />
                <h2 class="ml-2 v">
                  Connected Devices
                  <br />
                  <b>156</b>
                </h2>
              </v-row>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <v-row style="justify-content: space-evenly">
                <img src="./assets/bee.svg" width="50px" height="50px" />
                <h2 class="ml-2 v">
                  Benifical Insects Count
                  <br />
                  <b> {{ this.$store.state.anlyDetails.insect }}</b>
                </h2>
              </v-row>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <v-row style="justify-content: space-evenly">
                <img src="./assets/pest.svg" width="50px" height="50px" />
                <h2 class="ml-2 v">
                  Pest Insects Count
                  <br />
                  <b> {{ this.$store.state.anlyDetails.pest }}</b>
                </h2>
              </v-row>
            </div>
          </div>
        </div>
        <!--  -->
        <v-row align="center" justify="center" class="mt-5 mr-1 ml-1">
          <GeoHeatMap></GeoHeatMap>
        </v-row>

        <v-row class="mt-5 mr-1 ml-1">
          <div class="mr-6 mb-4">
            <PestPie></PestPie>
          </div>
          <div class="mr-1 mb-4">
            <PlantPie></PlantPie>
          </div>
          <div>
            <HelloWorld></HelloWorld>
          </div>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app>
      Sachith Silva
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import GeoHeatMap from "@/components/GeoHeatMap";
import HelloWorld from "@/components/HelloWorld";
import PestPie from "@/components/PestPie";
import PlantPie from "@/components/PlantPie";
import * as actionTypes from "./store/action-types";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    GeoHeatMap,
    PestPie,
    PlantPie,
    HelloWorld,
  },
  props: {
    source: String,
  },
  data: () => ({
    pestId: null,
    pestDesc: null,
    pestName: null,
    effectType: null,
    other: null,
    status: null,
    drawer: null,
    deviceID: null,
    ownerName: null,
    nic: null,
    addr: null,
    contact: null,
    type: null,
    district: null,
    Devicedialog: false,
    Insectdialog: false,
    ViewPestdialog: false,
    ViewDevicedialog: false,
    uploadAudio: false,
    errMSg: "",
    pestHeaders: [
      {
        text: "Pesticide ID",
        align: "start",
        sortable: false,
        value: "PestID",
      },
      { text: "Pesticide Name", value: "PestName" },
      { text: "Charactersics", value: "Description" },
      { text: "Effective Insects", value: "EffectiveInsectType" },
      { text: "Status", value: "Status" },
    ],
    deviceHeaders: [
      {
        text: "Device ID",
        align: "start",
        sortable: false,
        value: "DeviceID",
      },
      { text: "Owner Name", value: "OwnerName" },
      { text: "District", value: "District" },
      { text: "Contact No", value: "ContactNo" },
      { text: "Device Type", value: "DeviceType" },
      { text: "NIC", value: "NIC" },
    ],
  }),
  beforeMount() {
    this.getAnly();
  },
  computed: mapState(["isPestdetialsSaveStatus"]),
  watch: {
    isPestdetialsSaveStatus(newValue, oldValue) {
      console.log(`Updating from ${oldValue} to ${newValue}`);

      // Do whatever makes sense now
      if (newValue === "success") {
        this.Insectdialog = false;
      } else if (newValue === "failed") {
        this.errMSg = "Insect data saving failed";
        setTimeout(() => {
          this.Insectdialog = false;
        }, 2000);
      }
    },
  },
  methods: {
    saveDevice(e) {
      this.$store.dispatch(actionTypes.SAVE_DEVICE, {
        DeviceID: this.deviceID,
        OwnerName: this.ownerName,
        NIC: this.nic,
        Address: this.addr,
        ContactNo: this.contact,
        DeviceType: this.type,
        District: this.district,
      });
      e.preventDefault();
    },
    savePesticide(e) {
      this.$store.dispatch(actionTypes.SAVE_PEST, {
        PestID: this.pestId,
        PestName: this.pestName,
        Description: this.pestDesc,
        EffectInsectType: this.effectType,
        Other: this.other,
        Status: this.status,
      });
      e.preventDefault();
    },
    ViewPesticide() {
      this.$store.dispatch(actionTypes.VIEW_PEST);
    },
    ViewDevices() {
      this.$store.dispatch(actionTypes.VIEW_DEVICE);
    },
    getAnly() {
     // this.$store.dispatch(actionTypes.GET_ANLY);
    },
    saveIt() {
            var imgURL = this.$refs.myiframe
            if (typeof imgURL == 'object')
                imgURL = imgURL.src;
            window.win = open(imgURL);
            console.log(imgURL);
            setTimeout('win.resizeTo(0, 0);', 100);
            setTimeout('win.moveTo(0, 0);', 200);
            setTimeout('win.document.execCommand("SaveAs")', 500);
            setTimeout('win.close()', 1000);
        }
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  text-align: center;
  background-color: #07e62c88;
  flex-direction: row;
  flex-wrap: wrap;
}
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 10px;
  }
}
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding */
.row {
  margin: 0 -5px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

b {
  font-size: 2vw;
}
.v {
  font-size: 1.5vw;
  white-space: pre-wrap; /* Webkit */
  white-space: -moz-pre-wrap; /* Firefox */
  white-space: -pre-wrap; /* Opera <7 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* IE */
}
.v-btn {
  padding-left: 0 !important;
}
.v-btn__content {
  justify-content: end !important;
}
</style>
