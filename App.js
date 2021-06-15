import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import Dashboard from './screens/Dashboard';
import InspectionList from './screens/InspectionList';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MainTabScreen from './screens/MainTabScreen';
import UserTabScreen from './screens/UserTabScreen';
// import LoadingScreen from './screens/LoadingScreen';
import Logout from './components/Logout';
import fire from './firebase/fire';
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: '#f4cc22' },
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white',
  fontWeight: '700',
};

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName="Dashboard"
//         activeColor="#fff"
//         labelStyle={{ fontSize: 15 }}
//         style={{ backgroundColor: 'tomato' }}
//       >
//         <Tab.Screen name="Dashboard" component={Dashboard} />
//         <Tab.Screen
//           options={{ headerShown: false }}
//           name="InspectionList"
//           component={InspectionList}
//         />
//         <Tab.Screen
//           options={{ title: 'Beehaibu Login' }}
//           name="LoginScreen"
//           component={LoginScreen}
//         />

//         <Tab.Screen
//           options={{ title: 'Beehaibu Signup' }}
//           name="SignupScreen"
//           component={SignupScreen}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

const Drawer = createDrawerNavigator();
const App = ({ navigation }) => {
  const signOutUser = async () => {
    try {
      const response = await fire.auth().signOut();
      navigation.navigate('UserTabScreen', { screen: 'LoginScreen' });
    } catch (err) {
      console.log(err);
    }
  };
  const showAlert = () => {
    Alert.alert('User logged out successfully');
  };
  return (
    <NavigationContainer>
      {/* initialRouteName = Home/Login/Signup */}
      <Drawer.Navigator initialRouteName="Dashboard">
        {/* <Drawer.Screen name="Loading" component={LoadingScreen} /> */}
        <Drawer.Screen name="Dashboard" component={MainTabScreen} />
        {/* <Drawer.Screen name="Login" component={UserTabScreen} /> */}
        <Drawer.Screen
          name="Logout"
          component={UserTabScreen}
          onPress={showAlert}
        />
      </Drawer.Navigator>
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
