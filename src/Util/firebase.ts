import firebase from 'firebase/app';
import 'firebase/analytics'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyBJ8yfKyUzRCYj_1BLq2cw1R0C3JR1ZXTM",
    authDomain: "kdsg-live.firebaseapp.com",
    projectId: "kdsg-live",
    storageBucket: "kdsg-live.appspot.com",
    messagingSenderId: "652675755195",
    appId: "1:652675755195:web:cb373dd5c68dde2bb28d9e",
    measurementId: "G-5RCMYQ9JXR"
  };

firebase.initializeApp(config);
const store = firebase.storage();
firebase.analytics()
export default store;