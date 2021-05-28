import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import fire from '../firebase/fire';
import LoginScreen from '../screens/LoginScreen';

const Logout = ({ navigation }) => {
  const signOutUser = async () => {
    try {
      const response = await fire.auth().signOut();
      navigation.navigate('LoginScreen');
    } catch (e) {
      console.log(e);
    }
  };
  return { signOutUser };
};

export default Logout;

const styles = StyleSheet.create({});
