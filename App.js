import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import Dashboard from './screens/Dashboard';
import InspectionList from './screens/InspectionList';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const globalScreenOptions = {
  headerStyle: { backgroundColor: '#f4cc22' },
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white',
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          options={{ title: '' }}
          name="InspectionList"
          component={InspectionList}
        />
        <Stack.Screen
          options={{ title: 'Beehaibu Login' }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen name="Dashboard" component={Dashboard} />

        <Stack.Screen
          options={{ title: 'Beehaibu Signup' }}
          name="SignupScreen"
          component={SignupScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
