import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
  TextInput,
  Keyboard,
  Animated,
  Image,
  ScrollView,
  Platform,
  Button,
  ActivityIndicator,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Colors from './Colors';
import { colorsDark } from 'react-native-elements/dist/config';
import { Swipeable } from 'react-native-gesture-handler';
import fire from '../firebase/fire';
// import Swipeable from 'react-native-gesture-handler/Swipeable';
import AddImage from './AddImage';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
export default class TodoHiveModal extends React.Component {
  state = {
    // name: this.props.list.name,
    // inspector: this.props.list.inspector,
    // date: this.props.list.date,
    // color: this.props.list.color,
    // todos: this.props.list.todos,
  };

  render() {
    const hive = this.props.hive;
    return (
      <KeyboardAvoidingView
        style={{ flex: 1, overflow: 'hidden' }}
        behavior="padding"
      >
        <SafeAreaView style={styles.container}>
          <TouchableOpacity
            style={{ position: 'absolute', top: 25, right: 25, zIndex: 10 }}
            onPress={this.props.closeModal}
          >
            <AntDesign name="close" size={24} color={Colors.red} />
          </TouchableOpacity>
          <View
            style={[
              styles.section,
              styles.header,
              { borderBottomColor: list.color, borderBottomWidth: 6 },
            ]}
          >
            <View>
              <Text style={styles.title}>{hive.hiveName}</Text>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: Colors.black,
  },
  section: {
    flex: 1,
    alignSelf: 'stretch',
  },
  header: {
    justifyContent: 'flex-end',
    marginLeft: 64,
    borderBottomWidth: 3,
  },
  insDate: {
    marginTop: 4,
    marginBottom: 16,
    color: Colors.grey,
    fontWeight: '700',
  },
  todoContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  todo: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '700',
  },
  footer: {
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: Colors.bee_header,
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  addTodo: {
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    flex: 1,
    backgroundColor: Colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
});
