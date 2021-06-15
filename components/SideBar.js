import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigator-drawer';
import { Ionicons } from '@expo/vector-icons';

export default SideBar = (props) => {
  <ScrollView>
    <View style={styles.container}>
      <DrawerNavigatorItems {...props} />
    </View>
  </ScrollView>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
