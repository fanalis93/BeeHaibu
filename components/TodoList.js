import React from 'react';
import { BackHandler } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Colors from './Colors';

export default TodoList = ({ list }) => {
  return (
    <View style={[styles.listContainer, { backgroundColor: list.color }]}>
      <Text style={styles.listTitle} numberofLines={1}>
        {list.name}
      </Text>
      <View>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.date}>12/02/2021</Text>
          <Text style={styles.honeyCollected}>Honey Collected: 2.1 KG</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    //marginHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    marginVertical: 12,
    marginRight: 25,
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
