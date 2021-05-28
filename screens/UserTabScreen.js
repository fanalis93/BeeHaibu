import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import Dashboard from './Dashboard';
import InspectionList from './InspectionList';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const DashboardStack = createStackNavigator();
const LoginStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: '#f4cc22' },
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white',
  fontWeight: '700',
};

const UserTabScreen = () => (
  <Tab.Navigator
    initialRouteName="LoginScreen"
    activeColor="#fff"
    labelStyle={{ fontSize: 15 }}
    barStyle={{ backgroundColor: '#f4cc22' }}
  >
    <Tab.Screen
      options={{
        title: 'Beehaibu Login',
        tabBarLabel: 'LogIn',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="login" color={color} size={26} />
        ),
      }}
      name="LoginScreen"
      component={LoginStackScreen}
    />

    <Tab.Screen
      options={{
        title: 'Beehaibu Signup',
        tabBarLabel: 'SignUp',
        tabBarIcon: ({ color }) => (
          <Octicons name="sign-in" color={color} size={26} />
        ),
      }}
      name="SignupScreen"
      component={SignupScreen}
    />
  </Tab.Navigator>
);
export default UserTabScreen;

const LoginStackScreen = ({ navigation }) => (
  <LoginStack.Navigator screenOptions={globalScreenOptions}>
    <LoginStack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        headerShown: false,
        title: 'BeeHaibu Login',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#f4cc22"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
    <LoginStack.Screen
      name="SignUp"
      component={SignupScreen}
      options={{
        title: 'BeeHaibu SignUp',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#f4cc22"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </LoginStack.Navigator>
);
