import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../components/Colors';

const AddInspection = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.divider} />
        <Text style={styles.title}>
          Add
          <Text style={{ fontWeight: 'bold', color: Colors.jolpai }}>
            Inspection
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    backgroundColor: Colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: Colors.black,
    paddingHorizontal: 50,
  },
});

export default AddInspection;
