import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';
import Colors from './Colors';
import moment from 'moment';
import Dashboard from '../screens/Dashboard';
import InspectionList from '../screens/InspectionList';
import { useNavigation } from '@react-navigation/native';

export default class HiveItems extends React.Component {
  nav = () => {
    useNavigation.navigate('Dashboard');
  };
  render() {
    // const { navigation } = this.props;
    const list = this.props.list;
    return (
      <View>
        <TouchableOpacity onPress={this.nav}>
          <Text>Dash</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.listContainer]}
          onPress={() => this.props.navigation.navigate('InspectionList')}
        >
          <Text style={styles.listTitle} numberofLines={1}>
            {list.title}
          </Text>
          <Text style={styles.listTitle} numberofLines={1}>
            {list.location}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: Colors.bee_header,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    width: 300,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.black,
    marginBottom: 18,
  },
});

// export default class HiveItems extends React.Component {
//   render() {
//     // const { navigation } = this.props;
//     const list = this.props.list;
//     return (
//       <View>
//         <TouchableOpacity
//           style={[styles.listContainer]}
//           onPress={() => this.props.navigation.navigate('Dashboard')}
//         >
//           <Text style={styles.listTitle} numberofLines={1}>
//             {list.title}
//           </Text>
//           <Text style={styles.listTitle} numberofLines={1}>
//             {list.location}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
