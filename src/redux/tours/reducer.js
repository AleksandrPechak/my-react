// import { createReducer } from '@reduxjs/toolkit';
// import * as Types from './constants';

// const initialState = [];

/* ====================do not use redux-toolkit======================== */

// export const toursReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case Types.ADD_NEW_TOUR:
// 			return [...state, action.payload];
// 		case Types.DELETE_TOUR:
// 			return state.filter((tour) => tour.id !== action.payload);
// 		default:
// 			return state;
// 	}
// };

/* ====================use redux-toolkit======================== */

// export const toursReducer = createReducer(initialState, (builder) => {
// 	builder.addCase(Types.ADD_NEW_TOUR, (state, action) => {
// 		state.push(action.payload);
// 	})
// 		.addCase(Types.DELETE_TOUR, (state, action) => state.filter((tour) => tour.id !== action.payload));
// });