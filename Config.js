import firebase from 'firebase/compat/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCSXTAAET8WMuUacx1-mxkRUefuhYG956g",
    authDomain: "spinning-ball-a06db.firebaseapp.com",
    databaseURL: "https://spinning-ball-a06db-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "spinning-ball-a06db",
    storageBucket: "spinning-ball-a06db.appspot.com",
    messagingSenderId: "586800279988",
    appId: "1:586800279988:web:27b5c189edb5d31cd982e1",
    measurementId: "G-VJWHQMJZQ7"
}

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();

export { db };