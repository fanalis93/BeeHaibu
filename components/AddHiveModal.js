import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Colors from './Colors';
import tempData from '../tempData';
import CustomDatePicker from './CustomDatePicker';
import moment from 'moment';
export default class AddHiveModal extends Component {
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
    hiveName: '',
    hiveLocation: '',
    hiveSupplierName: '',
    hiveBeeSpecies: '',
    colonyStartDate: '',
    // color: this.backgroundColors[0],
  };

  createHive = () => {
    const {
      hiveName,
      hiveLocation,
      hiveSupplierName,
      hiveBeeSpecies,
      colonyStartDate,
    } = this.state;
    // tempData.push({
    //   name,
    //   inspector,
    //   date,
    //   color,
    //   todos: [],
    // });
    const hive = {
      hiveName,
      hiveLocation,
      hiveSupplierName,
      hiveBeeSpecies,
      colonyStartDate,
    };
    this.props.addHive(hive);

    this.setState({ hiveName: '' });
    this.setState({ hiveLocation: '' });
    this.setState({ hiveSupplierName: '' });
    this.setState({ hiveBeeSpecies: '' });
    this.setState({ colonyStartDate: '' });

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
        <View
          style={{
            alignself: 'stretch',
            marginHorizontal: 32,
            overflow: 'hidden',
            // backgroundColor: Colors.lightBlue,
            width: '80%',
          }}
        >
          <Text style={styles.title}>Create a Hive Profile</Text>
          <TextInput
            style={styles.input}
            placeholder="Name of the Hide / Hive_ID"
            onChangeText={(text) => this.setState({ hiveName: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Hive Location"
            onChangeText={(text) => this.setState({ hiveLocation: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Hive Supplier Name"
            onChangeText={(text) => this.setState({ hiveSupplierName: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Honey Bee Species Type"
            onChangeText={(text) => this.setState({ hiveBeeSpecies: text })}
          />
          <View style={styles.input}>
            <Text style={{ fontSize: 18, color: Colors.grey }}>
              Colony Start Date
            </Text>
            <CustomDatePicker
              defaultDate="1996-02-20"
              textStyle={{ color: '#fff' }}
              onDateChange={(value) =>
                this.setState({
                  colonyStartDate: moment(value).format('MMMM Do, YYYY'),
                })
              }
            />
          </View>
          <TouchableOpacity
            style={[styles.create, { backgroundColor: Colors.bee_header }]}
            onPress={this.createHive} // take reference from here to add "honey collected"
          >
            <Text style={{ color: Colors.white, fontWeight: '600' }}>
              Create!
            </Text>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              marginTop: 32,
              // backgroundColor: Colors.bee_header,
              borderRadius: 15,
              borderColor: Colors.lightBlue,
              borderWidth: 2,
              padding: 10,
              flexDirection: 'row',
            }}
          >
            <Ionicons
              name="help-circle-outline"
              size={16}
              color={Colors.blue}
            />
            <Text>Please pick a date to insert!</Text>
          </View>
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
