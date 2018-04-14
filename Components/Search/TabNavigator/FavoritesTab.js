import React, {Component} from 'react';
import {View, Text, StyleSHeet, StatusBar, Image} from "react-native";
var storage = require('react-native-local-storage');
import { Content, ListItem, Container, Header, List, Button, Fab, Icon } from 'native-base';
const uuidv1 = require('uuid/v1');
var backgroundImage = require('../../../assets/HomeScreen/cocktail.jpg');

var active ='true'

class FavoritesTab extends Component{

    state = {
        favoriteDrinkInfo: [],
        favoriteDrinkID : null,
        active: 'true'

    }

    static navigationOptions = {
        headerRight: <View style={{ flex: 1 }}>
      </View>

    }

    componentWillMount = () =>{
        this.loadDrinks();
    }

    loadDrinks = () => {
        console.log('RELOAD DRINKS')
        storage.getAllKeys().then((data) => {
            console.log("getting the data", data)
            this.setState({favoriteDrinkID: data})

            var array = [];
            for(var i = 0; i < data.length; i++){
                storage.get(data[i]).then((info) => {
                    array.push(info)
                    this.setState({favoriteDrinkInfo: array})
                })
            }
        })

    }

    clear = () => {
        console.log('sup!')
        storage.clear();
        
    }

    goToDrink = (info) => {
        console.log(info);
        this.props.navigation.navigate("SpecificDrink", {
            drinkId: info.id,
            name: info.name
        })
    }

    openDrink = (info) => {
        console.log('I am in the go Here with', info);
        this.props.navigation.navigate("SpecificDrink", {
            drinkId: info.id,
            name: info.name
        })
    }

    deleteDrink = (drink) => {
        console.log('deleting ', drink)
        storage.remove(drink).then(() => {
            this.loadDrinks();
        })
    }

    render(){

        const favoriteDrinkList = this.state.favoriteDrinkInfo.map(drinkInfo => 
            <ListItem
                key={uuidv1()}
                onPress={() => this.goToDrink({ name: drinkInfo[0], id: drinkInfo[1] })}
                style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: 'bold', color: '#97eb9a'}}>{drinkInfo[0]}</Text>
                <Button iconLeft transparent onPress={() => this.deleteDrink(drinkInfo[1])}>
                    <Icon name='trash' color='#97eb9a'/>
                    <Text style={{fontWeight: 'bold', color: '#97eb9a'}}>Delete</Text>
                </Button>
            </ListItem>)
        return(

            <Container>
                <StatusBar backgroundColor="black" />
                <View style={{position:'absolute', top:0, left:0, height:'100%', width:'100%'}}>
                    <Image source={backgroundImage} style={{flex:1, height:null, width:null}} />
                </View>
                <Content>
                    <List>
                        {favoriteDrinkList}
                    </List>
                </Content>
            </Container>
        )
    }
}

export default FavoritesTab