import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from './Colors';

export default class AddListModal extends Component {
  backgroundColors = [
    '#5CD859',
    '#24A6D9',
    '#595BD9',
    '#8022D9',
    '#D159D8',
    '#D85963',
    '#D88559',
  ];
  state = {
    name: '',
    color: this.backgroundColors[0],
  };
  renderColors() {
    return this.backgroundColors.map((color) => {
      return (
        <TouchableOpacity
          key={color}
          style={[styles.colorSelect, { backgroundColor: color }]}
          onPress={() => this.setState({ color })}
        />
      );
    });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity
          style={{ position: 'absolute', top: 25, right: 25 }}
          onPress={this.props.closeModel}
        >
          <AntDesign name="close" size={24} color={Colors.red} />
        </TouchableOpacity>
        <View style={{ alignself: 'stretch', marginHorizontal: 32 }}>
          <Text style={styles.title}>Create A New Inspection</Text>
          <TextInput
            style={styles.input}
            placeholder="Add Name of Inspection"
          />
          <TextInput
            style={styles.input}
            placeholder="Add Name of Inspector"
            onChangeText={(text) => this.setState({ name: text })}
          />
          <View>{this.renderColors()}</View>
          <TouchableOpacity
            style={[styles.create, { backgroundColor: this.state.color }]}
          >
            <Text style={{ color: Colors.white, fontWeight: '600' }}>
              Create!
            </Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 28,
    color: Colors.black,
    alignSelf: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.red,
    borderRadius: 6,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  create: {
    marginTop: 24,
    height: 50,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: Colors.blue,
  },
  colorSelect: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
});
