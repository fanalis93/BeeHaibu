import React from 'react';
import { BackHandler } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import Colors from './Colors';
import TodoModal from './TodoModal';

export default class TodoList extends React.Component {
  state = {
    showListVisible: false,
  };
  toggleListModal() {
    this.setState({ showListVisible: !this.state.showListVisible });
  }

  render() {
    const list = this.props.list;
    const completedCount = list.todos.filter((todo) => todo.completed).length;
    const remainingCount = list.todos.length - completedCount;
    const honeyAmount = list.honeyCollected == '' ? 0 : list.honeyCollected;
    return (
      <View>
        <Modal
          animationType="slide"
          visible={this.state.showListVisible}
          onRequestClose={() => this.toggleListModal()}
        >
          <TodoModal
            list={list}
            closeModal={() => this.toggleListModal()}
            updateList={this.props.updateList}
          />
        </Modal>
        <TouchableOpacity
          style={[styles.listContainer, { backgroundColor: list.color }]}
          onPress={() => this.toggleListModal()}
          onLongPress={() => this.props.deleteList(list)} //delete list
        >
          <Text style={styles.listTitle} numberofLines={1}>
            {list.name}
          </Text>
          <Text style={styles.listTitle} numberofLines={1}>
            {list.inspector}
          </Text>
          <Text style={styles.listTitle} numberofLines={1}>
            {list.date}
          </Text>
          <View>
            <View style={{ alignItems: 'center' }}>
              {/* <Text style={styles.date}>12/02/2021</Text> */}
              <Text style={styles.honeyCollected}>
                Honey Collected: {honeyAmount} KG
              </Text>
            </View>
          </View>
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
