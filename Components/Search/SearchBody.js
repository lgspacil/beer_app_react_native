import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Content, ListItem, Container, Header, List } from 'native-base';


class SearchBody extends Component {
    render() {
        const drinkList = this.props.drinkData.map(drinkInfo => <ListItem key={drinkInfo.idDrink}><Text>{drinkInfo.strDrink}</Text></ListItem>)
        return (
            <Container>
                <Header />
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