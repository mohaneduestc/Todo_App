import React, { Component } from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {Button, Card, CardItem, Input,Spinner} from './common';
import {connect} from 'react-redux'; 
import {addTask} from './actions';
// import {AsyncStorage} from 'react-native';

const styles =StyleSheet.create({
    errorStyle:{
        fontSize: 17,
        alignSelf: 'center',
        color: 'red'
    }
});


class AddTask extends Component {
    constructor(){
        super();
        this.state = { 
        name: '',
        done:false,
     };
    }
 
    componentWillReceiveProps(nextProps){
        if (nextProps.user) {
            this.props.navigation.navigate('Home');
        }    
    }
    _onSaveTask(){
        const{name, done} = this.state;
        this.props.addTask({name, done});
    }
 
    _renderButton(){
        if (this.props.loading){
            return <Spinner />;
        }
        return(
            <Button onPress={this._onSaveTask.bind(this)}>Save Task</Button>
        )
    }
    
    render(){
        return(
        
            <Card>
                <CardItem>
                    <Input
                    Label='Name'
                    placeholder='Enter Task Name'
                    secureTextEntry={false}
                    onChangeText={(name)=>this.setState({name})} />
                </CardItem>

                <CardItem>
                    <View style={styles.inputContanier}>
                        <Text style={styles.label}>Task Status</Text>
                    <Switch
                        onValueChange={(done) => this.setState({done})}
                        value={this.state.done} />
                    </View>
                </CardItem>

                <Text>{this.props.error}</Text>
                <CardItem>
                    {this._renderButton()}
                </CardItem>

            </Card>
            
        )
    }
}
  
const mapStateToProps= state => {
    return{
        error: state.saveTask.error,
        loading: state.saveTask.loading,
        saved:state.saveTask.saved
    }
}

export default connect(mapStateToProps, {addTask}) (AddTask);