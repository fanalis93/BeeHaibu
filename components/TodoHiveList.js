import React from 'react';
import { BackHandler } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import Colors from './Colors';
import TodoHiveModal from './TodoHiveModal';
import moment from 'moment';
import Dashboard from '../screens/Dashboard';
export default class TodoHiveList extends React.Component {
  state = {
    showHiveVisible: false,
  };
  toggleHiveModal() {
    // this.props.navigation.navigate('Dashboard');
  }

  render() {
    const hive = this.props.hive;
    return (
      <View>
        {/* <Modal
          animationType="slide"
          visible={this.state.showHiveVisible}
          onRequestClose={() => this.toggleHiveModal()}
        >
          <TodoHiveModal
            hive={hive}
            closeModal={() => this.toggleHiveModal()}
            updateHive={this.props.updateHive}
          />
        </Modal> */}
        <TouchableOpacity
          style={[styles.listContainer, { backgroundColor: Colors.bee_header }]}
          onPress={() => {
            this.props.navigation.navigate('Dashboard');
          }}
          onLongPress={() => this.props.deleteHive(hive)} //delete list
        >
          <Text style={styles.listTitle} numberofLines={1}>
            {hive.hiveName}
          </Text>
          <Text style={styles.listTitle} numberofLines={2}>
            Location: Mahallah {hive.hiveLocation}
          </Text>
          <Text style={styles.listTitle} numberofLines={2}>
            Colony Install Date: {hive.colonyStartDate}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 10,
    //marginHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    marginVertical: 12,
    marginHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 10,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.white,
    marginBottom: 18,
    textAlign: 'center',
  },
  date: {
    fontSize: 25,
    fontWeight: '200',
    color: Colors.white,
  },
  honeyCollected: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.white,
  },
});
