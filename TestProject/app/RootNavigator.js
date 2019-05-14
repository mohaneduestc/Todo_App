import React, { Component } from 'react';
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginForm from './LoginForm';
import Home from './Home';
import Splash from './Splash';
import AddTask from './AddTask';


const RootNavigator = createStackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions:{
           header:false
            
        }
    },
    Login: {
      screen: LoginForm,
      navigationOptions:{
          title:'Login'
          
      }
  },
    Home: {
      screen: Home,
        navigationOptions:{
          title:'Home',
          headerLeft:false
          
        }
      },
    AddTask: {
      screen: AddTask,
        navigationOptions:{
          title:'Add New Task',
          // headerLeft:false
          
        }
      },
})

export default createAppContainer(RootNavigator);