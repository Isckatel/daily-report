import {createStore, combineReducers } from "redux";
// import thunkMiddleware from 'redux-thunk';
import reportsReducer from './reports-reducer';
// import { configureStore } from '@reduxjs/toolkit'

let reducers = combineReducers({
  reports: reportsReducer
});

let store = createStore(reducers);

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;
