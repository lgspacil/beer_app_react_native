import React, { Component } from 'react';
import { View, Text, StyleSHeet } from "react-native";
import { Content, ListItem, Container, Header, List, Button, Icon, Form, Item, Input } from 'native-base';


class AddPersonalDrinks extends Component {

    state = {
        drinkInfo: null,
        drinkName: ''

    }


    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Text> {this.state.drinkName}</Text>
                        <Item>
                            <Input 
                            onChangeText={(text) => this.setState({drinkName: text})}
                            placeholder="Drink Name" />
                        </Item>
                        <Item last>
                            <Input placeholder="Ingredients" />
                        </Item>
                    </Form>
                </Content>
            </Container>

        )
    }
}

export default AddPersonalDrinks