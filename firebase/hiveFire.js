import * as firebase from 'firebase';
import { Alerts } from 'react-native';
// import firebase from '@react-native-firebase/app';

import '@firebase/firestore';
import { Alert } from 'react-native';

const firebaseConfig = {
  apiKey: 'AIzaSyBxgwbIEAPaebuZS_t18DCzwo6k6YhRZdU',
  authDomain: 'bee-expo.firebaseapp.com',
  projectId: 'bee-expo',
  storageBucket: 'bee-expo.appspot.com',
  messagingSenderId: '776807702206',
  appId: '1:776807702206:web:cc9e4529aaebb4c098c8ef',
  measurementId: 'G-65WJKVP7H9',
};

class hiveFire {
  constructor(callback) {
    this.init(callback);
  }
  init(callback) {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        callback(null, user);
      } else {
        firebase
          .auth()
          .signInAnonymously()
          .catch((error) => {
            callback(error);
          });
      }
    });
  }
  getHives(callback) {
    let ref = this.ref.orderBy('hiveName');

    this.unsubscribe = ref.onSnapshot((snapshot) => {
      hives = [];

      snapshot.forEach((doc) => {
        hives.push({ id: doc.id, ...doc.data() });
      });
      callback(hives);
    });
  }
  addHive(hive) {
    let ref = this.ref;
    ref.add(hive);
  }
  updateHive(hive) {
    let ref = this.ref;
    ref.doc(hive.id).update(hive);
  }
  get userId() {
    return firebase.auth().currentUser.uid;
  }
  get ref() {
    return firebase
      .firestore()
      .collection('users')
      .doc(this.userId)
      .collection('hives');
  }
  detach() {
    this.unsubscribe();
  }
  deleteHive(hive) {
    let ref = this.ref;
    ref.doc(hive.id).delete();
    Alert.alert('Hive Profile Deleted');
  }
}

export default hiveFire;
