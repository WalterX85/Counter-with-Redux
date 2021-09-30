import {createStore, combineReducers} from 'redux';
import CounterReducer from './CounterReducer'
import AddCartReducer from './AddCartReducer'


const rootReducer = combineReducers({
  CounterReducer,
  AddCartReducer
})

const store = createStore(rootReducer);

export default store;