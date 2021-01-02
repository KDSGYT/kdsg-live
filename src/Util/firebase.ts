import firebase from 'firebase/app';
import 'firebase/analytics'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyBJ8yfKyUzRCYj_1BLq2cw1R0C3JR1ZXTM",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGIN_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_Measurement_ID
  };

firebase.initializeApp(config);
const store = firebase.storage();
firebase.analytics()
export default store;