/* eslint-disable prettier/prettier */
import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './Auth/Reducer';
import taskReducer from './Task/Reducer';

const rootReducers = combineReducers({
    auth:authReducer,
    task:taskReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
