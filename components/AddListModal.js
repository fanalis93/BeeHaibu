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
import tempData from '../tempData';
import CustomDatePicker from './CustomDatePicker';
import moment from 'moment';
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
    inspector: '',
    honeyCollected: '',
    dateTime: '',
    color: this.backgroundColors[0],
  };

  createTodo = () => {
    const { name, inspector, honeyCollected, dateTime, color } = this.state;
    // tempData.push({
    //   name,
    //   inspector,
    //   date,
    //   color,
    //   todos: [],
    // });
    const list = { name, inspector, honeyCollected, dateTime, color };
    this.props.addList(list);

    this.setState({ name: '' });
    this.setState({ inspector: '' });
    this.setState({ honeyCollected: '' });
    this.setState({ dateTime: '' });
    this.props.closeModal();
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
          onPress={this.props.closeModal}
        >
          <AntDesign name="close" size={24} color={Colors.red} />
        </TouchableOpacity>
        <View style={{ alignself: 'stretch', marginHorizontal: 32 }}>
          <Text style={styles.title}>Create a New Inspection</Text>
          <TextInput
            style={styles.input}
            placeholder="Add Name of Inspection"
            onChangeText={(text) => this.setState({ name: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Add Name of Inspector"
            onChangeText={(text) => this.setState({ inspector: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Honey Collected"
            onChangeText={(text) => this.setState({ honeyCollected: text })}
          />
          <View style={styles.input}>
            <Text style={{ fontSize: 18, color: Colors.grey }}>
              Date of Inspection
            </Text>
            <CustomDatePicker
              defaultDate="1996-02-20"
              textStyle={{ color: '#fff' }}
              onDateChange={(value) =>
                this.setState({
                  dateTime: moment(value).format('MMMM Do, YYYY'),
                })
              }
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 12,
            }}
          >
            {this.renderColors()}
          </View>
          <TouchableOpacity
            style={[styles.create, { backgroundColor: this.state.color }]}
            onPress={this.createTodo} // take reference from here to add "honey collected"
          >
            <Text style={{ color: Colors.white, fontWeight: '600' }}>
              Create an Inspection!
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
    justifyContent: 'center',
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
