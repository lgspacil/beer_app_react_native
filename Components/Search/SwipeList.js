import React, { Component } from 'react';
import { View, Text, StyleSHeet } from "react-native";
import { Content, ListItem, Container, Header, List, Button, Icon } from 'native-base';
import Swipeout from 'react-native-swipeout';
const uuidv1 = require('uuid/v1');
var storage = require('react-native-local-storage');


class SwipeList extends Component {

    state = {
        drinkInfo: null

    }

    componentWillMount = () => {
        console.log('hey swipelist is mounting')
        this.setState({drinkInfo: this.props.oneDrink})
    }


    goToDrink = (info) => {
        this.props.goToDrink(info)
    }

    deleteDrink = () => {
        storage.remove(this.state.drinkInfo[1]).then(() => {
            this.props.reloadDrinks()
        })
    }

    render() {


        return (
            <ListItem
                key={uuidv1()}
                onPress={() => this.goToDrink({ name: this.state.drinkInfo[0], id: this.state.drinkInfo[1] })}
                itemDivider style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{this.state.drinkInfo[0]}</Text>
                <Button iconLeft light onPress={() => this.deleteDrink()}>
                    <Icon name='trash' />
                    <Text>Delete</Text>
                </Button>
            </ListItem>

        )
    }
}

export default SwipeList