// import React from 'react';
// import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import Colors from '../components/Colors';
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart,
// } from 'react-native-chart-kit';
// const screenWidth = Dimensions.get('window').width;
// const chartConfig1 = {
//   backgroundColor: '#e26a00',
//   backgroundGradientFrom: '#fb8c00',
//   // backgroundGradientFrom: '#f4cc22',
//   backgroundGradientTo: '#ffa726',
//   decimalPlaces: 2, // optional, defaults to 2dp
//   color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//   labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//   style: {
//     borderRadius: 16,
//   },
//   propsForDots: {
//     r: '6',
//     strokeWidth: '2',
//     stroke: '#ffa726',
//   },
// };

// const data_temp = {
//   labels: ['60', '50', '40', '30', '20', '10', '0'],
//   datasets: [
//     {
//       data: [
//         Math.random() * 90,
//         Math.random() * 90,
//         Math.random() * 90,
//         Math.random() * 90,
//         Math.random() * 90,
//         Math.random() * 90,
//         Math.random() * 90,
//       ],
//       color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
//       strokeWidth: 2, // optional
//     },
//   ],
//   legend: ['Temperature'], // optional
// };
// const data_hum = {
//   labels: ['60', '50', '40', '30', '20', '10', '0'],
//   datasets: [
//     {
//       data: [
//         Math.random() * 90,
//         Math.random() * 90,
//         Math.random() * 90,
//         Math.random() * 90,
//         Math.random() * 90,
//         Math.random() * 90,
//         Math.random() * 90,
//       ],
//       color: (opacity = 1) => `rgba(38, 99, 71, ${opacity})`, // optional
//       strokeWidth: 2, // optional
//     },
//   ],
//   legend: ['Humidity'], // optional
// };
// export default function Vizualization() {
//   return (
//     <View>
//       <View style={styles.dataName}>
//         <Text style={styles.dataText}>Temperature Data</Text>
//       </View>
//       <LineChart
//         data={data_temp}
//         width={Dimensions.get('window').width} // from react-native
//         height={220}
//         yAxisLabel="T"
//         yAxisSuffix="C"
//         yAxisInterval={1} // optional, defaults to 1
//         chartConfig={chartConfig1}
//         bezier
//         style={{
//           marginVertical: 18,
//           marginLeft: 15,
//           marginRight: 15,
//           borderRadius: 15,
//           alignItems: 'center',
//         }}
//       />

//       <View style={styles.dataName}>
//         <Text style={styles.dataText}>Humidity Data</Text>
//       </View>
//       <LineChart
//         data={data_hum}
//         width={Dimensions.get('window').width} // from react-native
//         height={220}
//         yAxisLabel="T"
//         yAxisSuffix="C"
//         yAxisInterval={1} // optional, defaults to 1
//         chartConfig={chartConfig1}
//         bezier
//         style={{
//           marginVertical: 18,
//           marginLeft: 15,
//           marginRight: 15,
//           borderRadius: 15,
//           alignItems: 'center',
//         }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   dataName: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   dataText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     letterSpacing: 4,
//   },
// });

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import useGetVisualizationData from '../hooks/useGetVisualizationData';

import Colors from '../components/Colors';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
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

// const data_temp = {
//   labels: ['60', '50', '40', '30', '20', '10', '0'],
//   datasets: [
//     {
//       data: [
//         Math.random() * 90,
//         Math.random() * 90,
//         Math.random() * 90,
//         Math.random() * 90,
//         Math.random() * 90,
//         Math.random() * 90,
//         Math.random() * 90,
//       ],
//       color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
//       strokeWidth: 2, // optional
//     },
//   ],
//   legend: ['Temperature'], // optional
// };
// const data_hum = {
//   labels: ['60', '50', '40', '30', '20', '10', '0'],
//   datasets: [
//     {
//       data: [
//         Math.random() * 90,
//         Math.random() * 90,
//         Math.random() * 90,
//         Math.random() * 90,
//         Math.random() * 90,
//         Math.random() * 90,
//         Math.random() * 90,
//       ],
//       color: (opacity = 1) => `rgba(38, 99, 71, ${opacity})`, // optional
//       strokeWidth: 2, // optional
//     },
//   ],
//   legend: ['Humidity'], // optional
// };

export default function Vizualization() {
  const [loading, data_temp, data_hum] = useGetVisualizationData();

  if (loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View>
      <View style={styles.dataName}>
        <Text style={styles.dataText}>Temperature Data</Text>
      </View>
      <LineChart
        data={data_hum}
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
      <View style={styles.dataName}>
        <Text style={styles.dataText}>Humidity Data</Text>
      </View>
      <LineChart
        data={data_temp}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix="%"
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  dataName: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataText: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 4,
  },
});
