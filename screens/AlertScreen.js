import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import Colors from '../components/Colors';

// const AlertScreen = () => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
//   // const toggleSwitch = (value) => {
//   //   setIsEnabled(value);
//   // };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>This is AlertScreen</Text>
//       <View style={styles.alertList}>
//         <Text style={[styles.listText, { marginRight: 50 }]}>
//           Honey Harvest
//         </Text>
//         <Switch
//           trackColor={{ false: '#767577', true: '#81b0ff' }}
//           thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
//           ios_backgroundColor="#3e3e3e"
//           onValueChange={toggleSwitch}
//           value={isEnabled}
//           style={styles.switch}
//         />
//       </View>
//       <View style={styles.alertList}>
//         <Text style={[styles.listText, { marginRight: 15 }]}>
//           Temperature Alert
//         </Text>
//         <Switch
//           trackColor={{ false: '#767577', true: '#81b0ff' }}
//           thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
//           ios_backgroundColor="#3e3e3e"
//           onValueChange={toggleSwitch}
//           value={isEnabled}
//           style={styles.switch}
//         />
//       </View>
//       <View style={styles.alertList}>
//         <Text style={[styles.listText, { marginRight: 55 }]}>
//           Humidity Alert
//         </Text>
//         <Switch
//           trackColor={{ false: '#767577', true: '#81b0ff' }}
//           thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
//           ios_backgroundColor="#3e3e3e"
//           onValueChange={toggleSwitch}
//           value={isEnabled}
//           style={styles.switch}
//         />
//       </View>
//       <View style={styles.alertList}>
//         <Text style={[styles.listText, { marginRight: 77 }]}>Weight Alert</Text>
//         <Switch
//           trackColor={{ false: '#767577', true: '#81b0ff' }}
//           thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
//           ios_backgroundColor="#3e3e3e"
//           onValueChange={toggleSwitch}
//           value={isEnabled}
//           style={styles.switch}
//         />
//       </View>
//     </View>
//   );
// };

// export default AlertScreen;
export default class AlertScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSwitch: null,
    };
  }
  toggleSwitch = (switchNumber) => {
    this.setState({
      activeSwitch:
        switchNumber === this.state.activeSwitch ? null : switchNumber,
    });
  };
  switchOne = (value) => {
    this.toggleSwitch(1);
  };
  switchTwo = (value) => {
    this.toggleSwitch(2);
  };
  switchThree = (value) => {
    this.toggleSwitch(3);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>This is AlertScreen</Text>
        <View style={styles.alertList}>
          <Text style={[styles.listText, { marginRight: 45 }]}>
            Honey Harvest
          </Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={this.state.activeSwitch === 1 ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={this.switchOne}
            value={this.state.activeSwitch === 1}
            style={styles.switch}
          />
        </View>
        <View style={styles.alertList}>
          <Text style={[styles.listText, { marginRight: 10 }]}>
            Temperature Alert
          </Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={this.state.activeSwitch === 2 ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={this.switchTwo}
            value={this.state.activeSwitch === 2}
            style={styles.switch}
          />
        </View>
        <View style={styles.alertList}>
          <Text style={[styles.listText, { marginRight: 50 }]}>
            Humidity Alert
          </Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={this.state.activeSwitch === 3 ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={this.switchThree}
            value={this.state.activeSwitch === 3}
            style={styles.switch}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  switch: {
    right: 0,
  },
  alertList: {
    flexDirection: 'row',
    width: '60%',
    overflow: 'hidden',
  },
  listText: {
    fontSize: 24,
  },
  title: {
    fontSize: 38,
    fontWeight: '700',
    color: Colors.black,
    paddingHorizontal: 50,
    textAlign: 'center',
    textDecorationLine: 'underline',
    textDecorationColor: Colors.lightBlue,
    letterSpacing: 7,
    top: 0,
    backgroundColor: Colors.lightBlue,
    marginBottom: 30,
  },
});
