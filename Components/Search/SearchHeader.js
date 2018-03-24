import React, {Component} from 'react';
import {View, Text, StyleSHeet} from "react-native";
import {Header, Item, Icon, Input} from 'native-base';

class SearchHeader extends Component{

    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <Header
                style={{height: 80}}
                searchBar
                rounded
            >

            <Item>
                <Icon name="ios-search" />
                <Input
                    placeholder="Enter drink name"
                    // this.propps is calling onChangeText in the parent
                    onChangeText={this.props.onChangeText}
                    returnKeyType="search"

                    //calling the method beerSearch in the parent
                    onSubmitEditing = {this.props.drinkSearch}

                />
            </Item>



            </Header>
        )
    }
}

export default SearchHeader