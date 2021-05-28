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
  ActivityIndicator,
} from 'react-native';
import Colors from '../components/Colors';
import TodoList from '../components/TodoList';
import tempData from '../tempData';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import AddListModal from '../components/AddListModal';
import inspectFire from '../firebase/inspectFire';

// const image = {source: '../assets/back1'};
export default class InspectionList extends React.Component {
  state = {
    addTodoVisible: false,
    isRefreshing: false,
    lists: [],
    user: {},
    loading: true,
  };
  componentDidMount() {
    firebase = new inspectFire((error, user) => {
      if (error) {
        return alert('Uh oh, something went wrong!');
      }
      firebase.getLists((lists) => {
        this.setState({ lists, user }, () => {
          this.setState({ loading: false });
        });
      });
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    firebase.detach();
  }

  toggleAddTodoModal() {
    this.setState({ addTodoVisible: !this.state.addTodoVisible });
  }
  renderList = (list) => {
    return (
      <TodoList
        list={list}
        updateList={this.updateList}
        deleteList={this.deleteList}
      />
    );
  };

  addList = (list) => {
    // this.setState({
    //   lists: [
    //     ...this.state.lists,
    //     { ...list, id: this.state.lists.length + 1, todos: [] },
    //   ],
    // });
    firebase.addList({
      name: list.name,
      inspector: list.inspector,
      honeyCollected: list.honeyCollected,
      dateTime: list.dateTime,
      color: list.color,
      todos: [
        {
          completed: false,
          title: 'Sign of Pests',
        },
        {
          completed: false,
          title: 'Sign of Thievery',
        },
        {
          completed: false,
          title: 'Sign of Eggs',
        },
      ],
    });
  };

  updateList = (list) => {
    // this.setState({
    //   lists: this.state.lists.map((item) => {
    //     return item.id === list.id ? list : item;
    //   }),
    // });
    firebase.updateList(list);
  };
  deleteList = (list) => {
    firebase.deleteList(list);
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={Colors.blue} />
        </View>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('../assets/new_back_2.png')}
          style={styles.image}
        >
          <Modal
            animationType="slide"
            visible={this.state.addTodoVisible}
            onRequestClose={() => this.toggleAddTodoModal()}
          >
            <AddListModal
              closeModal={() => this.toggleAddTodoModal()}
              addList={this.addList}
            />
          </Modal>
          <View>
            <Text>User: {this.state.user.uid}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.divider} />
            <Text style={[styles.title, { color: Colors.bee_header }]}>
              Inspection
              <Text style={{ fontWeight: '300', color: Colors.black }}>
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
              data={this.state.lists}
              keyExtractor={(item) => item.id.toString()}
              horizontal={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => this.renderList(item)}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.isRefreshing}
                  onRefresh={this._onRefresh}
                />
              }
              keyboardShouldPersistTaps="always"
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              marginTop: 32,
              // backgroundColor: Colors.bee_header,
              borderRadius: 15,
              borderColor: Colors.lightBlue,
              borderWidth: 2,
              padding: 10,
              flexDirection: 'row',
            }}
          >
            <Ionicons
              name="help-circle-outline"
              size={16}
              color={Colors.blue}
            />
            <Text>Long Press a list to delete.</Text>
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
