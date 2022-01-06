import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCfz0uRBd5xtV_6yAZcE40dOY2wawMY3gU",
    authDomain: "crwn-db-bfc2a.firebaseapp.com",
    projectId: "crwn-db-bfc2a",
    storageBucket: "crwn-db-bfc2a.appspot.com",
    messagingSenderId: "29426408096",
    appId: "1:29426408096:web:c0f9782be3f7de086c47c5",
    measurementId: "G-8EM9BHH8CJ"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;