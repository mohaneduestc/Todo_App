import React, { Component } from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Button, Card, CardItem, Input, Spinner} from './common';
import {connect} from 'react-redux';
import {loginUser} from './actions'
import {AsyncStorage} from 'react-native';


class LoginForm extends Component {
    constructor(){
        super();
        this.state = { 
            username:'',
            password:''
         };
    }
    componentWillMount(){
        AsyncStorage.getItem('app_token')
        .then(token=>{console.log(token)});
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.user) {
            this.props.navigation.navigate('Home');
        }    
    }
    
    _renderButton () {
        if (this.props.loading) {
            return <Spinner/>;
        }
        return(
            <Button onPress={this._buttonPressed.bind(this)}>Login</Button>
        )
    }
     _buttonPressed (){
         const {username, password}=this.state;
         this.props.loginUser({username, password});
     }
    render() { 
        return ( 
            <Card>
                <CardItem >
                    <Input 
                    label='Email'
                    placeholder='Enter your Email'
                    secureTextEntry={false}
                    onChangeText={(username)=> this.setState({username})}
                    />
                </CardItem>

                <CardItem >
                    <Input 
                    label='password'
                    placeholder='Enter your password'
                    secureTextEntry={true}
                    onChangeText={(password)=> this.setState({password})}
                    />
                </CardItem>
                    <Text>{this.props.error}</Text>
                <CardItem >
                    {this._renderButton()}
                </CardItem>
            </Card>
         );
    }
}
 const mapStateToProps= state =>{
     return{
        error:state.auth.error,
         loading:state.auth.loading,
         user:state.auth.user
     }

 }
 
export default connect (mapStateToProps, {loginUser})(LoginForm);