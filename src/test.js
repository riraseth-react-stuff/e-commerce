import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('M2SRADeJcO9eO3wNCsek')
  .collection('cartItems')
  .doc('ljmkhUptTMbYeg1UnsCZ');

firestore.doc('users/M2SRADeJcO9eO3wNCsek/cartItems/ljmkhUptTMbYeg1UnsCZ');

firestore.collection('users/M2SRADeJcO9eO3wNCsek/cartItems');
