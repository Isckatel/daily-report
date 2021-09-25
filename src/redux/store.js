import {createStore, combineReducers } from "redux";
// import thunkMiddleware from 'redux-thunk';
import reportsReducer from './reports-reducer';

let reducers = combineReducers({
  reports: reportsReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
