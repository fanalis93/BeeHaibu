import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import Dashboard from './Dashboard';
import InspectionList from './InspectionList';
import Icon from 'react-native-vector-icons/Ionicons';

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
    initialRouteName="Dashboard"
    activeColor="#fff"
    labelStyle={{ fontSize: 15 }}
    style={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      options={{ title: 'Beehaibu Login' }}
      name="LoginScreen"
      component={LoginStackScreen}
    />

    <Tab.Screen
      options={{ title: 'Beehaibu Signup' }}
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
