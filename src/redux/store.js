import { configureStore } from '@reduxjs/toolkit';
import { toursReducer } from './tours/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	tours: toursReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;