import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyD3clElihItJNvTj7g6EBeDxsyzBjo3Nfg',
	authDomain: 'crown-db-ca176.firebaseapp.com',
	databaseURL: 'https://crown-db-ca176.firebaseio.com',
	projectId: 'crown-db-ca176',
	storageBucket: 'crown-db-ca176.appspot.com',
	messagingSenderId: '419444290064',
	appId: '1:419444290064:web:90af2fb46087b47c265095',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
