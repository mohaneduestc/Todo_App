import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';

const Card = (props)=>{
    return(
        <View style={styles.cardStyle}>
            {props.children}
        </View>
    )
}
const styles = StyleSheet.create({
    cardStyle:{
        marginRight:5,
        marginLeft:5,
        marginTop:10,
        // borderColor:'#007aff',
        borderWidth: 1,
        borderRadius:2,
        borderColor:'#aaa',
        borderBottomWidth:0,
        shadowColor:'#000',
        shadowOpacity:0.1,  
    }
});

export {Card};