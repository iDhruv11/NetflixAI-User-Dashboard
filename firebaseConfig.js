import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDcO-1mgVGQGoEfW6AU-CPU3xZrfHXWQ74",
    authDomain: "netflixgpt-e8299.firebaseapp.com",
    projectId: "netflixgpt-e8299",
    storageBucket: "netflixgpt-e8299.appspot.com",
    messagingSenderId: "868101018006",
    appId: "1:868101018006:web:2510a9e2b04eaec54acdb7"
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)