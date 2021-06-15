import React, { useState, useEffect } from 'react';
import { Button, Input, Image, Icon } from 'react-native-elements';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';
import fire from '../firebase/fire';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signIn = async () => {
    try {
      const response = await fire
        .auth()
        .signInWithEmailAndPassword(email, password);
      navigation.navigate('Dashboard');
    } catch (err) {
      setError(err.message);
    }
  };
  // const signOutUser = async () => {
  //   try {
  //     const response = await fire.auth().signOut();
  //     navigation.navigate('LoginScreen');
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  const showAlert = () => {
    Alert.alert('User Logged Out');
  };
  useEffect(() => {
    const signOutUser = async () => {
      try {
        const response = await fire.auth().signOut();
        // navigation.navigate('LoginScreen');
      } catch (e) {
        console.log(e);
      }
    };
    // const unsubscribe = navigation.addListener('focus', () => {
    //   Alert.alert('Refreshed');
    // });
    signOutUser();
    // showAlert();
    // return unsubscribe;
  }, []);
  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require('../assets/Untitled.png')}
        style={{
          width: 150,
          height: 150,
          justifyContent: 'flex-end',
        }}
      />
      <View style={styles.inputContainer}>
        {/* <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        /> */}
        <TextInput
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.textInput}
        />
      </View>
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
      <Button containerStyle={styles.button} onPress={signIn} title="Login" />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('SignupScreen');
        }}
      >
        <Text>Don't Have Account? SignUp</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
    width: '80%',
    //height: 44,
    //backgroundColor: '#f1f3f6',
    paddingHorizontal: 10,
    marginTop: 25,
  },
  button: {
    width: 210,
    marginTop: 15,
    justifyContent: 'center',
  },
  textInput: {
    //width: '80%',
    height: 44,
    backgroundColor: '#f1f3f6',
    borderRadius: 8,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
