import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import AddInspection from './AddInspection';
import { KeyboardAvoidingView } from 'react-native';

const Dashboard = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Text>Dashboard Screen</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('AddInspection');
        }}
      >
        <Text style={{ alignItems: 'center' }}>AddInspection</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

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

export default Dashboard;
