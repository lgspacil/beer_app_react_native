import React, {Component} from 'react';
import {View, Text, StyleSHeet} from "react-native";
var storage = require('react-native-local-storage');
import { Content, ListItem, Container, Header, List, Button } from 'native-base';
const uuidv1 = require('uuid/v1');


class FavoritesTab extends Component{

    state = {
        favoriteDrinkInfo: [],
        favoriteDrinkID : null

    }

    componentWillMount = () =>{
        console.log('mounting')
        storage.getAllKeys().then((data) => {
            console.log("getting the data", data)
            this.setState({favoriteDrinkID: data})

            var array = [];
            for(var i = 0; i < data.length; i++){
                console.log('hello?')
                storage.get(data[i]).then((info) => {
                    console.log(info)
                    console.log(array)
                    array.push(info)
                    this.setState({favoriteDrinkInfo: array})
                })
            }
        })
    }


    // componentWillMount = () => {
    //     console.log('mounting');
    //     storage.getAllKeys().then((data) => {
    //         console.log('the data I got back is: ', data)
    //         this.setState({favoriteDrinkID: data})

    //         .then(() => {
    //             console.log('data is: ', data)
    //             var favoriteDrinkInfo = [];
    //             for(var i = 0; i < data.length; i++){
    //                 storage.get(data[i]).then((drink) => {
    //                     console.log('the favorite drink is', drink);
    //                 })
                    
    //             }
    //         })
    //     })
    // }

    clear = () => {
        console.log('sup!')
        storage.clear();
        
    }

    pressed = (info) => {
        console.log(info);
        this.props.navigation.navigate("SpecificDrink", {
            drinkId: info.id,
            name: info.name
        })
    }

    render(){
        console.log('the state is', this.state.favoriteDrinkInfo)
        const favoriteDrinkList = this.state.favoriteDrinkInfo.map(drinkInfo => <ListItem key={uuidv1()} onPress={() => this.pressed({name: drinkInfo[0], id: drinkInfo[1]})}><Text>{drinkInfo[0]}</Text></ListItem>)
        return(
            <Container>
                <Content>
                    <Button onPress={this.clear}><Text>Clear Data</Text></Button>
                    <List>
                        {favoriteDrinkList}
                    </List>
                </Content>
            </Container>
        )
    }
}

export default FavoritesTab