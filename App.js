import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './Components/Home/HomeScreen';
import SearchTabNavigator from './Components/Search/SearchTabNavigator';
import SpecificDrink from './Components/Search/SpecificDrink/SpecificDrink';
import FavoriteDrinkScreen from './Components/Search/TabNavigator/FavoritesTab';
import AddPersonalDrinksScreen from './Components/AddPersonalDrinks';

const App = StackNavigator({
  HomeScreen: {screen: HomeScreen},
  SearchTabNavigator: {screen: SearchTabNavigator},
  SpecificDrink: {screen: SpecificDrink},
  FavoriteDrinkScreen: {screen: FavoriteDrinkScreen},
  AddPersonalDrinksScreen: {screen: AddPersonalDrinksScreen}
}, {
  // initialRouteName: 'HomeScreen',
  initialRouteName: 'FavoriteDrinkScreen',
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
})


export default App;