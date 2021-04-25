import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBxgwbIEAPaebuZS_t18DCzwo6k6YhRZdU',
  authDomain: 'bee-expo.firebaseapp.com',
  projectId: 'bee-expo',
  storageBucket: 'bee-expo.appspot.com',
  messagingSenderId: '776807702206',
  appId: '1:776807702206:web:cc9e4529aaebb4c098c8ef',
  measurementId: 'G-65WJKVP7H9',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
