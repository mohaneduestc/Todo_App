import {
    ADDING_TASKS,
    ADDING_SUCCESS,
    ADDING_FAILED
} from '../actions/types';

const INSTIAL_STATE ={loading:false, error: '', save:false};

export default(state =INSTIAL_STATE, action)=>{
    switch(action.type){
        case ADDING_TASKS:
        return {...state, loading: true}
        case ADDING_SUCCESS:
        return {...INSTIAL_STATE, loading: false, saved:true}
        case ADDING_FAILED:
        return {...INSTIAL_STATE, loading: false, error: action.tasks}
        default:
        return state;
    }
}