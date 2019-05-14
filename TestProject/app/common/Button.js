import React, { Component } from 'react';
import{TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = (props)=>{
    return(
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.textStyle}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        marginRight:5,
        marginLeft:5,
        borderColor:'#007aff',
        borderWidth: 1,
        borderRadius:5,
        backgroundColor:'#fff',
        alignSelf:'stretch' ,
        flex:1,       

    },
    textStyle:{
        alignSelf:'center',
        color: '#007aff',
        fontSize:16,
        fontWeight:'700',
        paddingTop:10,
        paddingBottom:10,
    }
});
export {Button};