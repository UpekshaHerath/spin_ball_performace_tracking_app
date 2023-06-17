import firebase from 'firebase/compat/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDI4fbCYHGPjlXpUrNMEnaeTa_uq0cwTjI",
    authDomain: "cricket-ball-performance.firebaseapp.com",
    databaseURL: "https://cricket-ball-performance-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cricket-ball-performance",
    storageBucket: "cricket-ball-performance.appspot.com",
    messagingSenderId: "715309451407",
    appId: "1:715309451407:web:04d0feaef1f6f674c988fa",
    measurementId: "G-8PWBL7WDRH"
}

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();

export { db };