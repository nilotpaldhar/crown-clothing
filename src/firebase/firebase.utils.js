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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
