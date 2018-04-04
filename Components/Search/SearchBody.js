import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Content, ListItem, Container, Header, List } from 'native-base';



class SearchBody extends React.Component {
    static navigationOptions = {
        header: null
    }

    pressed = (id) => {
        this.props.aFunction(id);
    }
    render() {
        const drinkList = this.props.drinkData.map(drinkInfo => <ListItem key={drinkInfo.idDrink} onPress={() => this.pressed({id: drinkInfo.idDrink, name: drinkInfo.strDrink})}><Text>{drinkInfo.strDrink}</Text></ListItem>)
        return (
            <Container>
                <Content>
                    <List>
                        {drinkList}
                    </List>
                </Content>
            </Container>
        )
    }
}

export default SearchBody