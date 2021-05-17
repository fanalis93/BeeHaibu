import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Colors from './Colors';

export default class TodoModal extends React.Component {
  state = {
    name: this.props.list.name,
    inspector: this.props.list.inspector,
    date: this.props.list.date,
    color: this.props.list.color,
    todos: this.props.list.todos,
  };
  renderTodo = (todo) => {
    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity>
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
    );
  };
  render() {
    return (
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
            { borderBottomColor: this.state.color, borderBottomWidth: 8 },
          ]}
        >
          <View>
            <Text style={styles.title}>{this.state.name}</Text>
            <Text style={[styles.title, { fontSize: 20 }]}>
              Br. {this.state.inspector}
            </Text>
            <Text style={styles.insDate}>{this.state.date}</Text>
          </View>
        </View>
        <View style={[styles.section, { flex: 3 }]}>
          <FlatList
            data={this.state.todos}
            renderItem={({ item }) => this.renderTodo(item)}
            keyExtractor={(item) => item.title}
            contentContainerStyle={{
              paddingHorizontal: 32,
              paddingVertical: 64,
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
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
});
