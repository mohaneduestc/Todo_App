import React, { Component } from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';


const Input =(props)=>{
    return(
        <View style={styles.InputContainer}>
            <Text style={styles.Label}>{props.label}</Text>
            <TextInput 
                style={styles.Input}
                // autoCapitalize={false}
                autoCorrect={false}
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry}
                placeholder={props.placeholder}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    InputContainer:{
        flex:1, 
        flexDirection:'row',
        alignItems:'center',
        height:40      
    },
    Label:{
        fontSize:16,
        paddingLeft:20,
        flex:1,
        fontWeight:'bold'
    },
    Input:{
        fontSize:16,
        color:'#000',
        paddingLeft:5,
        paddingRight:5,
        flex:2,
    }
});
export {Input};