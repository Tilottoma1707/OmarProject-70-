import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import FaceBookScreen from './Screens/FaceBookScreen';
import InstaScreen from './Screens/insta';

export default class App extends React.Component{
  render(){
  return (
   <AppContainer/>
  );}
}
const Tabnavigator = createBottomTabNavigator({
  FaceBook:{screen:FaceBookScreen},
  insta:{screen:InstaScreen}
})
const AppContainer =createAppContainer(Tabnavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


