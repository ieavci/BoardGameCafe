import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0_RA1FV2Jbq0tsILg0GRwpWe0lhshJss",
    authDomain: "boardgamecafeapp.firebaseapp.com",
    projectId: "boardgamecafeapp",
    storageBucket: "boardgamecafeapp.appspot.com",
    messagingSenderId: "896054936407",
    appId: "1:896054936407:web:abc14191d1c4dc94cf3412"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const gameRef = collection(db, "BoardGameCafeApp")

const useGameListener = () => {
    useEffect(() => {
        return onSnapshot(gameRef, snapshot => {
            console.log(snapshot.docs)
        });

    }, [])
}

export { db,useGameListener };