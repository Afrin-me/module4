import { DEC_COUNT, INC_COUNT } from "../actions/action"


const initVal = {count:0}

export const counterReducer = (state=initVal, action)=>{
    switch(action.type){
        case INC_COUNT:
            return {...state, count: state.count + 1}
        case DEC_COUNT:
            return {...state, count:state.count - 1}  
        default :
        return state;      
    }

}