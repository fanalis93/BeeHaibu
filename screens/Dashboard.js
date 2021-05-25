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
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import AddInspection from './AddInspection';
import InspectionList from './InspectionList';
import { KeyboardAvoidingView } from 'react-native';
import Colors from '../components/Colors';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import { useFonts } from '@use-expo/font';

const screenWidth = Dimensions.get('window').width;
const chartConfig1 = {
  backgroundColor: '#e26a00',
  backgroundGradientFrom: '#fb8c00',
  // backgroundGradientFrom: '#f4cc22',
  backgroundGradientTo: '#ffa726',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [
        Math.random() * 90,
        Math.random() * 90,
        Math.random() * 90,
        Math.random() * 90,
        Math.random() * 90,
        Math.random() * 90,
      ],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ['Temperature'], // optional
};

//----------------------------------------------------------------------------------------------------!!!!!!!!!!!!
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
          <LineChart
            data={data}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            yAxisLabel="T"
            yAxisSuffix="C"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig1}
            bezier
            style={{
              marginVertical: 18,
              marginLeft: 15,
              marginRight: 15,
              borderRadius: 15,
              alignItems: 'center',
            }}
          />
          <View style={{ marginLeft: 12 }}>
            <Text style={[styles.bodyText]}>Current Temperature: {'-'}</Text>
            <Text style={[styles.bodyText]}>Current Humidity: {'-'}</Text>
            <Text style={[styles.bodyText]}>Supplier: {'-'}</Text>
          </View>
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
  bodyText: {
    fontSize: 30,
    fontWeight: '700',
    color: Colors.black,
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
