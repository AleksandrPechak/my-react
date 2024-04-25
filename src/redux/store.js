import { configureStore } from '@reduxjs/toolkit';
// import { toursReducer } from './tours/reducer';
// import { combineReducers } from 'redux';
import { toursReducer } from './tours/slice';

// const rootReducer = combineReducers({
// 	tours: toursReducer,
// });

// console.log(toursSlice);

const store = configureStore({
	reducer: {
		tours: toursReducer,
	},
});

export default store;