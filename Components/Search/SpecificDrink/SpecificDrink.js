import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { Content, ListItem, Container, Header, List, Button } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import axios from 'axios';
const uuidv1 = require('uuid/v1');

class SpecificDrink extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;

        return {
            title: params ? params.name : 'Drink Name',
        }
    };

    state = {
        drinkData: null,
        showContent: false,
        ingredient_data: {}

    }

    componentDidMount = () => {
        console.log('component will mount', this.props.navigation.state)
        const query = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + this.props.navigation.state.params.drinkId
        axios.get(query)
            .then((response) => {
                console.log('the response is!!!!! ', response.data.drinks);
                this.setState({ drinkData: response.data.drinks[0], showContent: true });
            })
            .catch((err) => {
                console.log('err ', err);
            })
    }


    render() {
        let loadedDrink;
        let final_view;
        if (this.state.showContent === true) {

            let stopIngredients_count;

            for (var key in this.state.drinkData){
                // console.log('the key is: ', key)
                if(this.state.drinkData.hasOwnProperty(key)){
                    // console.log(key + " -> " + this.state.drinkData[key]);
                    if(this.state.drinkData[key] === "" || this.state.drinkData[key] ===  " "){
                        console.log(key +" has no data")
                        var new_key = key.split('');
                        stopIngredients_count =  parseInt(new_key[new_key.length -1]);
                        console.log(stopIngredients_count);
                        break;
                    }
                }
            }

            let strIngredientsArray = [];
            let strMeasureArray = [];

            for(var i = 1; i < stopIngredients_count; i++){
                var ing = "strIngredient"+(i.toString());
                var mea = "strMeasure"+(i.toString());
                
                strMeasureArray.push(this.state.drinkData[mea]);
                strIngredientsArray.push(this.state.drinkData[ing]);

            }


            // const drinkList = this.props.drinkData.map(drinkInfo => <ListItem key={drinkInfo.idDrink} onPress={() => this.pressed({id: drinkInfo.idDrink, name: drinkInfo.strDrink})}><Text>{drinkInfo.strDrink}</Text></ListItem>)
            let ingredients_view = strIngredientsArray.map(ingredient => <Text key={uuidv1()}>{ingredient}</Text>)
            let measure_view = strMeasureArray.map(measurement => <Text key={uuidv1()}>{measurement}</Text>)


        

            console.log("the state info ===> ", this.state.drinkData)
            loadedDrink =
                    <Content>
                        <ListItem itemDivider style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Image source={{uri: this.state.drinkData.strDrinkThumb}} style={{height: 300, width: 300}} />
                        </ListItem>
                        <List>
                            <ListItem itemDivider>
                                <Text>Ingredients</Text>
                            </ListItem>
                            <Grid>
                                <Col>
                                    {ingredients_view}
                                </Col>
                                <Col>
                                    {measure_view}
                                </Col>
                            </Grid>
                            <ListItem itemDivider>
                                <Text>Instructions</Text>
                            </ListItem>
                            <ListItem>
                                <Text>{this.state.drinkData.strInstructions}</Text>
                            </ListItem>
                        </List>
                    </Content>
        } else {
            loadedDrink =
                <View>
                    <Text>Text</Text>
                </View>
        }

        return (
            <Container>
                {loadedDrink}
                
            </Container>
        )
    }
}

export default SpecificDrink