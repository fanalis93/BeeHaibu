import React from 'react';
import { Button, Input, Image } from 'react-native-elements';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
import firebase from '../firebase/fire';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signIn = async () => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Dashboard');
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require('../assets/logo_temp.png')}
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
    width: 300,
    marginTop: 20,
  },
  button: {
    width: 200,
    marginTop: 15,
    justifyContent: 'center',
  },
});
