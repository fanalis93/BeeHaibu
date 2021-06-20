import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  Modal,
  Button,
  Alert,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import AddInspection from './AddInspection';
import InspectionList from './InspectionList';
import HiveList from './HiveList';
// import UserTabScreen from './UserTabScreen';
import { KeyboardAvoidingView } from 'react-native';
import Colors from '../components/Colors';
import Vizualization from '../components/Vizualization';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import { useFonts } from '@use-expo/font';
import fire from '../firebase/fire';

//----------------------------------------------------------------------------------------------------!!!!!!!!!!!!
const Dashboard = ({ navigation }) => {
  // const { hiveName } = route.params('hiveName');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);
  const signOutUser = async () => {
    try {
      const response = await fire.auth().signOut();
      navigation.navigate('LoginScreen');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      >
        <ImageBackground
          source={require('../assets/new_back_2.png')}
          style={styles.image}
        >
          {/* <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              padding: 15,
              backgroundColor: Colors.lightBlue,
              borderRadius: 10,
              margin: 10,
            }}
            onPress={signOutUser}
          >
            <Text>Logout</Text>
          </TouchableOpacity> */}
          <Vizualization />
          <View style={{ marginLeft: 12 }}>
            <Text style={[styles.bodyText]}>Hive ID: Hive_01</Text>
            {/* <Text style={[styles.bodyText]}>Hive ID: {hiveName}</Text> */}
            <Text style={[styles.bodyText]}>Bee Species: Meliponines</Text>
            <Text style={[styles.bodyText]}>
              Hive Location: Mahallah Aminah
            </Text>
            <Text style={[styles.bodyText]}>Current Temperature: 31.50 C</Text>
            <Text style={[styles.bodyText]}>Current Humidity: 78.20%</Text>
            <Text style={[styles.bodyText]}>Supplier: Melipoly</Text>
            {/* <TouchableOpacity onPress={() => navigation.navigate('HiveList')}>
              <Text>HIves</Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity onPress={signOutUser}>
              <Text>Logout</Text>
            </TouchableOpacity> */}
          </View>
          {/* <Button containerStyle={styles.button} /> */}
        </ImageBackground>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  bodyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
    letterSpacing: 2,
    // fontFamily: 'Ubuntu',
  },
  button: {
    // width: 200,
    marginTop: 15,
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    // backgroundColor: Colors.bee_header,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'center',
    width: '100%',
    height: '100%',
    // right: 15,
    // left: 10,
    // alignItems: 'center',
  },
});

export default Dashboard;
