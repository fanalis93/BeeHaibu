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
export default class TodoModal extends React.Component {
  state = {
    // name: this.props.list.name,
    // inspector: this.props.list.inspector,
    // date: this.props.list.date,
    // color: this.props.list.color,
    // todos: this.props.list.todos,

    newTodo: '',
    image: null,
    uploading: false,
  };

  toggleTodoCompleted = (index) => {
    let list = this.props.list;
    list.todos[index].completed = !list.todos[index].completed;
    this.props.updateList(list);
  };

  addTodo = () => {
    let list = this.props.list;
    list.todos.push({ title: this.state.newTodo, completed: false });

    this.props.updateList(list);
    this.setState({ newTodo: '' });
    Keyboard.dismiss();
  };
  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  uploadImage = async () => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', this.state.image, true);
      xhr.send(null);
    });
    const ref = fire.storage().ref().child(new Date().toISOString());
    const snapshot = ref.put(blob);
    snapshot.on(
      fire.storage().TaskEvent.STATE_CHANGED,
      () => {
        this.setState({ uploading: true });
      },
      (error) => {
        this.setState({ uploading: false });
        console.log(error);
        blob.close();
        return;
      },
      () => {
        snapshot.snapshot.ref.getDownloadURL().then((url) => {
          this.setState({ uploading: false });
          console.log('download URL: ', url);
          blob.close();
          return url;
        });
      },
    );
  };

  renderTodo = (todo, index) => {
    return (
      <Swipeable
        renderRightActions={(_, dragX) => this.rightActions(dragX, index)}
      >
        <View style={styles.todoContainer}>
          <TouchableOpacity onPress={() => this.toggleTodoCompleted(index)}>
            <Ionicons
              name={todo.completed ? 'ios-square' : 'ios-square-outline'}
              size={24}
              color={Colors.grey}
              style={{ width: 32 }}
            />
          </TouchableOpacity>
          <Text
            style={[
              styles.todo,
              {
                color: todo.completed ? Colors.black : Colors.red,
                //textDecorationLine: todo.completed ? 'line-through' : 'none',
              },
            ]}
          >
            {todo.title}
          </Text>
        </View>
      </Swipeable>
    );
  };
  rightActions = (dragX, index) => {
    return (
      <TouchableOpacity>
        <Animated.View style={styles.deleteButton}>
          <Animated.Text style={{ color: Colors.white, fontWeight: '800' }}>
            Delete
          </Animated.Text>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  render() {
    const list = this.props.list;
    const taskCount = list.todos.length;
    const completedCount = list.todos.filter((todo) => todo.completed).length;
    let { image } = this.state;
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
              <Text style={styles.title}>{list.name}</Text>
              <Text style={[styles.title, { fontSize: 20 }]}>
                Br. {list.inspector}
              </Text>
              <Text style={[styles.title, { fontSize: 15 }]}>
                Honey Collected{' - '}
                {list.honeyCollected == '' ? 0 : list.honeyCollected} KG
              </Text>
              <Text style={styles.insDate}>{list.dateTime}</Text>
            </View>
          </View>
          <View
            style={[
              {
                // flex: 1,
                left: 0,
                // backgroundColor: Colors.black,
                marginTop: 15,
                paddingHorizontal: 32,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}
          >
            <Image
              source={{ uri: this.state.image }}
              style={{ width: 100, height: 100 }}
            />
            {!this.uploading ? (
              <TouchableOpacity
                style={[
                  styles.addTodo,
                  { backgroundColor: list.color, marginHorizontal: 15 },
                ]}
                onPress={() => {
                  this.uploadImage;
                }}
              >
                <Text style={{ color: '#fff' }}>Upload Image</Text>
              </TouchableOpacity>
            ) : (
              <ActivityIndicator size="large" color="#000" />
            )}
            <TouchableOpacity
              style={[styles.addTodo, { backgroundColor: list.color }]}
              onPress={this.pickImage}
            >
              <Text style={{ color: '#fff' }}>Choose Image</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.section, { flex: 3 }]}>
            <FlatList
              data={list.todos}
              renderItem={({ item, index }) => this.renderTodo(item, index)}
              keyExtractor={(_, index) => index.toString()}
              contentContainerStyle={{
                paddingHorizontal: 32,
                paddingVertical: 64,
              }}
              showsVerticalScrollIndicator={false}
            />
          </View>

          <View style={[styles.section, styles.footer]}>
            <TextInput
              style={[styles.input, { borderColor: list.color }]}
              onChangeText={(text) => this.setState({ newTodo: text })}
              value={this.state.newTodo}
              placeholder="Additional Information"
            />
            <TouchableOpacity
              style={[styles.addTodo, { backgroundColor: list.color }]}
              onPress={() => this.addTodo()}
            >
              <AntDesign name="plus" size={16} color={Colors.white} />
            </TouchableOpacity>
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
