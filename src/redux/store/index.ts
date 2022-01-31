import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import allReducer from '../reducer';

export const store = createStore(allReducer, applyMiddleware(thunkMiddleware));
