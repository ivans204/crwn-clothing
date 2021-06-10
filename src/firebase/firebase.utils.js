import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAmL8SVIRR6KgHbT0S723nkLCsufT57D58',
  authDomain: 'crwn-db-45df2.firebaseapp.com',
  projectId: 'crwn-db-45df2',
  storageBucket: 'crwn-db-45df2.appspot.com',
  messagingSenderId: '203242478989',
  appId: '1:203242478989:web:ec41ee3b98b7499edf71c4',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
