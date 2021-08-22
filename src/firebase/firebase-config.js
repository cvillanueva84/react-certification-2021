import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB87cc0tT9ehCXCzpe0TMCx4Sg7bf82MHA",
    authDomain: "react-wizeline-26f1c.firebaseapp.com",
    projectId: "react-wizeline-26f1c",
    storageBucket: "react-wizeline-26f1c.appspot.com",
    messagingSenderId: "776574510039",
    appId: "1:776574510039:web:129980bee21348c4dfe192"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();

export {
    googleAuthProvider,
    db,
    firebase
}