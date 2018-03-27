import React, {Component} from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Image
} from "react-native"
import {Button} from 'native-base';
var backgroundImage = require('../../assets/HomeScreen/cocktail.jpg');

class HomeScreen extends Component {

    //get rid of the header bar for the home screen
    static navigationOptions = {
        header: null
    }

    render(){
        return (
            <View style={styles.homeScreenView}>
                <View style={{position:'absolute', top:0, left:0, height:'100%', width:'100%'}}>
                    <Image source={backgroundImage} style={{flex:1, height:null, width:null}} />
                </View>
                <Button 
                block = {true}
                onPress={ () => this.props.navigation.navigate("SearchTabNavigator")}
                dark = {true}
                >
                    <Text style={{color: 'white'}}>Search Cocktails</Text>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeScreenView: {
        flex: 1,
        justifyContent: 'flex-end'
    }
})

export default HomeScreen;