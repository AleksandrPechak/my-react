import * as Types from './constants';

const initialState = [];

export const toursReducer = (state = initialState, action) => {
	switch (action.type) {
		case Types.ADD_NEW_TOUR:
			return [...state, action.payload];
		case Types.DELETE_TOUR:
			return state.filter((tour) => tour.id !== action.payload);
		default:
			return state;
	}
};