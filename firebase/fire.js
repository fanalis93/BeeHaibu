import * as firebase from 'firebase';
// import firebase from '@react-native-firebase/app';

import '@firebase/firestore';

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
// class fire {
//   constructor(callback) {
//     this.init(callback);
//   }
//   init(callback) {
//     if (!firebase.apps.length) {
//       firebase.initializeApp(firebaseConfig);
//     }
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         callback(null, user);
//       } else {
//         firebase
//           .auth()
//           .signInAnonymously()
//           .catch((error) => {
//             callback(error);
//           });
//       }
//     });
//   }
// }

export default firebase;
