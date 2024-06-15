// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKi667Eotr00hkxCvlapuWrVdnxaoKMv4",
    authDomain: "spotify-299ef.firebaseapp.com",
    projectId: "spotify-299ef",
    storageBucket: "spotify-299ef.appspot.com",
    messagingSenderId: "184904903742",
    appId: "1:184904903742:web:baba851f3f9fc20130b56f"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default firease;