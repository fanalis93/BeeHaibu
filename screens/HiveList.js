import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  RefreshControl,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Colors from '../components/Colors';
import { Header } from 'react-native-elements';
import HiveItems from '../components/HiveItems';
import Dashboard from './Dashboard';
import AddHiveModal from '../components/AddHiveModal';
import hiveFire from '../firebase/hiveFire';
import TodoHiveList from '../components/TodoHiveList';
// import { StackActions, NavigationActions } from 'react-navigation';

import { AntDesign, Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Hive_01',
    location: 'Aminah',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Hive_02',
    location: 'Ruqayah',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Hive_03',
    location: 'Salahuddin',
  },
];
const Item = ({ title, location }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={{ fontSize: 15, textAlign: 'center' }}>
      Hive Location: {location}
    </Text>
    {/* <TouchableOpacity style={[styles.item]} onPress={() => console.log('ss')}>
      <Text style={styles.listTitle} numberofLines={1}>
        {title}
      </Text>
      <Text style={styles.listTitle} numberofLines={1}>
        {location}
      </Text>
    </TouchableOpacity> */}
  </View>
);
export default class HiveList extends React.Component {
  //   renderItems = (list) => {
  //     return <HiveItems list={list} />;
  //   };
  state = {
    addTodoVisible: false,
    isRefreshing: false,
    hives: [],
    user: {},
    loading: true,
  };
  componentDidMount() {
    firebase = new hiveFire((error, user) => {
      if (error) {
        return alert('Uh oh, something went wrong!');
      }
      firebase.getHives((hives) => {
        this.setState({ hives, user }, () => {
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
  renderHive = (hive) => {
    return (
      <TodoHiveList
        hive={hive}
        navigation={this.props.navigation}
        updateHive={this.updateHive}
        deleteHive={this.deleteHive}
      />
    );
  };
  addHive = (hive) => {
    // this.setState({
    //   lists: [
    //     ...this.state.lists,
    //     { ...list, id: this.state.lists.length + 1, todos: [] },
    //   ],
    // });
    firebase.addHive({
      hiveName: hive.hiveName,
      hiveLocation: hive.hiveLocation,
      hiveSupplierName: hive.hiveSupplierName,
      hiveBeeSpecies: hive.hiveBeeSpecies,
      colonyStartDate: hive.colonyStartDate,
    });
  };

  updateHive = (hive) => {
    // this.setState({
    //   lists: this.state.lists.map((item) => {
    //     return item.id === list.id ? list : item;
    //   }),
    // });
    firebase.updateHive(hive);
  };
  deleteHive = (hive) => {
    firebase.deleteHive(hive);
  };
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={Colors.blue} />
        </View>
      );
    }
    const renderItems = ({ item }) => (
      <Item title={item.title} location={item.location} navigation />
    );

    return (
      <SafeAreaView style={styles.container}>
        {/* <Header
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        /> */}
        <KeyboardAvoidingView style={styles.image}>
          <Modal
            animationType="slide"
            visible={this.state.addTodoVisible}
            onRequestClose={() => this.toggleAddTodoModal()}
          >
            <AddHiveModal
              closeModal={() => this.toggleAddTodoModal()}
              addHive={this.addHive}
            />
          </Modal>
          <View>
            {/* <Text>User Unique ID: {this.state.user.uid}</Text> */}
            <Text>User Email: {this.state.user.email}</Text>
            {/* <Text>email: {this.state.email}</Text> */}
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.divider} />
            <Text style={[styles.title, { color: Colors.bee_header }]}>
              Hive
              <Text style={{ fontWeight: '300', color: Colors.black }}>
                List
              </Text>
            </Text>
            <View style={styles.divider} />
          </View>
          {/* <View>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0.2)',
              alignItems: 'center',
              justifyContent: 'center',
              width: 70,
              position: 'absolute',
              top: 5,
              left: -25,
              height: 50,
              backgroundColor: '#fff',
              borderRadius: 100,
            }}
            // onPress={() => this.props.navigation.navigate('Dashboard')}
          >
            <AntDesign name="plus" size={30} color="#01a699" />
          </TouchableOpacity>
        </View> */}
          <View style={{ marginVertical: 15 }}>
            <TouchableOpacity
              // style={{
              //   borderWidth: 1,
              //   borderColor: 'rgba(0,0,0,0.2)',
              //   alignItems: 'center',
              //   justifyContent: 'center',
              //   width: 70,
              //   position: 'absolute',
              //   // top: 5,
              //   left: -25,
              //   height: 50,
              //   backgroundColor: '#fff',
              //   borderRadius: 100,
              // }}
              style={styles.addList}
              onPress={() => this.toggleAddTodoModal()}
            >
              <AntDesign name="plus" size={16} color={Colors.blue} />
            </TouchableOpacity>
            {/* <Text style={styles.add}>Add List</Text> */}
          </View>
          {/* <SafeAreaView style={styles.listContainer}>
          <View style={{ marginTop: 70 }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Dashboard')}
            >
              <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                //   renderItem={({ item }) => this.renderItems(item)}
                renderItem={renderItems}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                keyboardShouldPersistTaps="always"
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView> */}
          <View style={{ height: 500 }}>
            <FlatList
              data={this.state.hives}
              keyExtractor={(item) => item.id.toString()}
              horizontal={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => this.renderHive(item)}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.isRefreshing}
                  onRefresh={this._onRefresh}
                />
              }
              keyboardShouldPersistTaps="always"
            />
          </View>
        </KeyboardAvoidingView>
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
    // flex: 1,
    // justifyContent: 'center',
    // top: 50,
    // alignItems: 'center',
    // backgroundColor: Colors.blue
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
  listContainer: {
    // backgroundColor: Colors.lightBlue,
    top: 50,
    height: 200,
  },
  divider: {
    backgroundColor: Colors.lightBlue,
    height: 3,
    flex: 1,
    alignSelf: 'center',
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
  title: {
    fontSize: 38,
    fontWeight: '700',
    color: Colors.black,
    paddingHorizontal: 50,
    alignItems: 'center',
  },
  item: {
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

    elevation: 9,
  },
});
