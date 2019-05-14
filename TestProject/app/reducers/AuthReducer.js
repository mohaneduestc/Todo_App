import {LOGIN_ATTEMPT,LOGIN_SUCCESS, LOGIN_FAILED} from '../actions/types';


const INSTIAL_STATE ={user: null,loading:false, error: ''}
export default(state =INSTIAL_STATE, action)=>{
    switch(action.type){
        case LOGIN_ATTEMPT:
        return {...state, loading: true}
        case LOGIN_FAILED:
        return {...INSTIAL_STATE, loading: false, error: action.error}
        case LOGIN_SUCCESS:
        return {...INSTIAL_STATE, loading: false, user: action.user}
        default:
        return state;
    }
}