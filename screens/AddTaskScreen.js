import React from 'react';
import {View, Text, KeyboardAvoidingView, Platform,TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import * as firebase from 'react-native'
import db from '../config'

export default class App extends React.Component{  
  constructor(props){
    super(props)
    this.state ={
      taskname: ''
    }
  }

  addtask = async()=>{
    db.collection('Tasks').add({
      'taskname':this.state.taskname,
      'date' : firebase.firestore.Timestamp.now().toDate(),
    })

  
    Alert.alert("Book issued!")
    this.setState={
      taskname: ''
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
      style={styles.writeTaskWrapper}
      >
      <TextInput style={styles.input} placeholder='Write the task'></TextInput>

      <TouchableOpacity  onPress={() => this.addtask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
       </TouchableOpacity>  
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    marginHorizontal:10,
    marginTop: 550,
    flexWrap: 'wrap'
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginTop: 550,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
});