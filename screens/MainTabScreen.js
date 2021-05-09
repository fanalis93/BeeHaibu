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
    style={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen name="Dashboard" component={DashboardStackScreen} />
    <Tab.Screen
      options={{ headerShown: false }}
      name="InspectionList"
      component={InspectionList}
    />
    <Tab.Screen
      options={{ headerShown: false }}
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
      options={{ headerShown: false }}
      name="InspectionList"
      component={InspectionList}
    />
  </DashboardStack.Navigator>
);
// const LoginStackScreen = ({ navigation }) => (
//   <LoginStack.Navigator screenOptions={globalScreenOptions}>
//     <LoginStack.Screen name="Login" component={LoginScreen} />
//     {/* <LoginStack.Screen name="SignUp" component={SignupScreen} /> */}
//   </LoginStack.Navigator>
// );
