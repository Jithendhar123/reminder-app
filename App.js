import * as React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import HomeScreen from './screens/homeScreen'
import AddTaskScreen from './screens/AddTaskScreen'
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import AppHeader from './components/AppHeader'

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>

      <AppContainer/>
      </View>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  AddTaskScreen:AddTaskScreen
  
  
})

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#EAEBEA'
  }
})

const AppContainer = createAppContainer(AppNavigator)


