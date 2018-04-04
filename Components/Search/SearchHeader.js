import React, {Component} from 'react';
import {View, Text, StyleSHeet} from "react-native";
import {Header, Item, Icon, Input, Button, Right} from 'native-base';

class SearchHeader extends React.Component{

    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <Header
                style={{height: 80, backgroundColor: '#718798'}}
                searchBar
                rounded
            >

            <Item>
                <Icon name="ios-search" />
                <Input
                    placeholder="Enter drink name"
                    // this.props is calling onChangeText in the parent
                    onChangeText={this.props.onChangeText}
                    returnKeyType="search"

                    //calling the method beerSearch in the parent
                    onSubmitEditing = {this.props.drinkSearch}

                />
            </Item>

            <Right>
                    <Button
                    style={{backgroundColor: '#3b4045', height: 40}}
                    onPress={this.props.surpriseMe}>
                    <Icon name='refresh' />
                    <Text style={{color: 'white'}}>Surprise Me!</Text>
                    </Button>
          </Right>
            
            </Header>
        )
    }
}

export default SearchHeader