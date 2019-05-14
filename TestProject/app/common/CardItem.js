import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';

const CardItem =(props)=>{
    return(
        <View style={styles.CardItem}>
            {props.children}
        </View>

    );
};

const styles = StyleSheet.create({
    CardItem:{
        padding:5,
        borderColor:'#ddd',
        borderBottomWidth:1,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row' 
    }
});
export  {CardItem};