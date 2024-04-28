import { configureStore } from '@reduxjs/toolkit';
import { toursReducer } from './tours/slice';

const store = configureStore({
	reducer: {
		tours: toursReducer,
	},
});

export default store;