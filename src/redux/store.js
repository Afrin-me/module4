import {legacy_createStore as createStore} from 'redux';
import {todoReducer} from '../redux/reducers/todoReducer';
import { counterReducer } from './reducers/CounterReducer';
import { rootReducer } from './reducers/rootReducer';


// export const store = createStore(todoReducer)
export const store = createStore(rootReducer);