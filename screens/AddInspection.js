import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../components/Colors';
import { AntDesign } from '@expo/vector-icons';

const AddInspection = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.divider} />
        <Text style={styles.title}>
          Add
          <Text style={{ fontWeight: '300', color: Colors.jolpai }}>
            Inspection
          </Text>
        </Text>
        <View style={styles.divider} />
      </View>
      <View style={{ marginVertical: 15 }}>
        <TouchableOpacity style={styles.addList}>
          <AntDesign name="plus" size={16} color={Colors.blue} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
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
});

export default AddInspection;
