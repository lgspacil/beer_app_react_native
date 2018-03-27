import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './Components/Home/HomeScreen';
import SearchTabNavigator from './Components/Search/SearchTabNavigator';
import SpecificDrink from './Components/Search/SpecificDrink/SpecificDrink';

const App = StackNavigator({
  HomeScreen: {screen: HomeScreen},
  SearchTabNavigator: {screen: SearchTabNavigator},
  SpecificDrink: {screen: SpecificDrink}
}, {
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#718798',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
})


export default App;