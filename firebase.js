import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyDp05xh1Qsmu83Mg681xeqryUk44KA6LBY",
  authDomain: "insectanalysis-f50e8.firebaseapp.com",
  databaseURL: "https://insectanalysis-f50e8.firebaseio.com",
  projectId: "insectanalysis-f50e8",
  storageBucket: "insectanalysis-f50e8.appspot.com",
  messagingSenderId: "747037882407",
  appId: "1:747037882407:web:288ed156c3fc5710947602",
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const devicesCollection = db.collection("devices");
const pesticidesCollection = db.collection("pesticides");
const insectsCollection = db.collection("insects");
const audioCollection = db.collection("audio");
const analyCollection = db.collection("analysis");

// export utils/refs
export {
  db,
  auth,
  devicesCollection,
  pesticidesCollection,
  insectsCollection,
  audioCollection,
  analyCollection,
};
