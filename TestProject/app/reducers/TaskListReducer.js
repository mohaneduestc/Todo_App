import {
    LOADING_TASKS,
    LOADING_SUCCESS,
    LOADING_FAILED
} from '../actions/types';

const INSTIAL_STATE ={loading:false, error: '', tasks:[]};

export default(state =INSTIAL_STATE, action)=>{
    switch(action.type){
        case LOADING_TASKS:
        return {...state, loading: true}
        case LOADING_SUCCESS:
        return {...INSTIAL_STATE, loading: false, tasks: action.tasks}
        case LOADING_FAILED:
        return {...INSTIAL_STATE, loading: false, error: action.error}
        default:
        return state;
    }
}