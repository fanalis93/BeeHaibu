import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import Dashboard from './Dashboard';
import InspectionList from './InspectionList';
import Icon from 'react-native-vector-icons/Ionicons';
import AlertScreen from './AlertScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DashboardStack = createStackNavigator();
const LoginStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: '#f4cc22' },
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white',
  fontWeight: '700',
};

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Dashboard"
    activeColor="#fff"
    labelStyle={{ fontSize: 15 }}
    barStyle={{ backgroundColor: '#f4cc22' }}
  >
    <Tab.Screen
      name="Dashboard"
      component={DashboardStackScreen}
      options={{
        tabBarLabel: 'Dashboard',
        // tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      options={{
        headerShown: true,
        tabBarLabel: 'Inspection List',
        // tabBarColor: '#fff',
        tabBarIcon: ({ color }) => (
          <Icon name="list-circle-outline" color={color} size={25} />
        ),
      }}
      name="InspectionList"
      component={InspectionList}
    />
    <Tab.Screen
      options={{
        headerShown: true,
        tabBarLabel: 'Alerts',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="bell-alert-outline"
            color={color}
            size={26}
          />
        ),
      }}
      name="AlertScreen"
      component={AlertScreen}
    />
    {/* <Tab.Screen
      options={{ title: 'Beehaibu Login' }}
      name="LoginScreen"
      component={LoginScreen}
    />

    <Tab.Screen
      options={{ title: 'Beehaibu Signup' }}
      name="SignupScreen"
      component={SignupScreen}
    /> */}
  </Tab.Navigator>
);
export default MainTabScreen;

const DashboardStackScreen = ({ navigation }) => (
  <DashboardStack.Navigator screenOptions={globalScreenOptions}>
    <DashboardStack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
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
    <DashboardStack.Screen
      options={{ headerShown: true }}
      name="InspectionList"
      component={InspectionList}
    />
    <DashboardStack.Screen
      options={{ headerShown: true }}
      name="Alerts"
      component={AlertScreen}
    />
  </DashboardStack.Navigator>
);
// const LoginStackScreen = ({ navigation }) => (
//   <LoginStack.Navigator screenOptions={globalScreenOptions}>
//     <LoginStack.Screen name="Login" component={LoginScreen} />
//     {/* <LoginStack.Screen name="SignUp" component={SignupScreen} /> */}
//   </LoginStack.Navigator>
// );
