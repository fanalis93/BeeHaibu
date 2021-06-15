import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import Dashboard from './Dashboard';
import InspectionList from './InspectionList';
import HiveList from './HiveList';
import Icon from 'react-native-vector-icons/Ionicons';
import AlertScreen from './AlertScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native';
import UserTabScreen from './UserTabScreen';
import Colors from '../components/Colors';

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
    initialRouteName="HiveList"
    activeColor="#fff"
    labelStyle={{ fontSize: 15 }}
    barStyle={{ backgroundColor: '#f4cc22' }}
  >
    <Tab.Screen
      name="HiveList"
      component={HiveList}
      options={{
        tabBarLabel: 'HiveList',
        tabBarColor: '#009387', //tab bar er color change kor (bottom tabbar)
        tabBarIcon: ({ color }) => (
          <Icon name="archive-outline" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Dashboard"
      component={DashboardStackScreen}
      options={{
        tabBarLabel: 'Dashboard',
        tabBarColor: Colors.bee_header,
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      options={{
        headerShown: true,
        tabBarLabel: 'Inspection List',
        tabBarColor: Colors.yellowGrey,
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
        tabBarColor: Colors.lightBlue,
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
      // options={{ headerShown: true }}
      name="HiveList"
      component={HiveList}
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
    <DashboardStack.Screen
      options={{ headerShown: false }}
      name="LoginScreen"
      component={UserTabScreen}
    />
  </DashboardStack.Navigator>
);
// const LoginStackScreen = ({ navigation }) => (
//   <LoginStack.Navigator screenOptions={globalScreenOptions}>
//     <LoginStack.Screen name="Login" component={LoginScreen} />
//     {/* <LoginStack.Screen name="SignUp" component={SignupScreen} /> */}
//   </LoginStack.Navigator>
// );
