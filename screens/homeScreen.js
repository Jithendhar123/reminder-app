import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader'

export class HomeScreen extends React.Component {
  render() {
    return (
      <View>
          <AppHeader/>
        <TouchableOpacity style={[styles.button]}
          onPress={() => this.props.navigation.navigate('AddTaskScreen')}>
          <Text style={styles.buttontext}> Add Task </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 120 / 3,
    marginTop: 260,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  buttontext: {
    fontSize: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
