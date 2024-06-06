// firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: 'AIzaSyA_jfAcbHq61-_Mhvz9lxC1DiMN2RhcnT0',
    authDomain: 'contactformportfoliosveltekit.firebaseapp.com',
    databaseURL:
        'https://contactformportfoliosveltekit-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'contactformportfoliosveltekit',
    storageBucket: 'contactformportfoliosveltekit.appspot.com',
    messagingSenderId: '226227204036',
    appId: '1:226227204036:web:d47103f3a6e0b98a6c3e91'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Realtime Database
export const realtimeDb = getDatabase(app);
