import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const toursSlice = createSlice({
	name: 'tours',
	initialState,
	reducers: {
		// Standart case
		addTour: (state, action) => {
			state.push(action.payload);
		},
		// Special case, add smth to payload

		// addTour: {
		// 	reducer: (state, action) => {
		// 		state.push(action.payload);
		// 	},
		// 	prepare: (tour) => ({
		// 		payload: {
		// 			...tour,
		// 			completed: true,
		// 			id: uuidv4(),
		// 		},
		// 	}),
		// },
		removeTour: (state, action) => {
			return state.filter((tour) => tour.id !== action.payload);
		},
	},
});

export const { addTour, removeTour } = toursSlice.actions;

export const toursReducer = toursSlice.reducer;

// export const selectTours = (state) => state.tours;