import React from 'react';
import { Button, Input, Image } from 'react-native-elements';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
import firebase from '../firebase/fire';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signUp = async () => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
      navigation.navigate('LoginScreen');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require('../assets/signup_logo.png')}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
      <Button
        containerStyle={styles.button}
        onPress={() => signUp()}
        title="SignUp"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
    width: 300,
    marginTop: 20,
  },
  button: {
    width: 210,
    marginTop: 15,
    justifyContent: 'center',
  },
});
