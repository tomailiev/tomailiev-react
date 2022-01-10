import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAvs56Y3H86w7p3y4bE0-LUI0XOrflNL5g",
    authDomain: "toma-iliev.firebaseapp.com",
    databaseURL: "https://toma-iliev.firebaseio.com",
    projectId: "toma-iliev",
    storageBucket: "toma-iliev.appspot.com",
    messagingSenderId: "733232669569",
    appId: "1:733232669569:web:4a408e191a2083979fbe80",
    measurementId: "G-J5H3ZKDW3Q"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };