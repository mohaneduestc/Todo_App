import {ADDING_FAILED, ADDING_SUCCESS, ADDING_TASKS} from './types';
import {AsyncStorage} from 'react-native';
import axios from 'axios';

const handleResponse = (dispatch,data)=>{
    if (data.success){
        dispatch({type:ADDING_SUCCESS})
    }else{
        dispatch({type:ADDING_FAILED, error:data.message})
    }
    console.log(data);
}
export const addTask =({name,done}) =>{
    return (dispatch) =>{
        dispatch({type:ADDING_TASKS});

        // Get Token from local storage
        AsyncStorage.getItem('app_token')
        .then(token =>{
            // Call back-end
            const url = 'https://mean-app-tutorial.herokuapp.com/api/v1/task';
            const config ={
                headers: {'Authorization': `Bearer ${token}`}
            };
            axios.post(url,{name,done}, config)
            .then(resp => handleResponse(dispatch,resp.data))
            .catch(error => console.log(error));
        });
    }
}