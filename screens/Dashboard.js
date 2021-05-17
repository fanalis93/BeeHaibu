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
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import AddInspection from './AddInspection';
import InspectionList from './InspectionList';
import { KeyboardAvoidingView } from 'react-native';
import Colors from '../components/Colors';

const Dashboard = ({ navigation }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      >
        <ImageBackground
          source={require('../assets/new_back_2.png')}
          style={styles.image}
        >
          <View>
            <Text>Dashboard Screen</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('InspectionList');
            }}
          >
            <Text style={{ alignItems: 'center' }}>Go to Inspection List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('AlertScreen');
            }}
          >
            <Text style={{ alignItems: 'center' }}>Go to AlertScreen</Text>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
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
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    // right: 15,
    left: 10,
    alignItems: 'center',
  },
});

export default Dashboard;
