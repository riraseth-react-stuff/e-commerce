import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC9yOSMhDDphYIEPHZmC_e6aCFsa4CfZOI',
  authDomain: 'e-commerce-17e2d.firebaseapp.com',
  databaseURL: 'https://e-commerce-17e2d.firebaseio.com',
  projectId: 'e-commerce-17e2d',
  storageBucket: 'e-commerce-17e2d.appspot.com',
  messagingSenderId: '323590004550',
  appId: '1:323590004550:web:8b40123ae46de8b44fcf47',
  measurementId: 'G-BV2MWSEWPK',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
