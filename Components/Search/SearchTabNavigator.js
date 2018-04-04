import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native"
import {Footer, FooterTab, Button, Icon} from 'native-base';

import {TabNavigator} from 'react-navigation';
import SearchTab from './TabNavigator/SearchTab';
import FavoritesTab from './TabNavigator/FavoritesTab';

const SearchTabNavigator = TabNavigator({
    SearchTab: {screen: SearchTab},
    FavoritesTab: {screen: FavoritesTab}
}, {
    tabBarPosition: "bottom",
    tabBarComponent:props => {
        return (
            <Footer>
                <FooterTab>
                    <Button
                        style={{backgroundColor:"#718798"}}
                        vertical
                        active = {props.navigationState.index === 0}
                        onPress = {() => props.navigation.navigate('SearchTab')}>
                        <Icon name="beer"/>
                        <Text>Search</Text>
                    </Button>

                    <Button
                        style={{backgroundColor:"#718798"}}
                        vertical
                        active = {props.navigationState.index === 1}
                        onPress = {() => props.navigation.navigate('FavoritesTab')}>
                        <Icon name="star"/>
                        <Text>Favorites</Text>
                    </Button>
                </FooterTab>

            </Footer>
        )
    },
    // headerStyle: {
    //     backgroundColor: '#f4511e',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },

})

export default SearchTabNavigator;