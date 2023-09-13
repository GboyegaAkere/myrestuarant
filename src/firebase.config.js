import {getApp, getApps,initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyC9huEua-oRmUUaDI3mNh9GBIDomCL7rAs",
    authDomain: "resturantapp-53089.firebaseapp.com",
    databaseURL: "https://resturantapp-53089-default-rtdb.firebaseio.com",
    projectId: "resturantapp-53089",
    storageBucket: "resturantapp-53089.appspot.com",
    messagingSenderId: "898291802060",
    appId: "1:898291802060:web:425f0f6548d5854783c769"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
  const firestore = getFirestore(app)
  const storage = getStorage(app)
  export {app, firestore, storage}