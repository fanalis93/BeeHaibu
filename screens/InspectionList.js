import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Modal,
  RefreshControl,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Colors from '../components/Colors';
import TodoList from '../components/TodoList';
import tempData from '../tempData';
import { AntDesign } from '@expo/vector-icons';
import AddListModal from '../components/AddListModal';

// const image = {source: '../assets/back1'};
export default class InspectionList extends React.Component {
  state = {
    addTodoVisible: false,
    isRefreshing: false,
  };
  toggleAddTodoModal() {
    this.setState({ addTodoVisible: !this.state.addTodoVisible });
  }
  renderList = (list) => {
    return <TodoList list={list} />;
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('../assets/new_back.png')}
          style={styles.image}
        >
          <Modal
            animationType="slide"
            visible={this.state.addTodoVisible}
            onRequestClose={() => this.toggleAddTodoModal()}
          >
            <AddListModal closeModal={() => this.toggleAddTodoModal()} />
          </Modal>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.divider} />
            <Text style={styles.title}>
              Inspection
              <Text style={{ fontWeight: '300', color: Colors.jolpai }}>
                List
              </Text>
            </Text>
            <View style={styles.divider} />
          </View>
          <View style={{ marginVertical: 15 }}>
            <TouchableOpacity
              style={styles.addList}
              onPress={() => this.toggleAddTodoModal()}
            >
              <AntDesign name="plus" size={16} color={Colors.blue} />
            </TouchableOpacity>
            <Text style={styles.add}>Add List</Text>
          </View>

          <View style={{ height: 500 }}>
            <FlatList
              data={tempData}
              keyExtractor={(item) => item.name}
              horizontal={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => this.renderList(item)}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.isRefreshing}
                  onRefresh={this._onRefresh}
                />
              }
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
  _onRefresh = () => {
    this.setState({ isRefreshing: true });
    setTimeout(() => {
      this.setState({ isRefreshing: false });
    }, 1000);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    // right: 25,
    alignItems: 'center',
  },
  divider: {
    backgroundColor: Colors.lightBlue,
    height: 3,
    flex: 1,
    alignSelf: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: '700',
    color: Colors.black,
    paddingHorizontal: 50,
  },
  addList: {
    borderWidth: 2,
    borderColor: Colors.lightBlue,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  add: {
    color: Colors.blue,
    fontWeight: '600',
    fontSize: 14,
    marginTop: 8,
  },
});

// export default InspectionList;
