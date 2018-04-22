import React, { Component } from 'react';
import { View, Text, StyleSHeet } from "react-native";
import { Content, ListItem, Container, Header, List, Button, Icon } from 'native-base';


class AddPersonalDrinks extends Component {

    state = {
        drinkInfo: null

    }


    render() {
        return (
            <View>
                <Text>Add personal drinks</Text>
            </View>

        )
    }
}

export default AddPersonalDrinks