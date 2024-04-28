import { createSlice } from '@reduxjs/toolkit';
import { fetchToursThunk, removeTourByIdThunk } from './operation';

const initialState = {
	isLoading: false,
	error: null,
	items: [],
};

const isPending = (action) => typeof action.type === 'string' && action.type.endsWith('/pending');
const isRejected = (action) => typeof action.type === 'string' && action.type.endsWith('/rejected');

const pendingReducer = (state) => {
	state.isLoading = true;
	state.items = [];
	state.error = null;
};

export const toursSlice = createSlice({
	name: 'tours',
	initialState,
	// reducers: {
	// 	fetchingInProgress: (state) => {
	// 		state.isLoading = true;
	// 		state.items = [];
	// 		state.error = null;
	// 	},
	// 	fetchingSuccess: (state, action) => {
	// 		state.isLoading = false;
	// 		state.items = action.payload;
	// 	},
	// 	fetchingError: (state, action) => {
	// 		state.isLoading = false;
	// 		state.error = action.payload;
	// 	},
	// },
	extraReducers: (builder) => {
		builder
			.addCase(fetchToursThunk.fulfilled, (state, action) => {
				state.isLoading = false;
				state.items = action.payload;
			})
			.addCase(removeTourByIdThunk.fulfilled, (state, action) => {
				state.isLoading = false;
				state.items = action.payload;
			})
			.addMatcher(isPending, pendingReducer)
			.addMatcher(isRejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { addTour, removeTour, fetchingInProgress, fetchingSuccess, fetchingError } =
	toursSlice.actions;

export const toursReducer = toursSlice.reducer;

export const selectTours = (state) => state.tours;