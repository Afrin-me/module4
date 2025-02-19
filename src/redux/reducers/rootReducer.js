import { counterReducer} from "./CounterReducer";
import { combineReducers } from "redux";
import {todoAppReducer} from './todoAppReducer'




export const rootReducer = combineReducers({
  counter: counterReducer,
  todo : todoAppReducer
});