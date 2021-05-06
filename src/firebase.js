import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyATWc8JInkDqte8B4QkII6mr_eXLiMRD54",
	authDomain: "linkedin-clone-6409f.firebaseapp.com",
	projectId: "linkedin-clone-6409f",
	storageBucket: "linkedin-clone-6409f.appspot.com",
	messagingSenderId: "724216255847",
	appId: "1:724216255847:web:0a64af5a80929264bccbc2",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
