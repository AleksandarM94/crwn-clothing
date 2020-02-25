import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyDKkZ2trdulkDwchEbNaNpXMwuU7SVVzqM",
	authDomain: "crwn-db-28b1d.firebaseapp.com",
	databaseURL: "https://crwn-db-28b1d.firebaseio.com",
	projectId: "crwn-db-28b1d",
	storageBucket: "crwn-db-28b1d.appspot.com",
	messagingSenderId: "486975439570",
	appId: "1:486975439570:web:d26586731ef748f4e5230b",
	measurementId: "G-4X27NNTXPV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
