import firebase from 'firebase/compat/app';
import 'firebase/firestore'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA8WaO1O0K-JFmfYAttxxdvJy5pAiOzKF8",
    authDomain: "anders-crwn-db.firebaseapp.com",
    projectId: "anders-crwn-db",
    storageBucket: "anders-crwn-db.appspot.com",
    messagingSenderId: "699295850539",
    appId: "1:699295850539:web:296883d9defacfa2e80a6e",
    measurementId: "G-M4TWHX64S7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();