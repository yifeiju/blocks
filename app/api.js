import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "./firebase";
import { setDoc, getDocs, query, collection, addDoc, where } from "firebase/firestore";
const collectionName = 'items';
const itemsCollection = collection(db, collectionName);
const ordersCollection = collection(db, 'orders');


export const signUp = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
        const user = userCredential.user;
        await setDoc(doc(db, 'users', user.uid));
        return user.uid;
    }).catch((error) => {
        console.log(error);
    });
}

export const signIn = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
        const user = userCredential.user;
        return user.uid;
    })
        .catch(error => {
            console.log(error);
        })
}
