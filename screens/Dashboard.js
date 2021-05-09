import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
  ScrollView,
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
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
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
      </ScrollView>
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
  scrollView: {
    flex: 1,
    backgroundColor: Colors.bee_header,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Dashboard;
