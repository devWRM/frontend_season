import { combineReducers } from 'redux';

import { termReducer } from './termReducer.js';


export const rootReducer = combineReducers({
    terms: termReducer
})