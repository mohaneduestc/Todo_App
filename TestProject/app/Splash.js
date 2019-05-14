import React, { Component } from 'react';
import {Text, AsyncStorage , StyleSheet, View, ActivityIndicator} from 'react-native';


class Home extends Component {
    
    componentDidMount(){
        AsyncStorage.getItem('app_token')
        .then(token=>{
            if (token) {
                this.props.navigation.navigate('Home');                
            }else{
                this.props.navigation.navigate('Login'); 
            }
        })
    }

     render() { 
        return ( 
            <View style={styles.header}>
            <ActivityIndicator size={'small'} />
                <Text>Loading ...</Text>
            </View>
         );
    }
}
 
const styles =StyleSheet.create({
    header:{
        flex:1,
        backgroundColor:'#efefef',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize: 15,
        fontWeight:'bold'

    }
})
export default Home;